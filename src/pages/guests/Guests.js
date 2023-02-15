import React from 'react';
import { Row, Col, Card, CardBody, Table } from 'reactstrap';

import PageTitle from '../../components/PageTitle';

const records = [
    { id: 1, firstName: 'Greeva', lastName: 'N', username: '@greeva' },
    { id: 2, firstName: 'Dhyani', lastName: 'B', username: '@dhyani' },
    { id: 3, firstName: 'Manu', lastName: 'B', username: '@mannat' },
    { id: 4, firstName: 'Nik', lastName: 'N', username: '@nikn' },
    { id: 5, firstName: 'Joel', lastName: 'Navadiya', username: '@sn' },
];

const ResponsiveTable = () => {
    return (
        <Card>
            <CardBody>
                {/* <h4 className="header-title mt-0 mb-1">Guests</h4>
                <p className="sub-header">
                    Across every breakpoint, use <code>responsive</code> attribute to create responsive tables
                </p> */}

                <Table className="mb-0" responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

const Guests = () => {
    return (
        <>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Guests', path: '/guests', active: true },
                        ]}
                        title={'Guests'}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ResponsiveTable />
                </Col>
            </Row>
        </>
    );
};

export default Guests;
