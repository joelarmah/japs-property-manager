// @flow
import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

import airbnbLogo from '../../assets/images/channels/airbnb.jpeg';
import bookingLogo from '../../assets/images/channels/booking.com.png';
import jijiLogo from '../../assets/images/channels/jiji.png';
import meqasaLogo from '../../assets/images/channels/meqasa.png';
import tonatonLogo from '../../assets/images/channels/tonaton.png';

// single channel
const ChannelItem = (props) => {
  const channel = props.channel || {};

  return (
    <Card>
      <CardBody className="pb-0">
        <div className="text-center mt-3 mb-5">
          <img src={channel.logo} alt={channel.title} className="avatar-xl rounded-circle" />
          <h5 className="mt-2 mb-0">{channel.title}</h5>
          {/* <h6 className="text-muted font-weight-normal mt-2 mb-4">User Experience Specialist</h6> */}
          <div className="mt-3">
            <button type="button" className="btn btn-outline-dark btn-sm mr-1">
              Setup
            </button>
            {/* <button type="button" className="btn btn-white btn-sm">
              Message
            </button> */}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const Channels = () => {
  const channels = [
    {
      id: 1,
      title: 'Airbnb',
      logo: airbnbLogo,
    },
    {
      id: 2,
      title: 'Booking.com',
      logo: bookingLogo,
    },
    {
      id: 3,
      title: 'Jiji',
      logo: jijiLogo,
    },
    {
      id: 4,
      title: 'Meqsa Logo',
      logo: meqasaLogo,
    },
    {
      id: 5,
      title: 'Tonaton',
      logo: tonatonLogo,
    },
  ];

  return (
    <>
      <Row className="page-title">
        <Col md={3} xl={6}>
          <h4 className="mb-1 mt-0">Channels</h4>
        </Col>
        {/* <Col md={9} xl={6} className="text-md-right">
          <div className="mt-4 mt-md-0">
            <button type="button" className="btn btn-danger mb-3  mb-sm-0">
              <i className="uil-plus mr-1"></i> Create new Listing
            </button>
          </div>
        </Col> */}
      </Row>

      <Row>
        {channels.map((channel, i) => {
          return (
            <Col lg={4} xl={3} key={'channel-' + channel.id}>
              <ChannelItem channel={channel} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Channels;
