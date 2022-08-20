// import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchUserProfile } from '../actions/profile';
// import {connect} from 'react-redux';
// class UserProfile extends Component {
//   componentDidMount() {
//     const { match } = this.props;

//     if (match.params.userId) {
//       // dispatch an action
//       this.props.dispatch(fetchUserProfile(match.params.userId));
//     }
//   }
 
//   render() {
//     const {
//       match: { params },profile
//     } = this.props;
//     console.log('this.props', params);
    
//    // console.log('this.props',this.props);
//     const user= profile.user;

//     if(profile.inProgress){
//       return <h1>Loading!</h1>
//     }

//     return (
//       <div className="settings">
//         <div className="img-container">
//           <img
//             src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
//             alt="user-dp"
//           />
//         </div>

//         <div className="field">
//           <div className="field-label">Name</div>
//           <div className="field-value">{user.name}</div>
//         </div>

//         <div className="field">
//           <div className="field-label">Email</div>
//           <div className="field-value">{user.email}</div>
//         </div>

//         <div className="btn-grp">
//           <button className="button save-btn">Add Friend</button>
//         </div>
//       </div>
//     );
//   }
// }

// function mapStateToProps({profile}){
//   return {
//     profile,
//   }
// }
// export default connect(mapStateToProps)(UserProfile);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserProfile } from '../actions/profile';
import { connect } from 'react-redux';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
import { addFriend , removeFriend} from '../actions/friends';
import { APIUrls } from '../helpers/urls';
import { useState } from "react";
// react-router-dom v6
//If using RRDv6 then there is no match prop. Gone are the route props. Here only the useParams and other //hooks exist, so use them.

const UserProfile = (props) => {
 //console.log('vgvgvgvg',props);

  // const [success,error]=useState(false);
  // const[successMessage]=useState(null);

  const [success,setSuccess]=useState(false);
  const [error,setError]=useState(false);
  const [successMessage,setSuccessMessage]=useState(null);
const [isUserAFriend,setisUserAFriend]=useState(false);

// console.log('vvvvv',props);
 const id = useParams().userId;
  useEffect(() => {
    if (id) {
      // dispatch an action
      props.dispatch(fetchUserProfile(id));
    }
  },[id]);
  


  const { profile } = props;
  const user = profile.user;
  //console.log(profile, 'profile');
////////friends
 
  
 const checkIfUserIsAFriend = () => {
    //console.log('this.props', props);
    const{friends}=props;
    const index = friends.map((friend) => friend.to_user._id).indexOf(id);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  useEffect(()=>{
    console.log('checkifuserafriend',isUserAFriend);
    setisUserAFriend(checkIfUserIsAFriend());
  })





  const handleAddFriendClick = async () => {
    const url = APIUrls.addFriend(id);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.success) {
      // this.setState({
        setSuccess(true)
        setSuccessMessage('Added friend successfully')
      // });

      props.dispatch(addFriend(data.data.friendship));
    } else {
      // this.setState({
        setSuccess(null)
        setError(data.message)
     // });
    }
  };



  const handleRemoveFriendClick = async () => {
    // Mini Assignment
   
    const url = APIUrls.removeFriend(id);

    const extra = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    };

    const response = await fetch(url, extra);
    const data = await response.json();
    //console.log('await data', data);

    if (data.success) {
      // show user message
      //this.setState({
        setSuccess(true)
        setSuccessMessage('Removed friends successfully!')
     // });
      props.dispatch(removeFriend(id));
    } else {
     // this.setState({
        setSuccess(null)
        setError(data.message)
     // });
    }
  };


  return !profile.inProgress ? (
    <div className="settings">
      <div className="img-container">
        <img
          src="https://cdn-icons-png.flaticon.com/128/709/709722.png"
          alt="user-dp"
        />
      </div>

      <div className="field">
        <div className="field-label">Name</div>
        <div className="field-value">{user.name}</div>
      </div>

      <div className="field">
        <div className="field-label">Email</div>
        <div className="field-value">{user.email}</div>
      </div>

      <div className="btn-grp">
          {!isUserAFriend ? (
            <button
              className="button save-btn"
              onClick={handleAddFriendClick}
            >
              Add Friend
            </button>
          ) : (
            <button 
              className="button save-btn"
              onClick={handleRemoveFriendClick}
            >
              Remove Friend
              </button>
          )}

          {success && (
            <div className="alert success-dailog">
              {successMessage}
            </div>
          )}
          {error && <div className="alert error-dailog">{error}</div>}
      </div>
    </div>
  ) : (
    <h1>Loading!</h1>
  );
};

function mapStateToProps({ profile,friends }) {
  return {
    profile,
    friends
  };
}
export default connect(mapStateToProps)(UserProfile);
