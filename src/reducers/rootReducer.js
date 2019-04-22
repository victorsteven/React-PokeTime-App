const initState = {
  posts: [
    { id: '1', title: "sunt aut facere ", body: "quia et suscipit suscipit recusandae consequuntur"},
    { id: '2', title: "sunt aut facere ", body: "quia et suscipit suscipit recusandae consequuntur"},
    { id: '3', title: "sunt aut facere ", body: "quia et suscipit suscipit recusandae consequuntur"}
  ]
}
const rootReducer = (state = initState, action) => {
  // console.log(action)
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => post.id !== action.id)
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer;