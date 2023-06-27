import { Row, Col, Card, CardBody, Media } from 'reactstrap';

import { useState } from 'react';
import { getLoggedInUser } from '../../helpers/authUtils';
import ProfilePhoto from '../../components/ProfilePhoto';
import { HelpCircle, Settings, User } from 'react-feather';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const MyAccount = () => {
  const [user] = useState(getLoggedInUser());

  return (
    <>
      <h5 className="mb-4">My Account</h5>
      <Row>
        <Col md={6} xl={3}>
          <Card>
            <CardBody className="pb-0">
              <div className="text-center mt-3">
                <ProfilePhoto profilePhoto={user.profilePhoto} name={user.name} size={'xl'}></ProfilePhoto>
                <h5 className="mt-2 mb-0">{user.name}</h5>
                <h6 className="text-muted font-weight-normal mt-2 mb-4">{user.email}</h6>
                <div className="mt-4 py-2 border-top text-left">
                  <p className="text-muted mb-2">
                    <Media>
                      <div className="media-body py-2 overflow-hidden">
                        <h5 className="font-size-15 mt-2 mb-1">
                          <Link to='/account/' className="text-dark">
                            <User className="icon-dual icon-xs mr-2" />
                                My Account
                          </Link>
                        </h5>
                      </div>
                    </Media>

                    <Media>
                      <div className="media-body py-2 overflow-hidden">
                        <h5 className="font-size-15 mt-2 mb-1">
                          <Link to='/account/settings' className="text-dark">
                            <Settings className="icon-dual icon-xs mr-2" />
                                Settings
                          </Link>
                        </h5>
                      </div>
                    </Media>

                    <Media>
                      <div className="media-body py-2 overflow-hidden">
                        <h5 className="font-size-15 mt-2 mb-1">
                          <Link to='/account/support' className="text-dark">
                            <HelpCircle className="icon-dual icon-xs mr-2" />
                                Support
                          </Link>
                        </h5>
                      </div>
                    </Media>
                  </p>

                  {/* <p className="mb-2">
                    <label className="badge badge-soft-success mr-1">UI & UX</label>
                    <label className="badge badge-soft-success">Frontend Development</label>
                  </p> */}
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col md={6} xl={3}></Col>
      </Row>
    </>
  );
};
export default MyAccount;
