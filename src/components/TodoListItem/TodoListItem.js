import React, {Component} from 'react';
import "./TodoListItem.css"



export default class TodoListItem extends Component {

  // state = {
  //   done: false,
  //   important: false
  // };

  // onLabelClick = () => {
  //   this.setState(({done}) => {
  //       return {
  //         done: !done
  //       };
  //   });
  // };
  // onMarkImportant = () => {
  //   this.setState((state) => {
  //       return {
  //         important: !state.important
  //       };
  //   });
  // };
  
  render() {
    const { label, onToggleImportant, onToggleDone, done, important } = this.props;
    // const { done, important } = this.state;

    let classNames = 'todo-list-item'; 
    if (done) {
      classNames += ' done';
    };
    
    if (important) {
      classNames += ' important';
    };

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant} >
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick ={this.props.onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
};
console.dir(TodoListItem);
// const TodoListItem = ({ label, important = false }) => {

//   const style = {
//     color: important ? 'steelblue' : 'black',
//     fontWeight: important ? 'bold' : 'normal'
//   };
  
//   return (
//     <span className="todo-list-item">
//       <span
//         className="todo-list-item-label"
//         style={style}>
//         {label}
//       </span>

//       <button type="button"
//         className="btn btn-outline-success btn-sm float-right">
//         <i className="fa fa-exclamation" />
//       </button>

//       <button type="button"
//         className="btn btn-outline-danger btn-sm float-right">
//         <i className="fa fa-trash-o" />
//       </button>
//     </span>
//   );
// };