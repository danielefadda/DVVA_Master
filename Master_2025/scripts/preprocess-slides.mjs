import { promises as fs } from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const varsPath = process.env.SLIDE_VARS_PATH || path.join(cwd, "slide-vars.json");
const outDir = path.join(cwd, ".rendered");
const linkedAssetDirs = ["img", "chart", "js", "theme"];

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

function replaceVars(content, vars, filePath) {
  return content.replace(/\{\{([A-Z0-9_]+)\}\}/g, (match, key) => {
    if (!(key in vars)) {
      throw new Error("Missing variable " + key + " in " + filePath);
    }
    return String(vars[key]);
  });
}

function renderedName(fileName) {
  return fileName.replace(/\.md$/i, ".md");
}

async function ensureOutputFolder() {
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });
}

async function ensureAssetLinks() {
  for (const dirName of linkedAssetDirs) {
    const srcPath = path.join(cwd, dirName);
    const dstPath = path.join(outDir, dirName);

    try {
      const stat = await fs.stat(srcPath);
      if (!stat.isDirectory()) {
        continue;
      }
    } catch {
      continue;
    }

    const relativeTarget = path.join("..", dirName);
    await fs.symlink(relativeTarget, dstPath, "junction");
  }
}

async function run() {
  const vars = await readJson(varsPath);
  const entries = await fs.readdir(cwd, { withFileTypes: true });

  const targets = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => /^MASTER_slide_.*\.md$/i.test(name))
    .filter((name) => !name.endsWith(".rendered.md"));

  if (targets.length === 0) {
    console.log("No slide files found.");
    return;
  }

  await ensureOutputFolder();
  await ensureAssetLinks();

  for (const fileName of targets) {
    const sourcePath = path.join(cwd, fileName);
    const outPath = path.join(outDir, renderedName(fileName));
    const src = await fs.readFile(sourcePath, "utf8");
    const out = replaceVars(src, vars, fileName);
    await fs.writeFile(outPath, out, "utf8");
    console.log("Generated " + path.relative(cwd, outPath));
  }
}

run().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
