import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'

import { Container, Row, Col, Card, CardBody, FormGroup, Button, Alert, Label, InputGroup, InputGroupAddon } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Mail } from 'react-feather';

import { isUserAuthenticated } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import logo from '../../assets/images/logo.png';
import { APP_NAME } from '../../constants/appConstants';

import { forgetPassword } from '../../redux/actions';

class ForgetPassword extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.state = {
            passwordResetSuccessful: false,
            isLoading: false
        }
    }

    componentDidMount() {
        this._isMounted = true;
        document.body.classList.add('authentication-bg');
    }

    componentWillUnmount() {
        this._isMounted = false;
        document.body.classList.remove('authentication-bg');
    }

    /**
     * On error dismiss
     */
    onDismiss() {
        this.setState({ passwordResetSuccessful: false });
    }

    /**
     * Handles the submit
     */
    handleValidSubmit = (event, values) => {
        // this.setState({ isLoading: true });
        // // You can make actual api call to register here
        // window.setTimeout(() => {
        //     this.setState({ isLoading: false, passwordResetSuccessful: true });
        // }, 1000)
        this.props.forgetPassword(values.email);
    }

    /**
     * Redirect to root
     */
    renderRedirectToRoot = () => {
        const isAuthTokenValid = isUserAuthenticated();
        if (isAuthTokenValid) {
            return <Redirect to='/' />
        }
    }

    render() {
        const isAuthTokenValid = isUserAuthenticated();
        return (
            <React.Fragment>

                {this.renderRedirectToRoot()}

                {(this._isMounted || !isAuthTokenValid) && <div className="account-pages my-5">
                    <Container>
                    <Row className="justify-content-center">
                            <Col xl={6}>
                                <Card className="">
                                    <CardBody className="p-0">
                                        <Row>
                                            <Col className="p-5 position-relative">
                                                { /* preloader */}
                                                {this.state.isLoading && <Loader />}

                                                <div className="mx-auto mb-5">
                                                    <a href="/">
                                                        <img src={logo} alt="" height="24" />
                                                        <h3 className="d-inline align-middle ml-1 text-logo">{APP_NAME}</h3>
                                                    </a>
                                                </div>

                                                <h6 className="h5 mb-0 mt-4">Reset Password</h6>
                                                <p className="text-muted mt-1 mb-4">
                                                    Enter your email address and we'll send you an email with instructions to reset your password.
                                                </p>


                                                {this.props.error && <Alert color="danger" isOpen={this.props.error ? true : false}>
                                                    <div>{this.props.error}</div>
                                                </Alert>}

                                                <AvForm onValidSubmit={this.handleValidSubmit} className="authentication-form">
                                                    <AvGroup className="">
                                                        <Label for="email">Email Address</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <Mail className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="text" name="email" id="email" placeholder="" 
                                                                value={this.state.email} required />
                                                        </InputGroup>
                                                        
                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>


                                                    <FormGroup className="form-group mb-0 text-center">
                                                        <Button color="primary" className="btn-block">Submit</Button>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <p className="texttext-muted mt-3">Back to <Link to="/account/login" className="text-primary font-weight-bold ml-1">Login</Link></p>
                                                    </FormGroup>
                                                </AvForm>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { email, loading, error } = state.Auth;
    return { email, loading, error };
};

export default connect(mapStateToProps, { forgetPassword })(ForgetPassword);