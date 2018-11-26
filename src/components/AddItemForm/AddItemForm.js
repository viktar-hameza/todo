import React, {Component} from 'react';

import './AddItemForm.css';

export default class AddItemForm extends Component {
  state = {
    label: ''
  }
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
    console.log(e.target.value);
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label) {
      this.props.onAddItem(this.state.label);
      this.setState({
        label: ''
      });
    }
    
  };
  render () {
    return (

        <form className='item-add-form d-flex'
              onSubmit={this.onSubmit}>
          <input type="text"
                  className='form-control'
                  onChange={this.onLabelChange}
                  placeholder='What need to be done'
                  value={this.state.label} />
          <button
            className="btn btn-outline-secondary"
            >
            Add item <i className="fa fa-plus-circle" />
          </button>
        </form>

    );
  }
  
};
