import React, { Component } from 'react';
import logo from './logo.svg';
import Filter from './components/Filter'
import './App.css';
import SELECT_OPTIONS from './constants/SelectOptions'
import { Row, Container, Col} from 'react-bootstrap'
import Select from 'react-select'

console.log(SELECT_OPTIONS)
let options = [
  { value: 'artist', label: 'Artist' },
  { value: 'writer', label: 'Writer' },
  { value: 'title', label: 'Title' },
  { value: 'album', label: 'Album' }
];

class App extends Component {
  state = {
    selectedOption: null,
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={4}>
            <Select options={options}></Select>
          </Col>
          <Col md={8}>
            <input type="text" className="search"/>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            {
              SELECT_OPTIONS.map((field) => (
                <div>
                  <label>{field.label}</label>
                  <Filter dataSource={field.dataSource} key={field.key}></Filter>
                </div>
                )
              )
            }
          </Col>
          <Col md={8}>Content</Col>
        </Row>

      </Container>
    );
  }
}

export default App;
