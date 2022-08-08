import React from "react"
import axios from "axios"

class AddCustomer extends React.Component{
    constructor(props){
        super(props)
        this.onSubmit=this.onSubmit.bind(this)
        this.state={
            name:"",
            userID:"",
            email:"",
            timezone:""
        }
    }
    async onSubmit(e){
        e.preventDefault()
        console.log(this.state)
        const cust={
            name:this.state.name,
            userID:this.state.userID,
            email:this.state.email,
            timezone:this.state.timezone

        }
    
        
         let re=await axios.post('http://localhost:3001/add',cust
        
        )
        console.log(re)
        

        

       
        //this.setState({
       //     name:"",
      //      userID:"",
     //       email:"",
     //       timezone:""
     //   })
        
        
    
        
    }
    
    
    
    render(){
        return(
            <>
              <div className="container mt-4 mb-4">
              <form class="row g-3" onSubmit={
                
                this.onSubmit}>
                <div class="col-md-6">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" id="name" onChange={(e)=>{
                        this.setState({name:e.currentTarget.value})
                    }}
                    value={this.state.name} />
                </div>
                <div class="col-md-6">
                    <label for="userid" class="form-label">UserID</label>
                    <input type="text" class="form-control" name="userID" id="userID" onChange={(e)=>{
                        this.setState({userID:e.currentTarget.value})
                    }}
                    value={this.state.userID} />
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label">Email-ID</label>
                    <input type="email" class="form-control" name="email" id="email" onChange={(e)=>{
                        this.setState({email:e.currentTarget.value})
                    }}
                    value={this.state.email} />
                </div>
                <div class="col-md-6">
                    <label for="timezone" class="form-label">Timezone</label>
                    <input type="text" class="form-control" name="timezone" id="timezone" onChange={(e)=>{
                        this.setState({timezone:e.currentTarget.value})
                    }}
                    value={this.state.timezone} />
                </div>
                <div class="col-6">
                    <button type="submit" class="btn btn-primary">ADD</button>
                </div> 
                <div className="col-6">
                    <button onClick={()=>this.props.setadd(false)}>Cancel</button>
                </div>
              </form>
              </div>
            </>
        )
    }
}
export default AddCustomer