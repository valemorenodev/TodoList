/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Checkbox = (props) => {
  const {
    onChange,
    data: { id, description, done }
  } = props;
  return (
    <Fragment>
      <Form.Label className="todo new-item">
        <Row className="justify-content-center mx-auto">
          <Col className='justify-content-center' md='}' lg='2' sm='2' xs='2'>
            <input
              id={'checkBox'}
              name={id}
              type="checkbox"
              defaultChecked={done}
              onChange={onChange}
            />
          </Col>
          <Col className='justify-content-center' md='10' lg='10' sm='10' xs='10'>
            <div className="todo__text">{description}</div>
          </Col>
        </Row>
      </Form.Label>
    </Fragment>
  );
}

export default Checkbox;
