import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {
  render(){
    const {fields: { title, categories, content }, handleSubmit} = this.props; //THIS ==== const handleSubmit = this.props.handleSubmit;

    return(
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-error text-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}></input>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-error text-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}></input>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-error text-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}></textarea>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-success">Submit</button>
        <div className="divider"></div>
        <Link to='/' className="btn btn-warning">Go Back</Link>
      </form>
    )
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = "Enter a title";
  }
  if(!values.categories){
    errors.categories = "Enter a category";
  }
  if(!values.content){
    errors.content = "Enter some content";
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostsNew);
//reduxForm has similar properties to connect(mapStateToProps, mapDispatchToProps) but
//...instead its reduxForm(formConfig, mapStateToProps, mapDispatchToProps)
