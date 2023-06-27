import React from 'react';
import { Card, CardBody, Col, Media, Row } from 'reactstrap';
import TargetChart from './TargetChart';
import StatisticsChartWidget from './StatisticsChartWidget';

const Accounting = () => {
  // const getDaysInMonth = (month, year) => {
  //     var date = new Date(year, month, 1);
  //     var days = [];
  //     var idx = 0;
  //     while (date.getMonth() === month && idx < 15) {
  //         var d = new Date(date);
  //         days.push(d.getDate() + " " + d.toLocaleString('en-us', { month: 'short' }));
  //         date.setDate(date.getDate() + 1);
  //         idx += 1;
  //     }
  //     return days;
  // }

  // var now = new Date();
  // var labels = getDaysInMonth(now.getMonth(), now.getFullYear());

  // const apexLineChartWithLables = {
  //     chart: {
  //         height: 296,
  //         type: 'area',
  //         toolbar: {
  //             show: false,
  //         },
  //         parentHeightOffset: 0,
  //     },
  //     grid: {
  //         padding: {
  //             left: 0,
  //             right: 0,
  //         },
  //     },
  //     dataLabels: {
  //         enabled: false
  //     },
  //     stroke: {
  //         curve: 'smooth',
  //         width: 4
  //     },
  //     zoom: {
  //         enabled: false,
  //     },
  //     legend: {
  //         show: false,
  //     },
  //     colors: ['#43d39e'],
  //     xaxis: {
  //         type: 'string',
  //         categories: labels,
  //         tooltip: {
  //             enabled: false
  //         },
  //         axisBorder: {
  //             show: false
  //         },
  //         labels: { }
  //     },
  //     yaxis: {
  //         labels: {
  //             formatter: function (val) {
  //                 return val + "k"
  //             }
  //         }
  //     },
  //     fill: {
  //         type: 'gradient',
  //         gradient: {
  //             type: "vertical",
  //             shadeIntensity: 1,
  //             inverseColors: false,
  //             opacityFrom: 0.45,
  //             opacityTo: 0.05,
  //             stops: [45, 100]
  //         },
  //     },
  //     tooltip: {
  //         theme: 'dark',
  //         x: { show: false }
  //     }
  // };

  // const apexLineChartWithLablesData = [{
  //     name: 'Revenue',
  //     data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35]
  // }];

  return (
    <Card>
      <CardBody className="">
        <h5 className="card-title mb-0 header-title">Accounting</h5>
        <Row className="align-items-center">
          <Col md={12}>
            <Row className="align-items-center">
              <Col md={8}>
                <StatisticsChartWidget
                  showChart={false}
                  description="Avg. Monthly Income"
                  title="¢0.00"
                  data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                  trend={{
                    textClass: 'text-success',
                    icon: 'uil uil-arrow-up',
                    value: '10.21%',
                  }}
                />
              </Col>
              <Col md={4}>
                <TargetChart />
              </Col>
            </Row>
            <hr className="pb-2" />
            <Row>
              <Col md={6}>
                <Media>
                  <div className="mr-2">
                    <div className="avatar-sm font-weight-bold d-inline-block m-1">
                      <span className="avatar-title rounded-circle bg-soft-info text-primary">
                        <i className="uil uil-money-insert"></i>
                      </span>
                    </div>
                  </div>
                  <Media body>
                    <h4 className="mt-0 mb-1 font-size-24 font-weight-bold">¢0.00</h4>
                    <span className="text-muted">Total Income</span>
                  </Media>
                </Media>
              </Col>
              <Col md={6}>
                <Media>
                  <div className="mr-2">
                    <div className="avatar-sm font-weight-bold d-inline-block m-1">
                      <span className="avatar-title rounded-circle bg-soft-info text-primary">
                        <i className="uil uil-money-withdraw"></i>
                      </span>
                    </div>
                  </div>
                  <Media body>
                    <h4 className="mt-0 mb-1 font-size-24 font-weight-bold">¢0.00</h4>
                    <span className="text-muted">Total Expenses</span>
                  </Media>
                </Media>
              </Col>
            </Row>
          </Col>

          <Col md={4}>
            {/* <TargetChart /> */}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Accounting;
