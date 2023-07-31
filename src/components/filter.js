import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./tasks.css";

const Filter = (props) => {
    const [filtermins, setFilterMins] = useState("");
    const [filtersearch, setFilterSearch] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        // Pass the filtering criteria to the parent component
        props.onFilterTask(filtermins, filtersearch);

        // Clear the input fields after submitting
        setFilterMins("");
        setFilterSearch("");
    };

    return (
        <div>
            <Container className="D">
                <Row>
                    <Col>Task Filter(Mins)</Col>
                    <Col>Task Search</Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control
                            type="text"
                            value={filtermins}
                            placeholder="Task Filter"
                            onChange={(e) => setFilterMins(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            value={filtersearch}
                            placeholder="Task Time"
                            onChange={(e) => setFilterSearch(e.target.value)}
                        />
                    </Col>
                </Row>
            </Container>
            <div className="center">
            <Button variant="danger" onClick={submitHandler}>
                Filter Tasks
            </Button>
            </div>
        </div>
    );
};

export default Filter;
