import { ADD_POST, UPDATE_POSTS,ADD_COMMENT,UPDATE_POST_LIKE } from "../actions/actionTypes";

export default function posts (state=[],action){
    //we have an object , inside it we have posts which is an array
    //current state {posts:[]}
    //an array of posts
    //root state is an object becoz in future if we want to add user data
    //or some other data thats why we did this

    switch(action.type){
        case UPDATE_POSTS:
            return action.posts;
        case ADD_POST:
            return [action.post,...state];
         case ADD_COMMENT:
                const newPosts = state.map((post) => {
                  if (post._id === action.postId) {
                    return {
                      ...post,
                      comments: [action.comment, ...post.comments],
                    };
                  }
          
                  return post;
                });
                return newPosts;   
         case UPDATE_POST_LIKE:
          const updatedPosts = state.map((post) => {
            if (post._id === action.postId) {
              return {
                ...post,
                likes: [...post.likes,action.userId],
              };
            }
    
            return post;
          }); 
          return  updatedPosts;   
        default:
            return state;    
    }
  
}