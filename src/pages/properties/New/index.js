import { Row, Col } from 'reactstrap';
import NewPropertyForm from './components/NewPropertyForm';

const PropertyNew = () => {
  return (
    <>
      <Row className="page-title">
        <Col sm={8} xl={6}>
          <h4 className="mb-1 mt-0">New Property</h4>
        </Col>
        {/* <Col sm={4} xl={6} className="text-md-right">
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
        </Col> */}
      </Row>
        <NewPropertyForm />
      <Row></Row>
    </>
  );
};

export default PropertyNew;
