import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';
import { deletePost } from '../actions /postActions'

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }
  // state = {
  //   post: null
  // }
  // componentDidMount() {
  //   let id = this.props.match.params.post_id;
  //   axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //         .then(res => {
  //           this.setState({
  //             post: res.data
  //           })
  //           console.log('this is the res: ', res.data)
  //           console.log('the one: ', this.state.post)
  //         })
  // }
  
  render(){
    // const post = this.state.post ? (
    //   <div className="post">
    //     <h4 className="center">{this.state.post.title}</h4>
    //     <p>{this.state.post.body}</p>
    //   </div>
    // ) : (
    //   <div className="center">Loading Post...</div>
    // )
     
    console.log('this is the prop: ', this.props)
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <div className="btn grey" onClick={this.handleClick}>
            Delete Post
          </div>
        </div>
      </div>
    ) : (
      <div className="center">Loading Post...</div>
    )
    return (
      <div className="container">
        {post}
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //the parameter in the function below are 'action' parameters
    // deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id})}
    deletePost: (id) => { dispatch(deletePost(id))}

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);