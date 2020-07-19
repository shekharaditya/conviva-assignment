import React, {Component} from 'react';
import CustomerTable from './components/CustomerTable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }
  componentDidMount() {
    // url to fetch customers data
    let url = "http://localhost:9090/customers"
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          customers: data
        });
      })
  }
  render() {
    return (
      <div className="App">
        <CustomerTable customers={this.state.customers} />
      </div>
    );
  }
}
export default App;
