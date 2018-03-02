import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2';
import DashboardNew from './_dashboard';

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';


// Social Box Chart
const socialBoxData = [
  {
    data: [65, 59, 84, 84, 51, 55, 40], 
    label: 'facebook'
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'twitter'
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'linkedin'
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'google'
  }
];

const makeSocialBoxData = (dataSetNo) => {
  // console.log(dataSetNo);
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      }
    ]
  };
  return () => data;
};

const socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

// Main Chart

// convert Hex to RGBA
function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: convertHex(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3
    }
  ]
}

const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false,
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        stepSize: Math.ceil(250 / 5),
        max: 250
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  }
}

// const progress40 = {
//   width: '40%',
// };

// const progress20 = {
//   width: '20%',
// }

// const progress60 = {
//   width: '60%',
// }

// const progress80 = {
//   width: '80%',
// }


const bulletChart = (data, k=0) => {
  return (
    <div key={`bullet-${k}`} className="progress-container pb-3">
      <div className="text-muted">{data.name}</div>
      <strong>{data.label} {data.value}</strong> ({data.progress}{data.suffix})
      <div className="progress">
        <div className={`progress-bar bg-${data.color}`} role="progressbar" style={{width: `${data.progress}%`}} aria-valuenow="{data.progress}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
  );
}

const trafficFooter = (list) => {
  return list.map((item, i) => {
    return bulletChart(item, i)
  }) 
}

class Dashboard extends Component {

  render() {
    return (
      <div className="chart-container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-lg-3">
            <div className="social-box facebook">
              <i className="fa fa-facebook"></i>
              <div className="chart-wrapper">
                <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={90}/>
              </div>
              <ul>
                <li>
                  <strong>89k</strong>
                  <span>friends</span>
                </li>
                <li>
                  <strong>459</strong>
                  <span>feeds</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-6 col-sm-6 col-lg-3">
            <div className="social-box twitter">
              <i className="fa fa-twitter"></i>
              <div className="chart-wrapper">
                <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90}/>
              </div>
              <ul>
                <li>
                  <strong>973k</strong>
                  <span>followers</span>
                </li>
                <li>
                  <strong>1.792</strong>
                  <span>tweets</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-6 col-sm-6 col-lg-3">
            <div className="social-box linkedin">
              <i className="fa fa-linkedin"></i>
              <div className="chart-wrapper">
                <Line data={makeSocialBoxData(2)} options={socialChartOpts} height={90}/>
              </div>
              <ul>
                <li>
                  <strong>500+</strong>
                  <span>contacts</span>
                </li>
                <li>
                  <strong>292</strong>
                  <span>feeds</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-6 col-sm-6 col-lg-3">
            <div className="social-box google-plus">
              <i className="fa fa-google-plus"></i>
              <div className="chart-wrapper">
                <Line data={makeSocialBoxData(3)} options={socialChartOpts} height={90}/>
              </div>
              <ul>
                <li>
                  <strong>894</strong>
                  <span>followers</span>
                </li>
                <li>
                  <strong>92</strong>
                  <span>circles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-5">
                    <h5 className="card-title">
                      Traffic
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">November 2018</h6>
                  </div>
                </div>

                <div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
                  <Line data={mainChart} options={mainChartOpts} height={300}/>
                </div>

              </div>
              <div className="card-footer">
                {trafficFooter(DashboardNew.dashboardItem)}
                
                

                
                
              </div>
            </div>
          </div>
        </div>
      </div>
      


    )
  }
}

export default Dashboard;
