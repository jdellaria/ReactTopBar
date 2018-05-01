import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from 'chart.js';
import {Line, Pie, Bar } from 'react-chartjs-2';

const myPieChart = {
    labels: ["Blue", "Red", "Yellow", "Green"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32],
      backgroundColor: ['#007fff', '#dc3545', '#ffc107', '#28a745'],
    }]
};

const myAreaChart = {
  labels: ["2001","2002","2003","2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
  datasets: [{
    label: "Terror Mentions Across Years",
    lineTension: 0.3,
    backgroundColor: "rgba(2,117,216,0.2)",
    borderColor: "rgba(2,117,216,1)",
    pointRadius: 5,
    pointBackgroundColor: "rgba(2,117,216,1)",
    pointBorderColor: "rgba(255,255,255,0.8)",
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(2,117,216,1)",
    pointHitRadius: 20,
    pointBorderWidth: 2,
    data: [60000, 30000, 30000, 30000, 20162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
  }
]
};
const myAreaChartOptions = {
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
};

const myBarChart = {
    labels: ["USA", "Russia", "Syria", "Trump", "Terror", "UN"],
    datasets: [{
      label: "Keyword",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    }],
  };

  const myBarChartOptions = {
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'month'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 6
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 15000,
            maxTicksLimit: 5
          },
          gridLines: {
            display: true
          }
        }],
      },
      legend: {
        display: false
      }
    }
  };

class Dashboard extends Component {

  render() {

    return (

      <div className="content-wrapper">
        <div className="container-fluid">

          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">My Dashboard</li>
          </ol>


          <div className="row">
            <div className="col-lg-8">

              <div className="card mb-3">
                <div className="card-header">
                  <i className="fa fa-bar-chart"></i>Top Keywords</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-8 my-auto">
                      <Bar data={myBarChart} width={100} height={50} options={myBarChartOptions} />
                    </div>
                    <div className="col-sm-4 text-center my-auto">
                      <div className="h4 mb-0 text-primary">$34,693</div>
                      <div className="small text-muted">YTD Revenue</div>
                      <hr/>
                      <div className="h4 mb-0 text-warning">$18,474</div>
                      <div className="small text-muted">YTD Expenses</div>
                      <hr/>
                      <div className="h4 mb-0 text-success">$16,219</div>
                      <div className="small text-muted">YTD Margin</div>
                    </div>
                  </div>
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
              </div>

              <div className="mb-0 mt-4">
                <i className="fa fa-newspaper-o"></i> News Feed</div>
              <hr className="mt-2"/>


            </div>
            <div className="col-lg-4">

              <div className="card mb-3">
                <div className="card-header">
                  <i className="fa fa-pie-chart"></i> Pie Chart Example</div>
                <div className="card-body">
                  <Pie data={myPieChart}  width="100%" height="100" />
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
              </div>


            </div>
          </div>


        </div>

        <footer className="sticky-footer">
          <div className="container">
            <div className="text-center">
              <small>Copyright © Your Website 2017</small>
            </div>
          </div>
        </footer>

        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fa fa-angle-up"></i>
        </a>

        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Dashboard;
