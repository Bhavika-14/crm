import React , {useState,useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import Customer_list from "./components/customerlist.js"
import AddCustomer from "./components/addcustomer.js"
import Customerdetails from "./components/customerdetails";
import Customerlist from "./components/customerlist";
import axios from "axios";


import EditCustomer from "./components/editcustomer";
function App() {

  let [customer,setcustomer]=useState({})
  let [customers,setcustomers]=useState([])

  let [card,setcard]=useState(false)
  let [list,setlist]=useState(true)
  let [showadd,setadd]=useState(false)
  let [edit,setedit]=useState(false)
  useEffect(()=>{
    axios.get('http://localhost:3001/read',{responseType:"json"}).then((response)=>{
    
    console.log(response)
    console.log(response.data)
    setcustomers(response.data)
    console.log(customers)
  })
    .then((myres)=>{console.log(JSON.stringify(myres))})
  
    
  },[])
  console.log(customers)

  let showcard=(id)=>{
    axios.get(`http://localhost:3001/read/${id}`)
    .then((response)=>{console.log(response.data)
    setcustomer(response.data)
      setcard(true)
      setlist(false)
    }
    )
    
  }

  let customerdelete=(id)=>{
    axios.delete(`http://localhost:3001/delete/${id}`).then((response)=>{console.log(response)})
    setlist(true)
    setcard(false)

  }
  let showlist=()=>{
    setcard(false)
    setlist(true)
  }
  

  
  return(
    <>
      <div>
        <h1 className="text-center mt-4">
          CUSTOMERS
        </h1>
        <main>
        <div className="container mt-5 col-6">
        <div className="mb-3">
                <button type="button" className="btn btn-success" onClick={()=>setadd(true)}>Add a new Customer</button>
                </div>
                {
                  showadd && <AddCustomer setadd={setadd} />
                }
              
            
            
            
              <div>
              
                {list &&
                
                <ul className="list-group"><Customerlist customers={customers} showcard={showcard} /></ul>} 
              
                <Customerdetails customer={customer} id={customer._id} showlist={showlist} customerdelete={customerdelete} setcard={setcard} edit={edit} card={card} setedit={setedit} setadd={setadd} />
                
              </div>
            
            
            
            </div>
        
        </main>
      </div>
      
    </>
  )
}

export default App;