import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
// import Flatpickr from 'react-flatpickr'
// import { ChevronDown, Mail, Printer, File } from 'react-feather';

import { getLoggedInUser } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
// import OverviewWidget from '../../components/OverviewWidget';

// import Statistics from './components/Statistics';
// import RevenueChart from './components/RevenueChart';
// import TargetChart from './components/TargetChart';
// import SalesChart from './components/SalesChart';
// import Orders from './components/Orders';
// import Performers from './components/Performers';
// import Tasks from './components/Tasks';
// import Chat from './components/Chat';
import Accounting from './components/Accounting';
import PropertiesChart from './components/PropertiesChart';
import Transactions from './components/Transactions';


class Dashboard extends Component {

    constructor(props) {
        super(props);

        var oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

        this.state = {
            user: getLoggedInUser(),
            filterDate: [oneWeekAgo, new Date()]
        };
    }

    render() {

        return (
          <React.Fragment>
            <div className="">
              {/* preloader */}
              {this.props.loading && <Loader />}

              <Row className="page-title align-items-center">
                <Col sm={4} xl={6}>
                  <h4 className="mb-1 mt-0">Dashboard</h4>
                </Col>
              </Row>

              {/* Accounting */}
              <Accounting></Accounting>

              {/* stats */}
              {/* <Statistics></Statistics> */}

              {/* charts */}
              <Row>
                <Col xl={6}>
                  <Transactions></Transactions>
                </Col>
                <Col xl={6}>
                  <PropertiesChart></PropertiesChart>
                </Col>
              </Row>

              {/* <Row>
                <Col xl={5}>
                  <SalesChart />
                </Col>
                <Col xl={7}>
                  <Orders />
                </Col>
              </Row> */}

              {/* <Row>
                <Col xl={4}>
                  <Performers />
                </Col>
                <Col xl={4}>
                  <Tasks />
                </Col>
                <Col xl={4}>
                  <Chat />
                </Col>
              </Row> */}
            </div>
          </React.Fragment>
        );
    }
}


export default Dashboard;