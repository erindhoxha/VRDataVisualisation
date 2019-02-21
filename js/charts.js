
function addChartForAustralia() {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
      labels: 
        ['Auckland', 'Wellington', 'Hamilton', 'Dunedin', 'Christchurch'],
        datasets: [{
          label: '# of Votes',
          data: [15, 11, 5, 12, 24],
          backgroundColor: [
            'rgba(19, 165, 255, 0.721)',
            'rgba(28, 28, 184, 0.721)',
            'rgba(212, 119, 184, 0.721)',
            'rgba(22, 221, 184, 0.721)',
            'rgba(22, 221, 11, 0.721)',
          ],
          borderColor: [
          ],
          borderWidth: 0
        }]
      },
      options: {
        layout: {
          padding: 30,
          left: 10,
          top: 5,
        },
        scales: {
          yAxes: [{
            ticks: {
              padding: 25,
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

$("#svg-australia").show();
$("#svg-new-zealand").show();
$(".myChart").attr('id', 'myChart');
$("#myChart").show();
addChartForAustralia();