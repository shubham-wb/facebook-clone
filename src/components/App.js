// import React from "react";

// // function App() {
// //   return (
// //     <div className="App">
// //       App
// //     </div>
// //   );
// // }

// import {connect} from 'react-redux';
// import {fetchPosts} from '../actions/posts';
// class App extends React.Component {
//   componentDidMount(){
//     //fetching posts
//     this.props.dispatch(fetchPosts());
//   }
//   render() {
//     // console.log('Props',this.props);
//     const {posts}=this.props;
//     return (
//       <div>
//        <div className="posts-list">
//          {posts.map(post=>(
//            <div className="post-wrapper" key={post._is}>
//             <div className="post-header">
//               <div className="post-avatar">
//                 <img src="https://cdn-icons.flaticon.com/png/512/4140/premium/4140047.png?token=exp=1646669114~hmac=f578a6c50b0e1911428b292613f6cf9f" alt="user-pic" />
//                 <div>
//                   <span className="post-author">{post.user.name}</span>
//                   <span className="post-time">a minute ago</span>
//                 </div>
//               </div> 
//               <div className="post-content">{post.content}</div>
//               <div className="post-actions">
//                 <div className="post-like">
//                    <img src="https://cdn-icons-png.flaticon.com/512/1029/1029183.png" alt="likes-icon" />
//                    <span >{post.likes.length}</span>
//                 </div>
//                 <div className="post-comments-icon">
//                   <img 
//                   src="https://cdn-icons.flaticon.com/png/512/1947/premium/1947247.png?token=exp=1646671746~hmac=4a10ff68c39d66005ee19ab04a0efb50"
//                   alt="comments-icon"
//                   />
//                   <span>{post.comments.length}</span>
//                 </div>
//                 </div>
//                 <div className="post-comment-box">
//                   <input placeholder="Start typing a comment" />
//                   </div>
//             <div className="post-comments-list">
//               <div className="post-comments-item">
//                 <div className="post-comment-header">
//                   <span className="post-comment-author">Bill</span>
//                   <span className="post-comment-time">a minute agp</span>
//                   <span className="post-comment-likes">22</span>
//                   </div>
//                   <div className="post-comment-content">
//                     Random comment
//                   </div>
//                 </div>
//             </div>
//             </div>
//             </div>
//          ))}
//       </div>
//       </div>
//     );
// }
// }

// function mapStateToProps(state){
//   return{
//     posts:state.posts,
//   };
// }
// export default connect(mapStateToProps)(App);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { fetchPosts } from '../actions/posts';
// import { Home,Navbar,Page404,Login,Signup } from './';
// import {BrowserRouter as Router,Navigate,Route, Routes}from 'react-router-dom';
// // import {Switch} from "react-router";
// import jwt from 'jwt-decode';
// import { authenticateUser } from '../actions/auth';
// // const Login =()=><div>Login</div>;
// // const SignUp =()=><div>SignUp</div>;
// // const Home =(props)=>{
// //   console.log('aa',props);
// //   return <div>Home</div>
// // }



// const Settings =()=><div>Setting</div>;

// const PrivateRoute=(privateRouteProps)=>{
//   const {isLoggedin,path,component:Component}=privateRouteProps;
//   return (
//   <Route 
//   path={path}
//    render={(props)=>{
//     return isLoggedin?<Component {...props}/>:<Navigate to="/login" />;
//   }}/>);
// }



// class App extends React.Component {
//   componentDidMount() {
//     this.props.dispatch(fetchPosts());

//     const token = localStorage.getItem('token');
//     if(token){
//       const user= jwt(token);
//       console.log('user',user);
//       this.props.dispatch(authenticateUser({
//         email:user.email,
//         _id:user._id,
//         name:user.name,
//       }));
//     }
//   }

//   render() {
//     const { posts , auth} = this.props;
//     console.log('bbbbb',this.props);
//     return (
//       <Router>
//          <Navbar />
//           {/* <PostsList posts={posts} /> */}
//           {/* <ul>
        
//            <li>
//              <Link to="/">Home</Link>
//            </li>
//            <li>
//              <Link to="/login">Login</Link>
//            </li>
//            <li>
//              <Link to="/signup">SignUp</Link>
//            </li>
//          </ul> */}

       
//         <Routes>

//         {/* <Switch> */}
//          <Route exact={true} path="/" element={<Home  posts={posts} />}/>

//          {/* <Route exact={true} path="/" render={(props)=>{
//            return <Home {...props} posts={posts} />;
//          }} /> */}

