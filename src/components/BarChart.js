import React from 'react'
import { Pie, defaults, Scatter, Bubble, Doughnut, Radar, Bar, Line } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = () => {
  return (
    <div className="charts" style={{display:'flex', height:'100vh', width:'100vw', flexDirection:'column', flexWrap:'wrap'}}>
      <div className="head" style={{height:50, width:'100%', marginBottom:15, display:'flex', alignItems:'center', justifyContent:'space-around'}}>
        <img src="../home.png" alt="Home" style={{width:30}} className="icone"/>
        <img src="../graph.png" alt="My Graphs" style={{width:28, height:28}} className="icone"/>
        <img src="../settings.png" alt="Settings" style={{width:30}} className="icone"/>
      </div>
    <div className="container" style={{height: '50%', width:'99%', display:'flex', flexDirection:"column", alignItems:"center" }}>
      <Pie
        data={{
          labels: ['???', '???', '???', '???', '???', '???'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={300}
        width={500}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  color: '#606060',
                }
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
              fontColor:'white'
            },
          },
        }}
      />
      </div>
      <div className="bar" style={{height:'40vh', width:'24.9%', justifyContent:'space-between',flexWrap: 'wrap', display: 'flex',flexDirection: 'column', marginTop:25 }}>
      <Bar
              data={{
                datasets: [
                  {
                    label: '????', 
                    backgroundColor: [
                      'rgba(255, 99, 132, 1)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1,
                    data: [12],
                  },
                  {
                    label: '????', 
                    backgroundColor: [
                      'rgba(54, 162, 235, 1)',
                    ],
                    borderColor: [
                      'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1,
                    data: [19],
                  },
                  {
                    label: '????', 
                    backgroundColor: [
                      'rgba(255, 206, 86, 1)',
                    ],
                    borderColor: [
                      'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1,
                    data: [3],
                  },
                  {
                    label: '????', 
                    backgroundColor: [
                      'rgba(75, 192, 192, 1)',
                    ],
                    borderColor: [
                      'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1,
                    data: [5],
                  },
                  {
                    label: '????', 
                    backgroundColor: [
                      'rgba(153, 102, 255, 1)',
                    ],
                    borderColor: [
                      'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1,
                    data: [2],
                  },
                  {
                    label: '????', 
                    backgroundColor: [
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderColor: [
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                    data: [3],
                  },

                  // {
                  //   label: '????',
                  //   data: [47, 52, 67, 58, 9, 50],
                  //   backgroundColor: 'orange',
                  //   borderColor: 'red',
                  // },
                ],
              }}
              height={100}
              width={200}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                      gridLines: {
                        color: '#606060',
                      }
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontSize: 25,
                    fontColor:'white'

                  },
                },
                
              }}

      
      />
      
      <Radar
              data={{
                labels: ['???', '???', '???', '???', '???', '???'],
                datasets: [
                  {
                    label: '???',
                    data: [20, 19, 35, 50, 30, 30],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.5)',
                      'rgba(54, 162, 235, 0.5)',
                      'rgba(255, 206, 86, 0.5)',
                      'rgba(75, 192, 192, 0.5)',
                      'rgba(153, 102, 255, 0.5)',
                      'rgba(255, 159, 64, 0.5)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                  },
                  {
                    label: '????',
                    data: [47, 52, 67, 58, 9, 40],
                    backgroundColor: 'rgba(51,162,235,0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                  },
                ],
              }}
              height={100}
              width={200}
              options={{
                
                maintainAspectRatio: false,
                scale: {
                  
                    gridLines: {
                      circular: true,
                      color:"#606060"
                    },
                    ticks: {
                     beginAtZero: true 
                    
                    
                  }
                  // xAxes: [{
                  //   gridLines: {
                  //     color: '#606060',
                  //   }
                  // }],
                  // yAxes: [
                  //   {
                  //     ticks: {
                  //       beginAtZero: true,
                  //     },
                  //     gridLines: {
                  //       color: '#606060',
                  //     }
                  //   },
                  // ],
                },
                legend: {
                  labels: {
                    fontSize: 25,
                    fontColor:'white'

                  },
                },
              }}
      />
      <Doughnut
              data={{
                labels: ['???', '???', '???', '???', '???', '????'],
                datasets: [
                  {
                    label: '???',
                    data: [20, 19, 35, 50, 30, 30],
                    backgroundColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                  },
                  // {
                  //   label: '????',
                  //   data: [47, 52, 67, 58, 9, 50],
                  //   backgroundColor: 'rgba(51,162,235,0.3)',
                  //   borderColor: '',
                  // },
                ],
              }}
              height={100}
              width={200}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                      gridLines: {
                        color: '#606060',
                      }
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontSize: 25,
                    fontColor:'white'

                  },
                },
              }}
      />   
            <Line
              data={{
                labels: ['???', '???', '???', '???', '???', '???'],
                datasets: [
                  {
                    label: '???',
                    data: [20, 19, 35, 50, 30, 30],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                  },
                  {
                    label: '????',
                    data: [47, 52, 67, 58, 9, 50],
                    backgroundColor: 'rgba(51,162,235,0.3)',
                    borderColor: 'rgba(54, 162, 235, 0.4)',
                  },
                ],
              }}
              height={100}
              width={200}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                      gridLines: {
                        color: '#606060',
                      }
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontSize: 25,
                    fontColor:'white',


                  },
                },
              }}
      />   

      </div>
    
    </div>
  )
}

export default BarChart
