import React, { Component, PropTypes } from 'react';
import {getPost, deletePost} from '../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    this.props.getPost(this.props.params.id);
  }

  delete(){
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const post = this.props.post;

    if(!post){
      return(
        <div>
          Loading...
        </div>
      )
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <Link className="btn btn-info" to="/">Home</Link>
        <div className="divider"></div>
        <button className="btn btn-danger" onClick={this.delete.bind(this)}>Delete Post</button>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {post: state.posts.post};
}

export default connect(mapStateToProps, {getPost: getPost, deletePost: deletePost})(PostsShow);
