import React from "react"
import axios from "axios"

class EditCustomer extends React.Component{
    constructor(props){
        super(props)
        this.onSubmit=this.onSubmit.bind(this)
        console.log(this.props.customer)
        this.state={
            name:this.props.customer.name,
            userID:this.props.customer.id,
            email:this.props.customer.email,
            timezone:this.props.customer.timezone
            
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
    
        let id=this.props.customer._id
         let re=await axios.put(`http://localhost:3001/edit/${id}`,cust
        
        )
        console.log(re)
        this.setState({
            name:"",
            userID:"",
            email:"",
            timezone:""
        })

        

       this.props.setedit(false)
       this.props.setcard(true)
        
        
        
    
        
    }
    
    
    
    render(){
        return(
            <>
              <div className="container">
              <form class="row g-3" onSubmit={
                
                this.onSubmit}>
                <div class="col-md-6">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" placeholder={this.props.customer.name} class="form-control" name="name" id="name" onChange={(e)=>{
                        this.setState({name:e.currentTarget.value})
                    }}
                    value={this.state.name} />
                </div>
                <div class="col-md-6">
                    <label for="userId" class="form-label">UserID</label>
                    <input type="text" placeholder={this.props.customer.userID} class="form-control" name="userID" id="userID" onChange={(e)=>{
                        this.setState({userID:e.currentTarget.value})
                    }}
                    value={this.state.userID} />
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label">Email-ID</label>
                    <input type="email" placeholder={this.props.customer.email} class="form-control" name="email" id="email" onChange={(e)=>{
                        this.setState({email:e.currentTarget.value})
                    }}
                    value={this.state.email} />
                </div>
                <div class="col-md-6">
                    <label for="timezone" class="form-label">Timezone</label>
                    <input type="text" placeholder={this.props.customer.timezone} class="form-control" name="timezone" id="timezone" onChange={(e)=>{
                        this.setState({timezone:e.currentTarget.value})
                    }}
                    value={this.state.timezoe} />
                </div>
                <div class="col-6">
                    <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Update</button>
                </div> 
                <div className="col-6">
                    <button onClick={this.props.setadd(false)}>Cancel</button>
                </div>
              </form>
              </div>
            </>
        )
    }
}
export default EditCustomer