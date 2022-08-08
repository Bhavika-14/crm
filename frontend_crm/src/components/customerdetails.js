import React from "react"
import EditCustomer from "./editcustomer";
export default function Customerdetails(props){
    console.log(props.customer)
    return(
    
        <div class="container">
            { props.card && <><div>
                <p>{props.customer.name}
                    {props.customer.userID}
                    {props.customer.email}
                    {props.customer.timezone}

                </p>
            </div><div className="btn btn-primary" onClick={() => props.showlist()}>Back</div><div className="btn btn-primary" onClick={() => {
                props.setcard(false);
                props.setedit(true)
            } }>Edit</div><div className="btn btn-primary" onClick={() => props.customerdelete(props.customer._id)}>Delete</div></>
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
    

    

