import { AvRadio } from 'availity-reactstrap-validation';
import './PropertyRadio.css';

const PropertyRadio = ({ item }) => {
  return (
    <AvRadio
      className="custom-radio"
      label={
          <span className="d-flex align-items-center gap-3">
            <i className={`icon uil uil-${item.icon}`}></i>
            <span className="text">{item.name}</span>
          </span>
      }
      id={item.name}
      value={item.name}
    />
  );
};

export default PropertyRadio;
