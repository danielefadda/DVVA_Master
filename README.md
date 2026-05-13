# DVVA Master
Slides and exercises for the Data Visualization and Visual Analytics course

N.B. Slides must be compiled using MARP (use Visual Studio with the MARP extension)

## Getting Started with Marp CLI

From the `Master_2025` folder, you can preview and export slides with `marp-cli`.

### 1. Show slides in browser (watch mode)

```bash
cd Master_2025
npx @marp-team/marp-cli@latest -s .
```

### 2. Export slides

Export a single deck to PDF:

```bash
npx @marp-team/marp-cli@latest MASTER_slide_01_introduction.md --pdf
```

Export to HTML or PPTX:

```bash
npx @marp-team/marp-cli@latest MASTER_slide_01_introduction.md --html
npx @marp-team/marp-cli@latest MASTER_slide_01_introduction.md --pptx
```