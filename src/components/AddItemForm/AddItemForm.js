import React from 'react';

import './AddItemForm.css';

const AddItemForm = (props) => {

  return (
    <div className="item-add-form">
      <button
        className="btn btn-outline-secondary"
        onClick={() => props.onAddItem('Hello world')}>
        Add item <i className="fa fa-plus-circle" />
      </button>
    </div>
  );
};
export default AddItemForm;