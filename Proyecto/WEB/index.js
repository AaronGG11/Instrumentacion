google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart);

'use strict';

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Voltaje', 0]
    ]);

    var options = {
        width: 1000,
        height: 300,
        greenFrom: 0,
        greenTo: 50,
        yellowFrom: 50,
        yellowTo: 75,
        redFrom: 75,
        redTo: 100,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
    chart.draw(data, options);

    var dato = 0;

    setInterval(function() {
        readTextFile("index.json", function(text) {
            var data = JSON.parse(text);
            dato = parseFloat(data.voltaje);
        });
        data.setValue(0, 1, dato);
        chart.draw(data, options);
    }, 300);
}