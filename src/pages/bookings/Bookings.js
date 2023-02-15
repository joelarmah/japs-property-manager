import React from 'react';
import { Row, Col, Media, Card, CardBody, Table } from 'reactstrap';

import { Link } from 'react-router-dom';
import { bookings } from './data';
import * as FeatherIcon from 'react-feather';

const User = ({ avatarUrl, name, description }) => {
  return (
    <>
      <div className="media">
        {avatarUrl != null ? (
          <img src={avatarUrl} className="avatar-sm rounded-circle mr-2 align-self-center" alt="" />
        ) : (
          avatarUrl == null && (
            <div className="avatar mr-3">
              <FeatherIcon.User size={20} className="align-self-center" />
            </div>
          )
        )}
        <div className="media-body">
          <h6 className="mt-0 mb-0">{name}</h6>
          <span className="text-muted">{description}</span>
        </div>
      </div>
    </>
  );
};

const ListingItem = ({ imageUrl, title, description }) => {
  return (
    <Media>
      <img src={imageUrl} alt="" className="avatar-md rounded mr-3 align-self-center" />
      <Media body>
        <h5 className="font-size-15 mt-0 mb-1">{title}</h5>
        <p className="text-muted font-size-13 text-truncate mb-0">{description}</p>
      </Media>
    </Media>
  );
};

const BookingItem = () => {
  return (
    <Card>
      <CardBody>
        <Table className="mb-0" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Guests</th>
              <th>Listing</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => {
              return (
                <tr valign="middle" key={index}>
                  <th scope="row">{booking.id}</th>
                  <td>
                    <Link to={`/guests/${booking.guest.id}`} className="title">
                      <User
                        avatarUrl={booking.guest.avatarUrl}
                        name={booking.guest.name}
                        description={booking.guest.phone != null ? booking.guest.phone : booking.guest.email}
                      />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/listings/${booking.listing.id}`} className="subject">
                      {/* {booking.listing.title} */}
                      <ListingItem title={booking.listing.title} description={`Check-in on ${booking.checkInDate}`} />
                    </Link>
                  </td>
                  <td>{booking.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

const Bookings = () => {
  return (
    <>
      <Row className="page-title">
        <Col md={3} xl={6}>
          <h4 className="mb-1 mt-0">Bookings</h4>
        </Col>
        <Col md={9} xl={6} className="text-md-right">
          <div className="mt-4 mt-md-0">
            <button type="button" className="btn btn-outline-primary mb-3  mb-sm-0">
              <i className="uil-plus mr-1"></i>Add a booking
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <BookingItem />
        </Col>
      </Row>
    </>
  );
};

export default Bookings;
