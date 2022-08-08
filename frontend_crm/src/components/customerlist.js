import React from "react"
export default function Customerlist(props){
        if(props.customers.length>0){
            return(
                props.customers.map((cust)=>{
                    console.log(cust)
                    console.log(props.customers.length)
                    console.log(props.customers)
                    return(
                        
                          <li className="list-group-item list-group-item-action d-flex justify-content-between" onClick={()=>props.showcard(cust._id)}>
                            <h4 className="flex-grow-1" >
                              {cust.name}
                            </h4>
                          </li>
                        
                    )
                }
                )
    
                    
            )
    
        }
        else{
            return(
                <h1>
                    Currently, there is no customer.
                </h1>
            )
        }
    }
    

    
