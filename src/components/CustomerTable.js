import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import styles from './style';

class CustomerTable extends Component {
    constructor(props){
        super(props);
        this.rowClickHandler = this.rowClickHandler.bind(this);
    }
    //handles click on customer row
    rowClickHandler = index => {
        var addrElement = document.getElementById(`addressTable${index}`);
        var noAddrElement = document.getElementById(`noAddressTable${index}`);
        //toggle the address row on customer row click
        if(addrElement) {
          if(addrElement.style.display === 'none' || !addrElement.style.display)
            addrElement.style.display = 'table';
          else addrElement.style.display = 'none';
        }
        else {
            if(noAddrElement){
                if(noAddrElement.style.display === 'none' || !noAddrElement.style.display)
                    noAddrElement.style.display = 'table';
                else noAddrElement.style.display = 'none';
            }
        }
      }
    render() {
        const { classes } = this.props;
        return (
            <TableContainer component={Paper}>
                <Table className={classes.infoTable}>
                    <TableHead className={classes.infoHeader}>
                    <TableRow>
                        <TableCell className="customer-header">Customer Name</TableCell>
                        <TableCell className="customer-header">Customer ID</TableCell>
                        <TableCell className="customer-header">Customer Age</TableCell>
                    </TableRow>
                    </TableHead>
                    {this.props.customers.map((customer,index) => {
                    return (
                    <TableBody id='info'>
                        <TableRow className={classes.infoRow} id={"itemRow" + index} key={"itemRow" + index} onClick={() => this.rowClickHandler(index)}>
                            <TableCell>{customer.name}</TableCell>
                            <TableCell>{customer.id}</TableCell>
                            <TableCell>{customer.age}</TableCell>
                        </TableRow>
                        {customer.addresses.length > 0 ? 
                        <Table  className = {classes.addressTable} id={"addressTable" + index}>
                            <TableHead className={classes.addressHeader}>
                            <TableRow>
                                <TableCell className="address-header">Locality</TableCell>
                                <TableCell className="address-header">City</TableCell>
                                <TableCell className="address-header">State</TableCell>
                            </TableRow>
                            </TableHead>
                            {customer.addresses.map((address,index) => {
                            return (
                                <TableBody>
                                <TableRow key={index} className="addressRow">
                                    <TableCell>{address.locality}</TableCell>
                                    <TableCell>{address.city}</TableCell>
                                    <TableCell>{address.state}</TableCell>
                                </TableRow>
                                </TableBody>
                            )
                            })}
                        </Table> :
                        <TableRow className={classes.noAddress} id={"noAddressTable" + index}>
                            <TableCell>No address associated with this customer</TableCell>
                        </TableRow>
                        }
                        <br></br>
                        <br></br>
                    </TableBody>
                    );
                })}
                </Table>
            </TableContainer>
        )
    }
}

export default withStyles(styles)(CustomerTable);