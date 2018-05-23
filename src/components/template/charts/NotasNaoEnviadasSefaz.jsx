import React, {Component} from 'react'
import AmCharts from "@amcharts/amcharts3-react/index";

export default class NotasNaoEnviadasSefaz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataProvider: [{
        "country": "AC",
        "contingencia": 21
      }, {
        "country": "AL",
        "contingencia": 32
      }, {
        "country": "AM",
        "contingencia": 23
      }, {
        "country": "AP",
        "contingencia": 11
      }, {
        "country": "DF",
        "contingencia": 9
      }, {
        "country": "ES",
        "contingencia": 17
      }, {
        "country": "GO",
        "contingencia": 12
      }, {
        "country": "MA",
        "contingencia": 21
      }, {
        "country": "MS",
        "contingencia": 0
      }, {
        "country": "MT",
        "contingencia": 45
      }, {
        "country": "PA",
        "contingencia": 32
      }, {
        "country": "RJ",
        "contingencia": 31
      }, {
        "country": "RN",
        "contingencia": 22
      }, {
        "country": "RS",
        "contingencia": 21
      }, {
        "country": "SP",
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
      "type": "serial",
      "theme": "light",
      "dataProvider": this.state.dataProvider,
      "valueAxes": [{
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0
      }],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "contingencia"
      }],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20
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
          <h6>Notas não enviadas para a SEFAZ há mais de 2 horas</h6>
        </div>
        <div className="card-body">
          {this.componentChart()}
        </div>
      </div>
    )
  }
}