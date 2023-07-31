import React from "react"
import EditCustomer from "./editcustomer";
export default function Customerdetails(props){
    console.log(props.customer)
    return(
    
        <div class="container">
            { props.card && <><div className="d-flex justify-content-between mb-2">
                <h2 className="col-6 flex-grow-1">{props.customer.name}</h2>
                <button type="button" className=" col-2 btn btn-warning mx-2" onClick={() => {
                props.setcard(false);
                props.setedit(true)
            } }>Edit</button>
            <button type="button" className="btn btn-danger col-2" onClick={() => props.customerdelete(props.customer._id)}>Delete</button>
                 </div>
                <div className="row">
                    <p>
                        UserID: 
                    </p>
                    <h4>
                        {props.customer.userID}
                        </h4>
                </div>
                <div>
                    <p>
                        E-mail: 
                        </p><p>
                        {props.customer.email}
                        </p>

                </div>
                <div className="row">
                    <h4>
                        Timezone: <h6>
                        {props.customer.timezone}
                        </h6>
                    </h4>
                </div>
                
           <div className="btn btn-primary" onClick={() => props.showlist()}>Back</div></>
            }
            {
                props.edit && <>
                <div>
                    <EditCustomer customer={props.customer} setcard={props.setcard} setedit={props.setedit} />
                </div>
                </>
            }
        </div>
         
    )
        
        
    }
    

    

