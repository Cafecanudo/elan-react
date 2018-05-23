import React, {Component} from 'react'
import AmCharts from "@amcharts/amcharts3-react/index";

export default class VisalGeral extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataProvider: [
        {
          "date": "6 hr",
          "visits": 5,
          "hits": 529,
          "views": 0
        },
        {
          "date": "07 hr",
          "visits": 313,
          "hits": 476,
          "views": 0
        },
        {
          "date": "08 hr",
          "visits": 2915,
          "hits": 2000,
          "views": 83
        },
        {
          "date": "09 hr",
          "visits": 6413,
          "hits": 6000,
          "views": 179
        },
        {
          "date": "10 hr",
          "visits": 10401,
          "hits": 5000,
          "views": 494
        },
        {
          "date": "11 hr",
          "visits": 13229,
          "hits": 10000,
          "views": 442
        },
        {
          "date": "12 hr",
          "visits": 17882,
          "hits": 15000,
          "views": 408
        },
        {
          "date": "13 hr",
          "visits": 20649,
          "hits": 15000,
          "views": 424
        },
        {
          "date": "14 hr",
          "visits": 19974,
          "hits": 16000,
          "views": 180
        },
        {
          "date": "15 hr",
          "visits": 20525,
          "hits": 18000,
          "views": 794
        },
        {
          "date": "16 hr",
          "visits": 21409,
          "hits": 19409,
          "views": 482
        },
        {
          "date": "17 hr",
          "visits": 20815,
          "hits": 18815,
          "views": 470
        },
        {
          "date": "18 hr",
          "visits": 19236,
          "hits": 16236,
          "views": 414
        },
        {
          "date": "19 hr",
          "visits": 14281,
          "hits": 12280,
          "views": 347
        },
        {
          "date": "20 hr",
          "visits": 9388,
          "hits": 7388,
          "views": 1213
        },
        {
          "date": "21 hr",
          "visits": 5368,
          "hits": 3368,
          "views": 1406
        },
        {
          "date": "22 hr",
          "visits": 892,
          "hits": 799,
          "views": 4
        },
        {
          "date": "23 hr",
          "visits": 23,
          "hits": 20,
          "views": 0
        }
      ]
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
      "synchronizeGrid": true,
      "valueAxes": [],
      "graphs": [{
        "valueAxis": "v1",
        "lineColor": "#FF6600",
        "bullet": "round",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "Notas ELDOC",
        "valueField": "visits",
        "fillAlphas": 0
      }, {
        "valueAxis": "v2",
        "lineColor": "#FCD202",
        "bullet": "square",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "Notas P2K",
        "valueField": "hits",
        "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "#B0DE09",
        "bullet": "triangleUp",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "% Contigência",
        "valueField": "views",
        "fillAlphas": 0
      }],
      "chartScrollbar": {},
      "chartCursor": {
        "cursorPosition": "mouse"
      },
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": false,
        "axisColor": "#DADADA",
        "minorGridEnabled": true
      },
      "export": {
        "enabled": true,
        "position": "bottom-right"
      }
    }
  }

  render() {
    return (
      <div className="card card-primary card-outline">
        <div className="card-header">
          <h6>Visão Geral</h6>
        </div>
        <div className="card-body">
          {this.componentChart()}
        </div>
      </div>
    )
  }
}