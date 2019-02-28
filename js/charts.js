function addChartForAustralia() {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart2 = new Chart(ctx, {
      type: 'doughnut',
      data: {
      labels: 
        ['New Zealand', 'Australia', 'Auckland', 'Sydney', 'Christchurch'],
        datasets: [{
          label: '# of Votes',
          data: [15, 11, 5, 12, 24],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86,0.4)',
                'rgba(75, 192, 192,0.4)',
                'rgba(153, 102, 255,0.4)',
                'rgba(255, 159, 64,0.4)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
          borderWidth: 0
        }]
      },
      options: {
        legend: {
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'white',
              fontSize: 15,
              padding:20,
          }
      },
        layout: {
          padding: 30,
          left: 10,
          top: 5,
        },
        scales: {
          yAxes: [{
            ticks: {
              padding: 100,
              beginAtZero: true,
              display: false
            },
            display:false,
          }]
        }
      },
      layout: {
        padding: {
          left:50,
          top:50,
          bottom:0,
          right:0
        }
      }
    });
}
addChartForAustralia();

$("#svg-australia").show();
$("#svg-new-zealand").show();
$(".myChart").attr('id', 'myChart');


function addChartForEurope() {
  var ctx = document.getElementById("myChartEurope").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
    labels: 
      ['Italy', 'France', 'England', 'Albania', 'Bulgaria'],
      datasets: [{
        label: '# of Votes',
        data: [15, 11, 5, 12, 24],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86,0.4)',
                'rgba(75, 192, 192,0.4)',
                'rgba(153, 102, 255,0.4)',
                'rgba(255, 159, 64,0.4)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        borderWidth: 0
      }]
    },
    options: {
      legend: {
        labels: {
            // This more specific font property overrides the global property
            fontColor: 'white',
            fontSize: 15,
            padding:20,
        }
    },
      layout: {
        padding: 30,
        left: 10,
        top: 5,
      },
      scales: {
        yAxes: [{
          ticks: {
            padding: 100,
            beginAtZero: true,
            display: false
          },
          display:false,
        }]
      }
    },
    layout: {
      padding: {
        left:50,
        top:50,
        bottom:0,
        right:0
      }
    }
  });
}

function addChartForAmerica() {
  var ctx = document.getElementById("myChartAmerica").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: 
      ['Auckland', 'Wellington', 'Hamilton', 'Dunedin', 'Christchurch'],
      datasets: [{
        label: '# of Votes',
        data: [15, 11, 5, 12, 24],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86,0.4)',
                'rgba(75, 192, 192,0.4)',
                'rgba(153, 102, 255,0.4)',
                'rgba(255, 159, 64,0.4)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
        borderWidth: 0
      }]
    },
    options: {
      legend: {
        labels: {
            // This more specific font property overrides the global property
            fontColor: 'white',
            fontSize: 15,
            padding:20,
        }
    },
      layout: {
        padding: 30,
        left: 10,
        top: 5,
      },
      scales: {
        yAxes: [{
          ticks: {
            padding: 100,
            beginAtZero: true,
            display: false
          },
          display:false,
        }]
      }
    },
    layout: {
      padding: {
        left:50,
        top:50,
        bottom:0,
        right:0
      }
    }
  });
}


function addChartForAsia() {
  var myNewChart = document.getElementById("myChartAsia").getContext('2d');
  var myChart = new Chart(myNewChart, {
    type: 'pie',
    data: {
    labels: 
      ['Auckland', 'Wellington', 'Hamilton', 'Dunedin', 'Christchurch'],
      datasets: [{
        label: '# of Votes',
        data: [20, 10, 4, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86,0.4)',
                'rgba(75, 192, 192,0.4)',
                'rgba(153, 102, 255,0.4)',
                'rgba(255, 159, 64,0.4)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
        borderWidth: 0
      }]
    },
    options: {
      legend: {
        labels: {
            // This more specific font property overrides the global property
            fontColor: 'white',
            fontSize: 15,
            padding:20,
        }
    },
      tooltips: {
        callbacks: {
            labelColor: function(tooltipItem, chart) {
                return {
                    borderColor: 'rgb(255, 255, 255)',
                    backgroundColor: 'rgb(255, 255, 255)'
                }
            },
            labelTextColor:function(tooltipItem, chart){
                return '#fff';
            }
          }
      },
      layout: {
        padding: 30,
        left: 10,
        top: 5,
      },
      gridLines: {
        display: false
     },
      scales: {
        display:false,
        yAxes: [{
          ticks: {
            maxTicksLimit: 3,
            padding: 100,
            beginAtZero: true,
            display: false
          },
        }]
      }
    },
    layout: {
      padding: {
        left:50,
        top:50,
        bottom:0,
        right:0
      }
    }
  });
  myNewChart.options.legend.display = false; 
}



var ctx = document.getElementById("myChartEnd").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
  labels: 
    ['2005','2006','2007','2008','2009','2010','2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    datasets: [{
      label: 'Number of VR Rooms',
      data: [2,4,5, 10, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 300],
          backgroundColor: [
              'rgba(19, 165, 255, 0.721))',
              'rgba(19, 165, 255, 0.121))',
              'rgba(19, 111, 255, 0.721))',
              'rgba(75, 192, 192,0.4)',
              'rgba(153, 102, 255,0.4)',
              'rgba(255, 159, 64,0.4)'
            ],
      borderWidth: 0
    }]
  },
  options: {
    legend: {
      display: false,
      labels: {
          // This more specific font property overrides the global property
        display:false
      }
  },
    layout: {
      padding: 30,
      left: 10,
      top: 5,
    },
    gridLines: {
      display: false
   },
    scales: {
      display:false,
      yAxes: [{
        ticks: {
          maxTicksLimit: 3,
          padding: 100,
          beginAtZero: true,
          display: false
        },
      }]
    }
  },
  layout: {
    padding: {
      left:50,
      top:50,
      bottom:0,
      right:0
    }
  }
});