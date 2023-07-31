import React from "react"
import axios from "axios"
import EditCustomer from "./editcustomer";

class Customerdetails extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            cust:{}
            
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:3001/read/${this.props.id}`)
        
    .then((response)=>{console.log("get")
        console.log(response.data)
    this.props.setcustomer(response.data)
    this.setState({cust:response.data})
    console.log(this.props.id,response.data)
     } )
    }
    

    render(){
        let customer=this.state.cust
        console.log(customer)
        return(
            
            <div class="container">
                {this.props.card && <><div className="d-flex justify-content-between mb-2">
                    <h2 className="col-6 flex-grow-1">{customer.name}</h2>
                    <button type="button" className=" col-2 btn btn-warning mx-2" onClick={() => {
                    this.props.setcard(false);
                    this.props.setedit(true)
                } }>Edit</button>
                <button type="button" className="btn btn-danger col-2" onClick={() => this.props.customerdelete(customer._id)}>Delete</button>
                     </div>
                    <div className="row">
                        <p>
                            UserID: 
                        </p>
                        <h4>
                            {customer.userID}
                            </h4>
                    </div>
                    <div>
                        <p>
                            E-mail: 
                            </p><p>
                            {customer.email}
                            </p>
    
                    </div>
                    <div className="row">
                        <h4>
                            Timezone: <h6>
                            {customer.timezone}
                            </h6>
                        </h4>
                    </div>
                    
               <div className="btn btn-primary" onClick={() => this.props.showlist()}>Back</div></>
                }
                {
                    this.props.edit && <>
                    <div>
                        <EditCustomer customer={customer} setcard={this.props.setcard} setedit={this.props.setedit} setadd={this.props.setadd} />
                    </div>
                    </>
                }
            </div>
             
        )
            }
    
}
export default Customerdetails