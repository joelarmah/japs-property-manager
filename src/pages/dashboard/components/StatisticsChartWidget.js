import React from 'react';
import { Card, CardBody, Media } from 'reactstrap';
import Chart from 'react-apexcharts';
import classNames from 'classnames';

const StatisticsChartWidget = ({showChart, description, title, data, trend, bgClass, name, colors, chartType}) => {

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [45, 100],
      },
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    },
    colors: colors || ['#727cf5'],
  };
  const type = chartType || 'area';
  const series = [{ name: name || 'Data', data: data || [] }];
  // const showChart = showChart || true;

  return (
    <Card className="border-0 shadow-none mb-0">
      <CardBody className="p-0">
        <Media className="p-3">
          <Media body>
            <span className="text-muted text-uppercase font-size-12 font-weight-bold">{description}</span>
            <h1 className="font-weight-bold mb-0">{title}</h1>

            <div className="trend mt-2">
                <i className="uil uil-arrow-up text-success"></i>
                <span className="text-success">3.82%</span> 
                <span> vs </span>
                <span className="text-dark text-bold">¢2,000</span>
                <span> last month</span>
            </div>
          </Media>
          {showChart && (
            <div className="align-self-center">
              <Chart className="apex-charts" options={options} series={series} type={type} height={45} width={90} />
              <span className={classNames(trend.textClass, 'font-weight-bold', 'font-size-13')}>
                <i className={`${trend.icon}`}></i> {trend.value}
              </span>
            </div>
          )}
        </Media>
      </CardBody>
    </Card>
  );
};

export default StatisticsChartWidget;
