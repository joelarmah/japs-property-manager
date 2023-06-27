import React, { useState } from 'react';
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
import ProjectStats from './ProjectStats';
import About from './About';
import Comments from './Comments';
import Attachments from './Attachments';
import Activities from './Activities';
import { listings } from '../data';

const ListingDetail = ({ project = listings[0] }) => {

    const [activeTab, setActiveTab] = useState("discussions")
    
  /**
   *
   * @param {*} tab
   */
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <React.Fragment>
      <Row className="page-title">
        <Col sm={8} xl={6}>
          <h4 className="mb-1 mt-0">{`Property: ${project.title}`}</h4>
        </Col>
        <Col sm={4} xl={6} className="text-md-right">
          <div className="btn-group ml-2 d-none d-sm-inline-block">
            <button type="button" className="btn btn-soft-primary btn-sm">
              <i className="uil uil-edit mr-1"></i>Edit
            </button>
          </div>
          <div className="btn-group ml-1 d-none d-sm-inline-block">
            <button type="button" className="btn btn-soft-danger btn-sm">
              <i className="uil uil-trash-alt mr-1"></i>Delete
            </button>
          </div>
        </Col>
      </Row>

      <ProjectStats project = {project} />

      <Row>
        <Col xl={8}>
          <About />
          <Card>
            <CardBody>
              <Nav className="nav-pills navtab-bg">
                <NavItem>
                  <NavLink
                    href="#"
                    className={classNames({ active: activeTab === 'discussions' })}
                    onClick={() => {
                        toggleTab('comments');
                    }}>
                    Discussions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    className={classNames({ active: activeTab === 'files' })}
                    onClick={() => {
                        toggleTab('files');
                    }}>
                    Files/Resources
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={activeTab}>
                <TabPane tabId="discussions">
                  <Comments />
                </TabPane>
                <TabPane tabId="files">
                  <Attachments />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
        <Col xl={4}>
          <Card>
            <CardBody>
              <Activities />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ListingDetail;