//          <Route path="/login" element={<Login />} />
//          <Route path="/signup" element={<Signup />} />
//          <PrivateRoute path="/settings" element={<Settings  isLoggedin={auth.isLoggedin}/>}/>
//          <Route  element={Page404} />
         
//          {/* </Switch> */}
//         </Routes>
       
//       </Router>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     posts: state.posts,
//     auth:state.auth,
//   };
// }

// App.propTypes={
//   posts:PropTypes.array.isRequired,
// }

// export default connect(mapStateToProps)(App);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { fetchPosts } from "../actions/posts";
// import { Home, Navbar, Page404, Login, Signup,PrivateRoute ,Settings,UserProfile} from "./";
// import {
//   BrowserRouter as Router,
//   Navigate,
//   Route,
//   Routes,
// } from "react-router-dom";
// // import {Switch} from "react-router";
// import jwt from "jwt-decode";
// import { authenticateUser } from "../actions/auth";
// import { getAuthTokenFromLocalStorage } from "../helpers/utils";
// import {useHistory} from 'react-router-dom';

// // const Login =()=><div>Login</div>;
// // const SignUp =()=><div>SignUp</div>;
// // const Home =(props)=>{
// //   console.log('aa',props);
// //   return <div>Home</div>
// // }

// // const Settings = () => <div>Setting</div>;

// // const PrivateRoute = (props) => {
// //   console.log('cccccccc',props);
// //  console.log('ddddd',props.children);
// //   return props.auth.isLoggedin? (
// //    props.children
// //   ) : (
// //     <Navigate to='/login'></Navigate>
// //   );
// // };

// class App extends React.Component {
  
//   componentDidMount() {
//     console.log('sssssssss',this.props);
//     this.props.dispatch(fetchPosts());

//     const token = getAuthTokenFromLocalStorage();
//     if (token) {
//       const user = jwt(token);
//       console.log("user", user);
//       this.props.dispatch(
//         authenticateUser({
//           email: user.email,
//           _id: user._id,
//           name: user.name,
//         })
//       );
//     }
//   }

//   render() {
    
//     const { posts, auth } = this.props;
//     console.log("bbbbb", this.props);
//     return (
//       <Router>
//         <Navbar />
//         {/* <PostsList posts={posts} /> */}
//         {/* <ul>
        
//            <li>
//              <Link to="/">Home</Link>
//            </li>
//            <li>
//              <Link to="/login">Login</Link>
//            </li>
//            <li>
//              <Link to="/signup">SignUp</Link>
//            </li>
//          </ul> */}

//         <Routes>
//           {/* <Switch> */}
//           <Route exact={true} path='/' element={<Home posts={posts} />} />

//           {/* <Route exact={true} path="/" render={(props)=>{
//            return <Home {...props} posts={posts} />;
//          }} /> */}

//           <Route path='/login' element={<Login />} />
//           <Route path='/signup' element={<Signup />} />
//           <Route
//             exact
//             path='/settings'

//             //isLoggedin={auth.isLoggedin}
//             element={
//               <PrivateRoute>

//                 <Settings />
//               </PrivateRoute>
//             }
//           />
//           {/* user pe click krne pe uski profile pe jane ke liye */}
//           <Route
//           exact
//           path='/user/:userId'
//           //isLoggedin={auth.isLoggedin}
//           element={
//             <PrivateRoute>
//               <UserProfile />
//             </PrivateRoute>
//           }
//           />

//           <Route element={Page404} />

//           {/* </Switch> */}
//         </Routes>
//       </Router>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     posts: state.posts,
//     auth: state.auth,
//   };
// }

// App.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

// export default connect(mapStateToProps)(App);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/posts';
import {
  Home,
  Navbar,
  Page404,
  Login,
  Signup,
  PrivateRoute,
  Settings,
  UserProfile,
} from './';
import { Route, Routes, useLocation } from 'react-router-dom';
import { fetchUserFriends } from '../actions/friends';
import jwt from 'jwt-decode';
import { authenticateUser } from '../actions/auth';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';

function App(props) {
  let History = useLocation();
 // console.log(History, 'history');
 console.log('app.js',props);
  useEffect(() => {
    props.dispatch(fetchPosts());
    const token = getAuthTokenFromLocalStorage();
    if (token) {
      const user = jwt(token);
      props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
     //dispatch action for fetching user friends
     props.dispatch(fetchUserFriends());

    }
  }, []);

  const { posts ,friends,auth} = props;
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact={true} path="/" element={<Home posts={posts} friends={friends} isLoggedin={auth.isLoggedin} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          exact
          path="/settings"
          element={
            <PrivateRoute History={History}>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/user/:userId"
          element={
            <PrivateRoute History={History} >
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route element={Page404} />
      </Routes>
    </>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);