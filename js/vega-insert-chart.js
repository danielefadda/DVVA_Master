function _insertChart(chartId, schemaUrl, width, height) {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('ciao');
        const chartDiv = document.getElementById(chartId);
        chartDiv.style.display = 'block';
        chartDiv.style.width = width;
        chartDiv.style.height = height;

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

        // Crea e aggiunge il grafico Vega
        const chart = document.createElement('vegachart');
        chart.style.display = 'block';
        chart.style.maxWidth = '100%';
        chart.style.width = width;
        chart.style.height = height;
        chart.setAttribute('schema-url', schemaUrl);
        const image = chartDiv.getElementsByTagName('img');
        console.log('Image:', image);
        chartDiv.appendChild(chart);
        console.log('Chart created:', chart);

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
            parseSchema(chart).then(async (schema) => {
                const isResponsiveWidth =
                    schema.width === undefined || schema.width === null || schema.width === 'container';

                const renderWidth = await waitForPositiveWidth();
                applyWidthToSpec(schema, renderWidth);

                vegaEmbed(chart, schema, { actions: false }).then((result) => {
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
            });
        }, 250);


    });
}