import React from 'react';
import {Link, Navigate} from 'react-router-dom';

import {connect} from 'react-redux';
import {searchUsers} from '../actions/search'
import {logoutUser} from '../actions/auth';
class Navbar extends React.Component {
logOut=()=>{
  localStorage.removeItem('token');
  this.props.dispatch(logoutUser());
};


handleSearch=(e)=>{
  const searchText=e.target.value;
  this.props.dispatch(searchUsers(searchText));
}

handleUserClick=()=>{
  this.props.dispatch(searchUsers(''));
}


  render() {
    const {auth,results}=this.props;

    return (
      <nav className='nav'>
      <div className='left-nav'>
        <Link to="/">
        {/* <img src='' alt='logo' /> */}
        <h3>SingleParent</h3>
        </Link>
      </div>
      
      <div className='search-container'>
        <img 
          className='search-icon' 
          src='https://cdn-icons-png.flaticon.com/128/54/54481.png' 
          alt='search-icon' />
        <input placeholder='Search' onChange={this.handleSearch}/>  
        {results.length>0 && (
        <div className='search-results'>
          <ul>
            {results.map((user)=>(
             <li className='search-results-row' key={user._id}>
              <Link to={`/user/${user._id}`} onClick={this.handleUserClick}>
              <img 
              src='https://cdn-icons.flaticon.com/png/128/3177/premium/3177440.png?token=exp=1656073744~hmac=257bcfab70f134d54b6a9d29f2dd98f0' 
              alt='user-dp'
              />
              <span>{user.name}</span>  
              </Link>
            </li>
            ))}
          </ul>
        </div>
  )}
      </div>
      <div className='right-nav'>
      {auth.isLoggedin && (
        <div className='user'>
          <Link to="/settings">
            <img 
                  src='https://cdn-icons-png.flaticon.com/128/2922/2922506.png' 
                  alt='user-dp'
                  id='user-dp'
            />
            </Link>
            <span>{auth.user.name}</span>  
        </div> 
      )}
        <div className='nav-links'>
          <ul>
            {!auth.isLoggedin && (
            <li><Link to="/login">Log in</Link></li> )}
             {auth.isLoggedin && (
            <li onClick={this.logOut}>Log out</li>)}
            {!auth.isLoggedin && (
            <li><Link to="/signup">Register</Link></li>)}
            
          </ul>
        </div> 
      </div>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return{
    auth:state.auth,
    results:state.search.results,
  }
}

export default connect(mapStateToProps)(Navbar);