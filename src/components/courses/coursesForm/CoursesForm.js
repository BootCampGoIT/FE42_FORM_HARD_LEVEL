import React, { Component } from "react";

const initialState = {
  name: "",
  modulesCount: 0,
  time: 0,
  difficulty: "easy",
};

const difficultyItems = ["easy", "medium", "hard"];

class CoursesForm extends Component {
  state = {
    ...initialState,
    ...this.props.course,
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.props.editCourse(this.state);
    } else {
      this.props.addCourse(this.state);
      this.setState({ ...initialState });
    }
  };

  render() {
    const { name, modulesCount, time, difficulty } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Modules count:
          <input
            type='number'
            name='modulesCount'
            value={modulesCount}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Total time:
          <input
            type='number'
            name='time'
            value={time}
            onChange={this.onHandleChange}
          />
        </label>
        <select
          name='difficulty'
          value={difficulty}
          onChange={this.onHandleChange}>
          {difficultyItems.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <button type='submit'>{!this.state.id ? "Add Course" : "Save"}</button>
      </form>
    );
  }
}

export default CoursesForm;
