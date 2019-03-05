import React, { Component } from 'react'
import Select from 'react-select'

let options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class Filter extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  componentDidMount() {
    fetch(this.props.dataSource).then((response) => response.json()).then((data) => {
      options = data.map((opt) => {
        return {label: opt, value: opt}
      })
      this.setState({options});
    })
  };

  render() {
    const { selectedOption } = this.state;
    return <Select options={options} value={selectedOption} onChange={this.handleChange}/>
  }
}


export default Filter;
