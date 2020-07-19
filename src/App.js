import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              Customers Info-: (Click on customer row to toggle the address associated with them)
            </Typography>
          </Toolbar>
        </AppBar>
        <CustomerTable customers={this.state.customers} />
      </div>
    );
  }
}
export default App;
