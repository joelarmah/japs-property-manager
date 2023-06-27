import React from 'react';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import { Button, Card, CardBody } from 'reactstrap';

const PropertiesChart = ({height = 272}) => {
  const options = {
    chart: {
      height: height,
      type: 'donut',
      toolbar: {
        show: false,
      },
      parentHeightOffset: 0,
    },
    colors: ['#5369f8', '#43d39e', '#f77e53'],
    grid: {
      borderColor: '#f1f3fa',
      padding: {
        left: 0,
        right: 0,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
        },
        expandOnClick: false,
      },
    },
    legend: {
      show: true,
      position: 'left',
      horizontalAlign: 'left',
      itemMargin: {
        horizontal: 6,
        vertical: 3,
      },
    },
    labels: ['Occupied', 'Vacant', 'Maintenance'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    tooltip: {
      y: {
        formatter: function (value) {
          return value + '%';
        },
      },
    },
  };

  const data = [20, 55, 25];

  return (
    <Card>
      <CardBody className="">
        <Link to="/properties" className="float-right">
            <Button color="btn-link" size={'sm'} className='btn btn-link'>
                All Properties <i className="uil uil-angle-right ml-1"></i>
            </Button>
        </Link>
        <h5 className="card-title mt-0 mb-0 header-title">Properties</h5>
        <Chart options={options} series={data} type="donut" className="apex-charts mb-0 mt-4" height={height} />
      </CardBody>
    </Card>
  );
};

export default PropertiesChart;
