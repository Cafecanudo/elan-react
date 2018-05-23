import React, {Component} from 'react'
import AmCharts from "@amcharts/amcharts3-react/index";

export default class RankingLojas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataProvider: [{
        "country": "0387 ES",
        "contingencia": 30.4,
        "online": 136
      }, {
        "country": "0475 ES",
        "contingencia": 29.9,
        "online": 330
      }, {
        "country": "0340 AM",
        "contingencia": 26.5,
        "online": 118
      }, {
        "country": "0187 ES",
        "contingencia": 21.1,
        "online": 164
      }, {
        "country": "0346 GO",
        "contingencia": 14.3,
        "online": 164
      }, {
        "country": "0602 RJ",
        "contingencia": 13.7,
        "online": 90
      }, {
        "country": "0134 MT",
        "contingencia": 13.3,
        "online": 75
      }, {
        "country": "0474 MT",
        "contingencia": 13.1,
        "online": 36
      }, {
        "country": "0447 MT",
        "contingencia": 12.8,
        "online": 131
      }, {
        "country": "0448 MT",
        "contingencia": 12.1,
        "online": 69
      }, {
        "country": "1231 MT",
        "contingencia": 11.9,
        "online": 57
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
      "startDuration": 1,
      "graphs": [{
        "balloonText": "[[category]] (Contingência %): <b>[[value]]</b>",
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
          <h6>Ranking de Lojas em Contingência</h6>
        </div>
        <div className="card-body">
          {this.componentChart()}
        </div>
      </div>
    )
  }
}