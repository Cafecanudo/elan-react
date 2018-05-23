import React, {Component} from 'react'
import AmCharts from "@amcharts/amcharts3-react/index";

export default class VisaoBrasil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataProvider: [{
        "country": "AC",
        "online": 248,
        "contingencia": 81
      }, {
        "country": "AL",
        "online": 240,
        "contingencia": 120
      }, {
        "country": "AM",
        "online": 229,
        "contingencia": 186
      }, {
        "country": "AP",
        "online": 167,
        "contingencia": 56
      }, {
        "country": "DF",
        "online": 249,
        "contingencia": 45
      }, {
        "country": "ES",
        "online": 214,
        "contingencia": 32
      }, {
        "country": "GO",
        "online": 241,
        "contingencia": 66
      }, {
        "country": "MA",
        "online": 143,
        "contingencia": 78
      }, {
        "country": "MS",
        "online": 225,
        "contingencia": 0
      }, {
        "country": "MT",
        "online": 123,
        "contingencia": 43
      }, {
        "country": "PA",
        "online": 176,
        "contingencia": 73
      }, {
        "country": "RJ",
        "online": 139,
        "contingencia": 34
      }, {
        "country": "RN",
        "online": 138,
        "contingencia": 45
      }, {
        "country": "RS",
        "online": 111,
        "contingencia": 21
      }, {
        "country": "SP",
        "online": 269,
        "contingencia": 68
      }]
    }
  }

  componentChart() {
    return React.createElement(AmCharts.React, {
      style: {
        width: "100%",
        height: "500px"
      },
      options: this.config()
    });
  }

  config() {
    return {
      "theme": "light",
      "type": "serial",
      "dataProvider": this.state.dataProvider,
      "valueAxes": [{
        "unit": "%",
        "position": "left",
        "title": "GDP growth rate",
      }],
      "startDuration": 1,
      "graphs": [{
        "balloonText": "[[category]] (Online): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "Online",
        "type": "column",
        "valueField": "online"
      }, {
        "balloonText": "[[category]] (Contingência): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "Contingência",
        "type": "column",
        "clustered":false,
        "columnWidth":0.5,
        "valueField": "contingencia"
      }],
      "plotAreaFillAlphas": 0.1,
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start"
      },
      "export": {
        "enabled": true
      }
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h6>Notas em Contingência - visão Brasil</h6>
        </div>
        <div className="card-body">
          {this.componentChart()}
        </div>
      </div>
    )
  }
}