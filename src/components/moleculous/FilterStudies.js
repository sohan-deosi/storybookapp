import React from "react";
import { Col, Row, Table } from "react-bootstrap";

const FilterStudies = () => {
  return (
    <>
      <Row className="mt-4 mb-4">
        <Col sm={6}>
          <div className="form-item-fname">
            <label htmlFor="edit-fname">Filter by name</label>
            <input
              type="search"
              id="edit-fname"
              name="fname"
              value=""
              className="form-search"
            />
          </div>
        </Col>

        <Col sm={6}>
          <label htmlFor="edit-fsid">Study ID</label>
          <input
            type="search"
            id="edit-fsid"
            name="fsid"
            className="form-search"
          />
        </Col>

        <Col>
          <label htmlFor="edit-fcro">CRO</label>

          <input
            type="search"
            id="edit-fcro"
            name="fcro"
            value=""
            className="form-search"
          />
        </Col>

        <div className="primary-button">
          <input
            type="submit"
            id="edit-submit"
            value="Filter"
            className="button js-form-submit form-submit"
          />
        </div>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Study Name</th>
              <th>Study ID	</th>
              <th>CRO</th>
              <th>Sites</th>
              <th>Participants</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
           
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default FilterStudies;
