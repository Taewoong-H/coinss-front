import React from 'react';
import styled from 'styled-components';
import ReactHighcharts from 'react-highcharts/ReactHighstock.src';
import moment from 'moment';

import { CandleMinuteType } from '../../api';

interface CandleProps {
  candleMinute: CandleMinuteType;
}

function MarketGraph({ candleMinute }: CandleProps) {
  const priceData = [
    [1220832000000, 22.56],
    [1220918400000, 21.67],
    [1221004800000, 21.66],
    [1221091200000, 21.81],
    [1221177600000, 21.28],
    [1221436800000, 20.05],
    [1221523200000, 19.98],
    [1221609600000, 18.26],
    [1221696000000, 19.16],
    [1221782400000, 20.13],
    [1222041600000, 18.72],
    [1222128000000, 18.12],
    [1222214400000, 18.39],
    [1222300800000, 18.85],
    [1222387200000, 18.32],
    [1222646400000, 15.04],
    [1222732800000, 16.24],
    [1222819200000, 15.59],
    [1222905600000, 14.3],
    [1222992000000, 13.87],
    [1223251200000, 14.02],
    [1223337600000, 12.74],
    [1223424000000, 12.83],
    [1223510400000, 12.68],
    [1223596800000, 13.8],
    [1223856000000, 15.75],
    [1223942400000, 14.87],
    [1224028800000, 13.99],
    [1224115200000, 14.56],
    [1224201600000, 13.91],
    [1224460800000, 14.06],
    [1224547200000, 13.07],
    [1224633600000, 13.84],
    [1224720000000, 14.03],
    [1224806400000, 13.77],
    [1225065600000, 13.16],
    [1225152000000, 14.27],
    [1225238400000, 14.94],
    [1225324800000, 15.86],
    [1225411200000, 15.37],
    [1225670400000, 15.28],
    [1225756800000, 15.86],
    [1225843200000, 14.76],
    [1225929600000, 14.16],
    [1226016000000, 14.03],
    [1226275200000, 13.7],
    [1226361600000, 13.54],
    [1226448000000, 12.87],
    [1226534400000, 13.78],
    [1226620800000, 12.89],
    [1226880000000, 12.59],
    [1226966400000, 12.84],
    [1227052800000, 12.33],
    [1227139200000, 11.5],
    [1227225600000, 11.8],
    [1227484800000, 13.28],
    [1227571200000, 12.97],
    [1227657600000, 13.57],
    [1227830400000, 13.24],
    [1228089600000, 12.7],
    [1228176000000, 13.21],
    [1228262400000, 13.7],
    [1228348800000, 13.06],
    [1228435200000, 13.43],
    [1228694400000, 14.25],
    [1228780800000, 14.29],
    [1228867200000, 14.03],
    [1228953600000, 13.57],
    [1229040000000, 14.04],
    [1229299200000, 13.54],
  ];

  const options = { style: 'currency', currency: 'KRW' };
  const numberFormat = new Intl.NumberFormat('ko-KR', options);
  const configPrice = {
    yAxis: [
      {
        offset: 20,

        labels: {
          formatter: function () {
            return numberFormat.format(this.value);
          },
          x: -15,
          style: {
            color: '#000',
            position: 'absolute',
          },
          align: 'left',
        },
      },
    ],
    tooltip: {
      shared: true,
      formatter: function () {
        return (
          numberFormat.format(this.y, 0) +
          '</b><br/>' +
          moment(this.x).format('MMMM Do YYYY, h:mm')
        );
      },
    },
    plotOptions: {
      series: {
        // showInNavigator: true,
        gapSize: 6,
      },
    },
    // rangeSelector: {
    //   selected: 1,
    // },

    chart: {
      height: 600,
    },

    credits: {
      enabled: false,
    },

    // legend: {
    //   enabled: true,
    // },
    xAxis: {
      type: 'date',
    },
    rangeSelector: {
      buttons: [
        {
          type: 'day',
          count: 1,
          text: '1d',
        },
        {
          type: 'day',
          count: 7,
          text: '7d',
        },
        {
          type: 'month',
          count: 1,
          text: '1m',
        },
        {
          type: 'month',
          count: 3,
          text: '3m',
        },
        {
          type: 'all',
          text: 'All',
        },
      ],
      selected: 4,
    },
    series: [
      {
        name: 'Price',
        type: 'spline',

        data: priceData,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };
  return (
    <Container>
      <GraphLabel>
        <MainLabel>
          <label>KRW</label>375,552.63
        </MainLabel>
        <SubLabel>+ ￦725.920 (+0.85%)</SubLabel>
      </GraphLabel>
      <ReactHighcharts config={configPrice}></ReactHighcharts>
    </Container>
  );
}

export default MarketGraph;

const Container = styled.div`
  margin-top: 32px;
  max-width: 1200px;
  min-height: 561px;
  padding: 24px 40px;
  border-radius: 16px;
  -webkit-backdrop-filter: blur(80px);
  backdrop-filter: blur(80px);
  box-shadow: 1px 1px 0 0 rgba(146, 92, 29, 0.2),
    2px 2px 4px 0 rgba(79, 85, 88, 0.25);
  border: solid 1px #f3f3f3;
  background-color: white;
`;

const GraphLabel = styled.div`
  height: 100px;
  width: 100%;
`;

const MainLabel = styled.div`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  text-align: left;
  color: #050f19;
  margin-bottom: 10px;
  > label {
    font-weight: normal;
    margin-right: 20px;
  }
`;

const SubLabel = styled.div`
  font-family: Roboto;
  font-size: 16px;
  text-align: left;
  color: #3acc8a;
`;
