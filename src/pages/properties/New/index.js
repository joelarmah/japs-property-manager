import { Row, Col, Card, CardBody, FormGroup, Button, CustomInput, Progress, Label } from 'reactstrap';
import { AvForm, AvField, AvInput, AvRadioGroup } from 'availity-reactstrap-validation';
import { Wizard, Steps, Step } from 'react-albus';
import { propertyType, structureType } from '../data';
import PropertyRadio from './components/PropertyRadio';

const WizardWithFormValidation = () => {
  return (
    <Card>
      <CardBody>
        <Wizard
          render={({ step, steps }) => (
            <>
              <Progress
                color="primary"
                value={((steps.indexOf(step) + 1) / steps.length) * 100}
                className="mb-3 progress-sm"
              />
              {/* Property Type */}
              <Steps>
                <Step
                  id="type"
                  render={({ next }) => (
                    <AvForm
                      onValidSubmit={(event, values) => {
                        next();
                      }}>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <h3 className="mt-3 mb-4 font-bold">What type of property do you manage?</h3>
                            <AvRadioGroup name="propertyType" label="" required errorMessage="Pick one!">
                              {propertyType.map((type, i) => {
                                return <PropertyRadio key={i} item={type} />;
                              })}
                            </AvRadioGroup>
                          </FormGroup>
                        </Col>
                      </Row>

                      <ul className="list-inline wizard mb-0">
                        <li className="next list-inline-item float-right">
                          <Button size="md" color="primary" type="submit">
                            Next
                          </Button>
                        </li>
                      </ul>
                    </AvForm>
                  )}
                />

                {/* StructureType */}
                <Step
                  id="structureType"
                  render={({ next, previous }) => (
                    <AvForm
                      onValidSubmit={(event, values) => {
                        next();
                      }}>
                         <Row>
                        <Col md={6}>
                        <FormGroup>
                        <h3 className="mt-3 mb-4 font-bold">Which of these best describes your property?</h3>
                        <AvRadioGroup name="structureType" label="" required errorMessage="Pick one!">
                          {structureType.map((type, i) => {
                            return <PropertyRadio key={i} item={type} />;
                          })}
                        </AvRadioGroup>
                      </FormGroup>
                        </Col>
                
                      </Row>

                      <ul className="list-inline wizard mb-0">
                        <li className="previous list-inline-item">
                          <Button onClick={previous} color="info">
                            Previous
                          </Button>
                        </li>

                        <li className="next list-inline-item float-right">
                          <Button color="success" type="submit">
                            Next
                          </Button>
                        </li>
                      </ul>
                    </AvForm>
                  )}
                />

                {/* Address/Location */}
                <Step
                  id="address"
                  render={({ next, previous }) => (
                    <AvForm
                      onValidSubmit={(event, values) => {
                        next();
                      }}>

                      <Row>
                        <Col md={6}>
                        <FormGroup>
                        <h3 className="mt-3 mb-4 font-bold">What's the address of the property?</h3>
                        <AvField name="address1" label="Address Line 1" type="text" required />
                        <AvField name="address2" label="Address Line 2" type="text" />
                        <AvField name="city" label="City" type="text" required />
                        <AvField name="region" label="Region" type="text" required />
                      </FormGroup>
                        </Col>
                      </Row>
                    

                      <ul className="list-inline wizard mb-0">
                        <li className="previous list-inline-item">
                          <Button onClick={previous} color="info">
                            Previous
                          </Button>
                        </li>
                        <li className="next list-inline-item float-right">
                          <Button color="success" type="submit">
                            Next
                          </Button>
                        </li>
                      </ul>
                    </AvForm>
                  )}
                />

                {/* Units */}
                <Step
                  id="units"
                  render={({ next, previous }) => (
                    <AvForm
                      onValidSubmit={(event, values) => {
                        next();
                      }}>

                      <Row>
                        <Col md={6}>
                        <FormGroup>
                        <h3 className="mt-3 mb-4 font-bold">Let's add units for the property</h3>

                        <Row className="row-cols-lg-auto g-3 align-items-center">
                          <Col>
                            <Label className="visually-hidden" for="unitName">
                              Unit Name
                            </Label>
                            <AvInput name="unitName" type="text" />
                          </Col>

                          <Col>
                            <Label className="visually-hidden" for="bedrooms">
                              Bedrooms
                            </Label>
                            <AvInput name="bedrooms" placeholder="" type="number" />
                          </Col>

                          <Col>
                            <Label for="bathrooms">Bathrooms</Label>
                            <AvInput id="bathrooms" name="bathrooms" placeholder="" type="number" />
                          </Col>

                          <Col>
                            <Label for="size">Size (sqm)</Label>
                            <AvInput id="size" name="size" placeholder="" type="number" />
                          </Col>

                          <Col>
                            <Label for="size">Rent</Label>
                            <AvInput id="rent" name="rent" placeholder="" type="number" />
                          </Col>
                        </Row>
                      </FormGroup>
                        </Col>
                      </Row>

                      <ul className="list-inline wizard mb-0">
                        <li className="previous list-inline-item">
                          <Button onClick={previous} color="info">
                            Previous
                          </Button>
                        </li>
                        <li className="next list-inline-item float-right">
                          <Button color="success" type="submit">
                            Next
                          </Button>
                        </li>
                      </ul>
                    </AvForm>
                  )}
                />

                <Step
                  id="dumbledore"
                  render={({ previous }) => (
                    <Row>
                      <Col sm={12}>
                        <div className="text-center">
                          <h2 className="mt-0">
                            <i className="mdi mdi-check-all"></i>
                          </h2>
                          <h3 className="mt-0">Thank you !</h3>

                          <p className="w-75 mb-2 mx-auto">
                            Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat.
                            In egestas mattis dui. Aliquam mattis dictum aliquet.
                          </p>

                          <div className="mb-3">
                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox2"
                              label="I agree with the Terms and Conditions"
                            />
                          </div>
                        </div>
                      </Col>

                      <Col sm={12}>
                        <ul className="list-inline wizard mb-0">
                          <li className="previous list-inline-item">
                            <Button onClick={previous} color="info">
                              Previous
                            </Button>
                          </li>

                          <li className="next list-inline-item float-right">
                            <Button color="success">Submit</Button>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  )}
                />
              </Steps>
            </>
          )}
        />
      </CardBody>
    </Card>
  );
};

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
      <WizardWithFormValidation />
      <Row></Row>
    </>
  );
};

export default PropertyNew;
