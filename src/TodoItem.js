import React from "react";

class TodoItem extends React.Component {
  render() {
    return;
    <div className="todo-item">
      <input type="checkbox" checked={this.item.completed} />
      <p>{this.item.text}</p>
    </div>;
  }
}

export default TodoItem;
