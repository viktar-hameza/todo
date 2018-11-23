import React, {Component} from 'react';

import './AddItemForm.css';

export default class AddItemForm extends Component {
  onLabelChange = (e) => {
    console.log(e.target.value);
  }
  render () {
    return (

        <form className='item-add-form d-flex'>
          <input type="text"
                  className='form-control'
                  onChange={this.onLabelChange}
                  placeholder = 'What need to be done' />
          <button
            className="btn btn-outline-secondary"
            onClick={() => this.props.onAddItem('Hello world')}>
            Add item <i className="fa fa-plus-circle" />
          </button>
        </form>

    );
  }
  
};
