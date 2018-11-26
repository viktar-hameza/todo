import React, { Component} from 'react';

import AppHeader from '../AppHeader';
import ItemStatusFilter from '../ItemStatusFilter';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import AddItemForm from '../AddItemForm'

import './App.css';

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    term: ''
  };
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  };

  deleteItem = (id) => {
    this.setState(({ todoData })  => {
      const idx = todoData.findIndex((el) => el.id === id );
      
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);

      const newArr = [...before, ...after];
      return {
        todoData: newArr
      }
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      }
    });
  };

  toggleProperty(arr, id, propsName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem};
    newItem[propsName] = !oldItem[propsName];
    const before = arr.slice(0, idx);
    const after = arr.slice(idx + 1);

    const newArr = [...before, newItem, ...after];
    return newArr;
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
    console.log('Toggle Important', id);
  };
  // onLabelSearch = (text) => {
  //   console.log()
  //   this.setState(({ todoData }) => {
  //     const newArr = [];
  //     const myExp = new RegExp(text, 'i');
  //     todoData.forEach((element,id) => {
  //       if (element.label.search(myExp) != -1) {
  //         newArr.push(element)
  //       }
  //     });
  //     return {
  //       todoData: newArr
  //     }
  //   });
  // }
  onLabelSearch = (term) => {
    this.setState({ term })
  }
  search = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem};
      newItem.done = !oldItem.done;
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);

      const newArr = [...before, newItem, ...after];
      return {
        todoData: newArr
      };
    });
    console.log('Toggle Done', id);
  };
  render() {
    const visibleItems = this.search(this.state.todoData, this.state.term);
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onLabelSearch={this.onLabelSearch} />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem} 
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>
        <AddItemForm
          onAddItem={this.addItem}/>
      </div>
    );
  };
}
