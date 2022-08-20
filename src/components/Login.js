// import React, { Component } from 'react';
// import {Navigate} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {clearAuthState, login} from '../actions/auth';
// class Login extends Component {
//   constructor(props){
//     super(props);
//     // this.emailInputRef=React.createRef();
//     // this.passwordInputRef=React.createRef();
//     this.state={
//       email:'',
//       password:'',
//     };
//   }
  
// componentWillUnmount() {
//   this.props.dispatch(clearAuthState());
// }


// handleEmailChange=(e)=>{
//  console.log(e.target.value);
//  this.setState({
//    email:e.target.value
//  });
// };
// handlePasswordChange=(e)=>{
//   console.log(e.target.value);
//   this.setState({
//     password:e.target.value,
//   });
// };

//   handleFormSubmit=(e)=>{
//     e.preventDefault();
//     //console.log('this.emailInputRef',this.emailInputRef);
//     //console.log('this.passwordInputRef',this.passwordInputRef);
//     console.log('this.state',this.state);  
//     const {email,password}=this.state;
//     if(email&&password){
//       this.props.dispatch(login(email,password));
//     }
//   }

//     render() {
//       const {error,inProgress,isLoggedin}=this.props.auth;
//       const {from}=this.props.location.state || {from:{pathname:'/'}};

//       if(isLoggedin){
//         return <Navigate to = {from} />
//       }


//         return (
//            <form className='login-form'>
//                <span className='login-signup-header'>Log In</span>
//                 {error && <div className='alert error-dialog'>{error}</div>}
//                <div className='field'>
//                  <input 
//                  type="email" 
//                  placeholder="Email" 
//                  required 
//                  //ref={this.emailInputRef}
//                  onChange={this.handleEmailChange}
//                  value={this.state.email}
//                  />
//                </div>
//                <div className='field'>
//                  <input 
//                  type="password" 
//                  placeholder="Password" 
//                  required 
//                 // ref={this.passwordInputRef}
//                 onChange={this.handlePasswordChange}
//                 value={this.state.password}
//                  />  
//                </div>
//                <div className='field'>
//                  {inProgress ?
//                  <button onClick={this.handleFormSubmit} disabled={inProgress}>
//                  Logging in...
//                 </button> :
//                  <button onClick={this.handleFormSubmit} disabled={inProgress} >
//                  Log In
//                 </button>
//                 }
//                  {/* <button onClick={this.handleFormSubmit} disabled={inProgress}>
//                    Log In
//                   </button> */}
//                </div>
//            </form>
//         );
//     }
// }

// function mapStateToProps(state){
//   return{
//     auth:state.auth,
//   }
// }
// export default connect(mapStateToProps)(Login);


/////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuthState, login } from '../actions/auth';
function Login(props) {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  useEffect(() => {
    props.dispatch(clearAuthState());
  }, []);

  let handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  let handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  let handleFormSubmit = (e) => {
    e.preventDefault();
    //console.log('this.emailInputRef',this.emailInputRef);
    //console.log('this.passwordInputRef',this.passwordInputRef);

    if (email && password) {
      props.dispatch(login(email, password));
    }
  };

  const { error, inProgress, isLoggedin } = props.auth;
  const location = useLocation();

  const from = location.state || "/"
  if (isLoggedin) {
    return <Navigate to={from} />;
  }

  return (
    <form className="login-form">
      <span className="login-signup-header">Log In</span>
      {error && <div className="alert error-dialog">{error}</div>}
      <div className="field">
        <input
          type="email"
          placeholder="Email"
          required
          //ref={this.emailInputRef}
          onChange={handleEmailChange}
          value={email}
        />
      </div>
      <div className="field">
        <input
          type="password"
          placeholder="Password"
          required
          // ref={this.passwordInputRef}
          onChange={handlePasswordChange}
          value={password}
        />
      </div>
      <div className="field">
        {inProgress ? (
          <button onClick={handleFormSubmit} disabled={inProgress}>
            Logging in...
          </button>
        ) : (
          <button onClick={handleFormSubmit} disabled={inProgress}>
            Log In
          </button>
        )}
        {/* <button onClick={this.handleFormSubmit} disabled={inProgress}>
                   Log In
                  </button> */}
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Login);