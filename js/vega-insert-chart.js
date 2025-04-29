function _insertChart(chartId, schemaUrl, width, height) {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('ciao');
        const chartDiv = document.getElementById(chartId);

        // Crea e aggiunge il grafico Vega
        const chart = document.createElement('vegachart');
        chart.style.width = width;
        chart.style.height = height;
        chart.setAttribute('schema-url', schemaUrl);
        const image = chartDiv.getElementsByTagName('img');
        console.log('Image:', image);
        chartDiv.appendChild(chart);
        console.log('Chart created:', chart);

        setTimeout(() => {
            parseSchema(chart).then(schema => vegaEmbed(chart, schema, { 'actions': false }));
        }, 250);


    });
}