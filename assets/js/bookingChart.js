Highcharts.setOptions({
    // colors: ['#1a6d6c',
    //         '#337d7c',
    //         '#4d8d8c',
    //         '#669d9d',
    //         '#80aead',
    //         '#99bebd',
    //         '#b2cece'
    //     ]
    colors: ['rgba(2,125,124,.5)', '#BA932D', 'darkgrey', '#EEEEEE', '#027D7C', '#1a6d6c', 'black']
});

var seatedBooking = function() {

    Highcharts.chart('seated', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: ''
        },
        xAxis: [{
            categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6',
                'W7', 'W8', 'W9', 'W10', 'W11', 'W12'
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: '',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            }
        }, { // Secondary yAxis
            title: '',
            labels: '',
            opposite: true
        }],
        exporting: {
            buttons: {
                contextButton: {
                    align: 'right',
                    x: 0,
                    y: 0,
                    left: 100,
                    verticalAlign: 'top'
                }
            }
        },
        tooltip: {
            shared: true
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 0
        },
        series: [{
            name: 'Current Year',
            type: 'column',
            yAxis: 1,
            data: [49, 71, 10, 12, 14, 176, 135, 14, 216, 19, 95, 54],
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: 'Last Year',
            type: 'line',
            data: [23, 69, 95, 145, 18, 215, 252, 25, 23, 103, 13, 96],
            tooltip: {
                valueSuffix: ''
            }
        }]
    });
};
var forecastBooking = function() {

    Highcharts.chart('forecast', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: ''
        },
        xAxis: [{
            categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6',
                'W7', 'W8', 'W9', 'W10', 'W11', 'W12'
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: '',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            }
        }, { // Secondary yAxis
            title: '',
            labels: '',
            opposite: true
        }],
        exporting: {
            buttons: {
                contextButton: {
                    align: 'right',
                    x: 0,
                    y: 0,
                    left: 100,
                    verticalAlign: 'top'
                }
            }
        },
        tooltip: {
            shared: true
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 0
        },
        series: [{
            name: 'Current Year',
            type: 'column',
            yAxis: 1,
            data: [41, 23, 10, 19, 14, 17, 13, 44, 26, 39, 15, 34],
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: 'Last Year',
            type: 'line',
            data: [23, 49, 15, 35, 18, 15, 25, 52, 33, 13, 18, 16],
            tooltip: {
                valueSuffix: ''
            }
        }]
    });
};
var bookingSource = function() {

    Highcharts.chart('source', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Day', 'Week to Date', 'Period to Date', 'Year to Date']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Direct',
            data: [5, 3, 4, 7]
        }, {
            name: 'Indirect',
            data: [2, 2, 3, 2]
        }]
    });
}
var cancelationsNoShows = function() {

    Highcharts.chart('cancelationsNoShows', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Day', 'Week to Date', 'Period to Date', 'Year to Date']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Cancellations',
            data: [5, 3, 4, 7]
        }, {
            name: 'No Shows',
            data: [2, 2, 3, 2]
        }]
    });
}
var partySize = function() {


    Highcharts.chart('partySizeBooking', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: ''
        },
        xAxis: [{
            categories: ['Day', 'Week to Date', 'Period to Date', 'Year to Date'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: '',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            }
        }, { // Secondary yAxis
            title: '',
            labels: '',
            opposite: true
        }],
        exporting: {
            buttons: {
                contextButton: {
                    align: 'right',
                    x: 0,
                    y: 0,
                    left: 100,
                    verticalAlign: 'top'
                }
            }
        },
        tooltip: {
            shared: true
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 0
        },
        series: [{
            name: 'Current Year',
            type: 'column',
            yAxis: 1,
            data: [49, 71, 10, 12],
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: 'Last Year',
            type: 'line',
            data: [23, 69, 95, 145],
            tooltip: {
                valueSuffix: ''
            }
        }]
    });
};
var timeAdvance = function() {

    Highcharts.chart('timeAdvance', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Day', 'Week to Date', 'Period to Date', 'Year to Date']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: '1-3 hrs',
            data: [5, 3, 4, 7]
        }, {
            name: '4-6 hrs',
            data: [2, 2, 3, 2]
        }, {
            name: '6-12 hrs',
            data: [12, 22, 13, 42]
        }, {
            name: '12-24 hrs',
            data: [32, 32, 43, 52]
        }, {
            name: '24-48 hrs',
            data: [25, 27, 43, 52]
        }, {
            name: '48+ hrs',
            data: [95, 42, 73, 92]
        }]
    });
}
var dayPartStackBar = function() {

    Highcharts.chart('dayPartStackBar', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Day', 'Week to Date', 'Period to Date', 'Year to Date']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: '9am-12noon',
            data: [5, 3, 4, 7]
        }, {
            name: '12noon-3pm',
            data: [2, 2, 3, 2]
        }, {
            name: '3pm-close',
            data: [12, 22, 13, 42]
        }]
    });
}
var dayPartPie = function() {
    Highcharts.chart('dayPartPie', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Monday',
                y: 61,
                sliced: true,
                selected: true
            }, {
                name: 'Tuesday',
                y: 11
            }, {
                name: 'Wednesday',
                y: 10
            }, {
                name: 'Thursday',
                y: 4
            }, {
                name: 'Friday',
                y: 4
            }, {
                name: 'Saturday',
                y: 7
            }, {
                name: 'Sunday',
                y: 17
            }]
        }]
    });
}
seatedBooking();
forecastBooking();
bookingSource();
cancelationsNoShows();
// capacity();
partySize();
timeAdvance();
dayPartStackBar();
dayPartPie();