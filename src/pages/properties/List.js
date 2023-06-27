// @flow
import React from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Progress,
  UncontrolledTooltip,
  Button,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownToggle,
} from 'reactstrap';
import classNames from 'classnames';
import { Loader } from 'react-feather';
import { Link } from 'react-router-dom';

import listing1 from '../../assets/images/listings/listing-1.jpg';
import { properties } from './data';

// single listing
const PropertyItem = ({property}) => {
  return (
    <Card className="profile-widget">
      <img src={listing1} alt={property.title} className="card-img-top" />

      <UncontrolledDropdown className="card-action float-right">
        <DropdownToggle tag="button" className="dropdown-toggle arrow-none btn btn-link text-white p-0">
          <i className="uil uil-ellipsis-v font-size-16 text-white"></i>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <i className="uil uil-edit-alt mr-2"></i>Edit
          </DropdownItem>
          {/* <DropdownItem>
            <i className="uil uil-refresh mr-2"></i>Refresh
          </DropdownItem> */}
          <DropdownItem divider />
          <DropdownItem className="text-danger">
            <i className="uil uil-trash mr-2"></i>Delete
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <CardBody>
        <div
          className={classNames('badge', 'float-right', {
            'badge-success': property.state === 'Finished',
            'badge-warning': property.state === 'Ongoing',
            'badge-info': property.state === 'Planned',
          })}>
          {property.state}
        </div>
        <p
          className={classNames('text-uppercase', 'font-size-12', 'mb-2', {
            'text-success': property.state === 'Finished',
            'text-warning': property.state === 'Ongoing',
            'text-info': property.state === 'Planned',
          })}>
          {property.category}
        </p>

        <h5>
          <a href={"/properties/" + property.id} className="text-dark">
            {property.title}
          </a>
        </h5>

        <p className="text-muted">
          {property.shortDesc}...
          <a href="/" className="font-weight-bold text-muted ml-2">
            view more
          </a>
        </p>

        {/* <div>
          <a href="/" className="d-inline-block mr-1">
            <img src={avatar3} className="avatar-sm m-1 rounded-circle" alt="friend" />
          </a>

          <a href="/" className="d-inline-block mr-1">
            <img src={avatar1} className="avatar-sm m-1 rounded-circle" alt="friend" />
          </a>
          
          {property.totalMembers - 2 > 0 && (
            <a href="/" className="">
              <div className="avatar-sm font-weight-bold d-inline-block m-1">
                <span className="avatar-title rounded-circle bg-soft-warning text-warning">
                  +{property.totalMembers - 2}
                </span>
              </div>
            </a>
          )}
        </div> */}
      </CardBody>

      <CardBody className="border-top">
        <Row className="align-items-center">
          <Col className="col-sm-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item pr-2">
                <a href="/" className="text-muted d-inline-block" id={`dueDate-${property.id}`}>
                  <i className="uil uil-calender mr-1"></i> {property.dueDate}
                </a>
                <UncontrolledTooltip placement="top" target={`dueDate-${property.id}`}>
                  Due date
                </UncontrolledTooltip>
              </li>
              <li className="list-inline-item pr-2">
                <a href="/" className="text-muted d-inline-block" id={`noTasks-${property.id}`}>
                  <i className="uil uil-bars mr-1"></i> {property.totalTasks}
                </a>
                <UncontrolledTooltip placement="top" target={`noTasks-${property.id}`}>
                  Tasks
                </UncontrolledTooltip>
              </li>
              <li className="list-inline-item">
                <a href="/" className="text-muted d-inline-block" id={`noComments-${property.id}`}>
                  <i className="uil uil-comments-alt mr-1"></i> {property.totalComments}
                </a>
                <UncontrolledTooltip placement="top" target={`noComments-${property.id}`}>
                  Comments
                </UncontrolledTooltip>
              </li>
            </ul>
          </Col>
          <Col className="offset-sm-1">
            {property.progress < 30 && <Progress value={property.progress} color="warning" className="progress-sm" />}
            {property.progress > 30 && property.progress < 100 && (
              <Progress value={property.progress} color="info" className="progress-sm" />
            )}
            {property.progress === 100 && <Progress value={property.progress} color="success" className="progress-sm" />}
          </Col>
        </Row>
      </CardBody>

      {/* <Card className="profile-widget"></Card> */}
    </Card>
  );
};

const Properties = () => {

  return (
    <>
      <Row className="page-title">
        <Col md={3} xl={6}>
          <h4 className="mb-1 mt-0">My Properties</h4>
        </Col>
        <Col md={9} xl={6} className="text-md-right">
          <div className="mt-4 mt-md-0">
            <Link to="/properties/new">
              <Button type="button" className="btn-outline-primary mb-3  mb-sm-0" color="outline-primary">
                <i className="uil-plus mr-1"></i> Create new Property
              </Button>
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} xl={6}>
          <div className="btn-group mb-3 mb-sm-0">
            <button type="button" className="btn btn-primary">
              All
            </button>
          </div>
          <div className="btn-group ml-1">
            <button type="button" className="btn btn-white">
              Drafts
            </button>
            <button type="button" className="btn btn-white">
              Published
            </button>
          </div>
        </Col>
        <Col md={9} xl={6} className="text-md-right">
          <div className="mt-4 mt-md-0">
            <div className="btn-group ml-2 d-none d-sm-inline-block">
              <button type="button" className="btn btn-primary btn-sm">
                <i className="uil uil-apps"></i>
              </button>
            </div>
            <div className="btn-group d-none d-sm-inline-block ml-1">
              <button type="button" className="btn btn-white btn-sm">
                <i className="uil uil-align-left-justify"></i>
              </button>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        {properties.map((property, i) => {
          return (
            <Col lg={4} xl={3} key={'property-' + property.id}>
              <PropertyItem property={property} />
            </Col>
          );
        })}
      </Row>

      <Row className="mb-3 mt-2">
        <Col>
          <div className="text-center">
            <Button color="white">
              <Loader className="icon-dual icon-xs mr-2"></Loader>Load more
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Properties;
