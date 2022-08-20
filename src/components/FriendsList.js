import React from 'react';
import { FriendsListItem } from './';
import {connect} from 'react-redux';
const FriendsList = (props) => {
  // const {user}=props.auth;
  //console.log('lllllllll',props);
  return (
    <div className="friends-list">
      <div className="header">Friends</div>

      {props.friends && props.friends.length === 0 && (
        <div className="no-friends">No friends found!</div>
      )}

      {props.friends &&
        props.friends.map((friend) => (
          <FriendsListItem friend={friend.to_user} key={friend._id} />
        ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
    friends:state.friends
  };
}

export default connect(mapStateToProps)(FriendsList);

