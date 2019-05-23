function draw_V_graph(id)
{
	 $.post("./chart.php",
      {
        id: id
      },
      function(data){
        var V1 = [];
        var V2 = [];
        var V3 = [];
        var AVN = [];
        var datetime = [];

        for(var i in data) {
          V1.push(data[i].V1);
          V2.push(data[i].V2);
          V3.push(data[i].V3);
          AVN.push(data[i].AVN);
          datetime.push(data[i].datetime);
        }

        var ctx = document.getElementById("myChart");

        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: datetime,
              datasets: 
              [
	              {
	                  label: "V1",
	                  data: V1,
	                  borderColor: "#3e95cd",
	                  fill: false
	              },
	              {
	                  label: "V2",
	                  data: V2,
	                  borderColor: "#8e5ea2",
	                  fill: false
	              },
	              {
	                  label: "V3",
	                  data: V3,
	                  borderColor: "#3cba9f",
	                  fill: false
	              },
	              {
	                  label: "AVN",
	                  data: AVN,
	                  borderColor: "#e8c3b9",
	                  fill: false
	              }
              ]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      	});

      });
}

function draw_U_graph(id)
{
	 $.post("./chart.php",
      {
        id: id
      },
      function(data){
        var U1 = [];
        var U2 = [];
        var U3 = [];
        var AVL = [];
        var datetime = [];

        for(var i in data) {
          U1.push(data[i].U1);
          U2.push(data[i].U2);
          U3.push(data[i].U3);
          AVL.push(data[i].AVL);
          datetime.push(data[i].datetime);
        }

        var ctx = document.getElementById("myChart");

        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: datetime,
              datasets: 
              [
	              {
	                  label: "U1",
	                  data: U1,
	                  borderColor: "#3e95cd",
	                  fill: false
	              },
	              {
	                  label: "U2",
	                  data: U2,
	                  borderColor: "#8e5ea2",
	                  fill: false
	              },
	              {
	                  label: "U3",
	                  data: U3,
	                  borderColor: "#3cba9f",
	                  fill: false
	              },
	              {
	                  label: "AVL",
	                  data: AVL,
	                  borderColor: "#e8c3b9",
	                  fill: false
	              }
              ]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      	});

      });
}

function draw_I_graph(id)
{
	 $.post("./chart.php",
      {
        id: id
      },
      function(data){
        var I1 = [];
        var I2 = [];
        var I3 = [];
        var AI = [];
        var datetime = [];

        for(var i in data) {
          I1.push(data[i].I1);
          I2.push(data[i].I2);
          I3.push(data[i].I3);
          AI.push(data[i].AI);
          datetime.push(data[i].datetime);
        }

        var ctx = document.getElementById("myChart");

        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: datetime,
              datasets: 
              [
	              {
	                  label: "I1",
	                  data: I1,
	                  borderColor: "#3e95cd",
	                  fill: false
	              },
	              {
	                  label: "I2",
	                  data: I2,
	                  borderColor: "#8e5ea2",
	                  fill: false
	              },
	              {
	                  label: "I3",
	                  data: I3,
	                  borderColor: "#3cba9f",
	                  fill: false
	              },
	              {
	                  label: "AI",
	                  data: AI,
	                  borderColor: "#e8c3b9",
	                  fill: false
	              }
              ]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      	});

      });
}

function draw_W_graph(id)
{
	 $.post("./chart.php",
      {
        id: id
      },
      function(data){
        var W1 = [];
        var W2 = [];
        var W3 = [];
        var TW = [];
        var datetime = [];

        for(var i in data) {
          W1.push(data[i].W1);
          W2.push(data[i].W2);
          W3.push(data[i].W3);
          TW.push(data[i].TW);
          datetime.push(data[i].datetime);
        }

        var ctx = document.getElementById("myChart");

        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: datetime,
              datasets: 
              [
	              {
	                  label: "W1",
	                  data: W1,
	                  borderColor: "#3e95cd",
	                  fill: false
	              },
	              {
	                  label: "W2",
	                  data: W2,
	                  borderColor: "#8e5ea2",
	                  fill: false
	              },
	              {
	                  label: "W3",
	                  data: W3,
	                  borderColor: "#3cba9f",
	                  fill: false
	              },
	              {
	                  label: "TW",
	                  data: TW,
	                  borderColor: "#e8c3b9",
	                  fill: false
	              }
              ]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      	});

      });
}


function draw_A_graph(id)
{
	 $.post("./chart.php",
      {
        id: id
      },
      function(data){
        var A1 = [];
        var A2 = [];
        var A3 = [];
        var TA = [];
        var datetime = [];

        for(var i in data) {
          A1.push(data[i].A1);
          A2.push(data[i].A2);
          A3.push(data[i].A3);
          TA.push(data[i].TA);
          datetime.push(data[i].datetime);
        }

        var ctx = document.getElementById("myChart");

        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: datetime,
              datasets: 
              [
	              {
	                  label: "kVA1",
	                  data: A1,
	                  borderColor: "#3e95cd",
	                  fill: false
	              },
	              {
	                  label: "kVA2",
	                  data: A2,
	                  borderColor: "#8e5ea2",
	                  fill: false
	              },
	              {
	                  label: "kVA3",
	                  data: A3,
	                  borderColor: "#3cba9f",
	                  fill: false
	              },
	              {
	                  label: "TkVA",
	                  data: TA,
	                  borderColor: "#e8c3b9",
	                  fill: false
	              }
              ]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      	});

      });
}


function draw_R_graph(id)
{
	 $.post("./chart.php",
      {
        id: id
      },
      function(data){
        var R1 = [];
        var R2 = [];
        var R3 = [];
        var TR = [];
        var datetime = [];

        for(var i in data) {
          R1.push(data[i].R1);
          R2.push(data[i].R2);
          R3.push(data[i].R3);
          TR.push(data[i].TR);
          datetime.push(data[i].datetime);
        }

        var ctx = document.getElementById("myChart");

        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: datetime,
              datasets: 
              [
	              {
	                  label: "kVAr1",
	                  data: R1,
	                  borderColor: "#3e95cd",
	                  fill: false
	              },
	              {
	                  label: "kVAr2",
	                  data: R2,
	                  borderColor: "#8e5ea2",
	                  fill: false
	              },
	              {
	                  label: "kVAr3",
	                  data: R3,
	                  borderColor: "#3cba9f",
	                  fill: false
	              },
	              {
	                  label: "TkVAr",
	                  data: TR,
	                  borderColor: "#e8c3b9",
	                  fill: false
	              }
              ]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      	});

      });
}


function draw_P_graph(id)
{
	 $.post("./chart.php",
      {
        id: id
      },
      function(data){
        var P1 = [];
        var P2 = [];
        var P3 = [];
        var AP = [];
        var datetime = [];

        for(var i in data) {
          P1.push(data[i].P1);
          P2.push(data[i].P2);
          P3.push(data[i].P3);
          AP.push(data[i].AP);
          datetime.push(data[i].datetime);
        }

        var ctx = document.getElementById("myChart");

        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: datetime,
              datasets: 
              [
	              {
	                  label: "PF1",
	                  data: P1,
	                  borderColor: "#3e95cd",
	                  fill: false
	              },
	              {
	                  label: "PF2",
	                  data: P2,
	                  borderColor: "#8e5ea2",
	                  fill: false
	              },
	              {
	                  label: "PF3",
	                  data: P3,
	                  borderColor: "#3cba9f",
	                  fill: false
	              },
	              {
	                  label: "AvPF",
	                  data: AP,
	                  borderColor: "#e8c3b9",
	                  fill: false
	              }
              ]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      	});

      });
}