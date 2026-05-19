/**
 * Vega-Lite Chart Utility for Marp Slides (legacy-compatible API)
 *
 * This script embeds Vega-Lite specs from JSON files into a target container
 * and forces SVG rendering for more reliable pointer/tooltip behavior in Marp.
 *
 * Usage:
 * 1. Add Vega libraries in the slide header:
 *    <script src="https://cdn.jsdelivr.net/npm/vega@5.30.0"></script>
 *    <script src="https://cdn.jsdelivr.net/npm/vega-lite@5.21.0"></script>
 *    <script src="https://cdn.jsdelivr.net/npm/vega-embed@6.26.0"></script>
 *
 * 2. Include this script:
 *    <script src="js/vega-chart.js"></script>
 *
 * 3. Add a chart container in the slide body:
 *    <div id="my-chart" style="width: 100%; height: 450px;"></div>
 *
 * 4. Call insertChart with the legacy signature:
 *    <script>
 *      insertChart('my-chart', './chart/my-spec.json', '100%', '450px');
 *    </script>
 *
 * @param {string} chartId - ID of the container element.
 * @param {string} schemaUrl - Path to the Vega-Lite JSON specification.
 * @param {string} width - Desired chart/container width (e.g. '100%', '700px').
 * @param {string} height - Desired chart/container height (e.g. '450px').
 */
function insertChart(chartId, schemaUrl, width, height) {
    document.addEventListener('DOMContentLoaded', function () {
        const chartDiv = document.getElementById(chartId);
        if (!chartDiv) {
            console.error(`Chart container with id '${chartId}' not found`);
            return;
        }

        chartDiv.style.display = 'block';
        chartDiv.style.width = width || '100%';
        chartDiv.style.height = height || '100%';

        function applyWidthToSpec(spec, targetWidth) {
            if (!spec || !Number.isFinite(targetWidth) || targetWidth <= 0) return;

            const shouldSetWidth =
                spec.width === undefined ||
                spec.width === null ||
                spec.width === 'container';

            if (shouldSetWidth) {
                spec.width = targetWidth;
            }

            ['vconcat', 'hconcat', 'concat', 'layer'].forEach((key) => {
                if (Array.isArray(spec[key])) {
                    spec[key].forEach((child) => applyWidthToSpec(child, targetWidth));
                }
            });

            if (spec.spec) {
                applyWidthToSpec(spec.spec, targetWidth);
            }
        }

        // Use a standard block container so Vega's pointer mapping stays aligned.
        const chart = document.createElement('div');
        chart.style.display = 'block';
        chart.style.maxWidth = '100%';
        chart.style.width = width || '100%';
        chart.style.height = height || '100%';
        chartDiv.appendChild(chart);

        const getRenderWidth = () => {
            const containerWidth = Math.floor(
                chartDiv.getBoundingClientRect().width || chart.getBoundingClientRect().width || 0
            );
            const viewportWidth = Math.max(0, Math.floor(window.innerWidth - 32));
            return Math.min(containerWidth, viewportWidth);
        };

        const waitForPositiveWidth = (maxAttempts = 20, delayMs = 80) =>
            new Promise((resolve) => {
                let attempts = 0;
                const check = () => {
                    const w = getRenderWidth();
                    if (w > 0 || attempts >= maxAttempts) {
                        resolve(w);
                        return;
                    }
                    attempts += 1;
                    setTimeout(check, delayMs);
                };
                check();
            });

        setTimeout(() => {
                fetch(schemaUrl)
                    .then((response) => response.json())
                    .then(async (schema) => {
                        const isResponsiveWidth =
                            schema.width === undefined || schema.width === null || schema.width === 'container';

                        const renderWidth = await waitForPositiveWidth();
                        applyWidthToSpec(schema, renderWidth);

                        vegaEmbed(chart, schema, {
                            actions: false,
                            renderer: 'svg'
                        }).then((result) => {
                            if (typeof ResizeObserver !== 'undefined' && isResponsiveWidth) {
                                let lastWidth = renderWidth;
                                const ro = new ResizeObserver(() => {
                                    const nextWidth = getRenderWidth();
                                    if (!nextWidth || nextWidth === lastWidth) return;
                                    lastWidth = nextWidth;

                                    if (result?.view?.width) {
                                        result.view.width(nextWidth).runAsync();
                                        return;
                                    }

                                    if (result?.view?.resize) {
                                        result.view.resize().runAsync();
                                    }
                                });
                                ro.observe(chartDiv);
                            }
                        });
                    })
                    .catch((error) => {
                        console.error(`Error loading chart from ${schemaUrl}:`, error);
                    });
        }, 250);


    });
}