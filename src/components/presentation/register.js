import React,{useState,useEffect} from "react";
import { isLoaded } from 'react-redux-firebase'
import { connect } from "react-redux";
import * as authActions from '../../Redux/Actions/AuthAction';
import { useHistory } from "react-router";
  function Register(props) {
 
    let history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const handleEmail= (e)=>{
      setEmail(e.target.value);
      }
      const handlePassword=(e)=>{
        setPassword(e.target.value);
      }
   
  const onSubmit=(e)=>{
    e.preventDefault();
     let userdataObj = {email:email, password:password}
     props.register(userdataObj);
    
  }

   useEffect(()=>{

    if(props.authFirebase ?.uid){

      history.push('/');
    }

   },[props])

    return (
      <>

    {!isLoaded(props.authFirebase)?<></>:  
      
      <>
  
    {/* To save from multiple request and not show from while firebase auth is not loaded use isloaded */}
      
        {props.authMine.loading?<center><h4 style={{marginTop:'10%',height:'52vh'}}>Patiently Wait...we are resgistering you in</h4></center>:
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
               
                    <h2 className="form-heading center">Enter your details</h2>
                    <div className="form-section">
                        <div className="input-group full"><label>Email</label>
                            <div className="effect"><input type="text" name="email" value={email||''}  onChange={handleEmail}  /><span></span>
                            </div>
                        </div>

                        <div className="input-group full"><label>Password</label>
                            <div className="effect"><input  type="password" name="password"  value={password||''} onChange={handlePassword}/><span></span>
                            </div>
                        </div>
                        {props.authMine?.ErrorMessage?.message?<div className="input-group full">
                                <span className="error-message" >{props.authMine?.ErrorMessage?.message}</span> 
                        </div> :<></>}
                        <div className="form-buttons">
                            <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Register</button>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
        

    }
      </>
  }

        </>
    );
  }
  // it give whole state we return the object that we need to consume
  const mapStateToProps=(state)=>{
  
    return {
      authMine:state.auth,
      authFirebase: state.firebase.auth
    }
   }
  
// add to state
  const mapDispatchToProps=dispatch=>{

    return{
      register: (userData)=> dispatch(authActions.registerUser(userData))
    }


  }



  export default connect(mapStateToProps,mapDispatchToProps) (Register); 