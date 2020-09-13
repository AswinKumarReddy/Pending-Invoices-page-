import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';



class App extends Component {
  state = { 
    isLoading : false,
    invoices : [
        
      {
          "id" : "100",
          "Vendor" : "Subba Rao",
          "InvoiceNumber" : '12354',
          "Amount" : "1500",
          "Date" : "13/09/2020"
      },

      {
        "id" : "101",
        "Vendor" : "Reddy",
        "InvoiceNumber" : '12654',
        "Amount" : "750",
        "Date" : "13/09/2020"
      },

      {
        "id" : "102",
        "Vendor" : "Naidu",
        "InvoiceNumber" : '18354',
        "Amount" : "2500",
        "Date" : "13/09/2020"
      }        

  ]
   }

   
   
   remove(id){
     let updatedInvoices = [...this.state.invoices].filter(i => i.id !== id)
     this.setState({invoices : updatedInvoices});
   }

  render() { 

    const isLoading = this.state.isLoading;
    const allinvoices = this.state.invoices;
    
      

      if(isLoading)
          return (<div>Loading...</div>);


      let Invoices = 
      allinvoices.map( invoice => 
          <tr key={invoice.id}>
            <td>{invoice.Vendor}</td>
            <td>{invoice.Amount}</td>
            <td>{invoice.InvoiceNumber}</td>
            <td>{invoice.Date}</td>
            <td><Button classname="btn btn-lg" color="success" onClick={() => this.remove(invoice.id)} >OK</Button></td>
            <td><Button classname="btn btn-lg" color="danger" onClick={() => this.remove(invoice.id)} >NOK</Button></td>
            <td><Button classname="btn btn-lg" color="info" onClick={() => this.remove(invoice.id)} >50%</Button></td>
            <td><Button classname="btn btn-lg" color="warning" onClick={() => this.remove(invoice.id)} >??</Button></td>
            <td><Button classname="btn btn-lg" color="info" onClick={() => this.remove(invoice.id)} >Image</Button></td>
          </tr>
        )

      return ( 
        
          <div className="container border border-secondary rounded center">
              
              <div className="row">
                    <div className="col-12">
                        <h4>Pending Invoices - Test Company</h4>
                    </div>

              </div>

              <div className = "row">
                    <div className=".col-xs-12 center text-center">
                        <Table dark responsive striped bordered hover>
                            <thead>
                              <tr>
                                <th>vendor</th>
                                <th>Amount</th>
                                <th>Invoice number</th>
                                <th>Date</th>
                                <th colSpan="4">Actions</th>
                                <th>Image</th>
                              </tr>
                            </thead>
                        
                            <tbody>
                              {this.state.invoices.length === 0 ? <td colSpan="9">All Caught Up!</td> : Invoices}
                            </tbody>
                        </Table>
                    </div>

              </div>


          </div>       


      );
  }
}
 
export default App;