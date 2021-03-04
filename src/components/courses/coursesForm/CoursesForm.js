import React, { Component } from "react";
import { form } from "./CoursesForm.module.css";

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
    flag: [],
    canceled: false,
  };

  componentDidMount() {
    console.log("mount");
  }

  componentWillUnmount() {
    this.setState({ canceled: true });
    console.log("unMount");
  }

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
    }
  };

  render() {
    const { name, modulesCount, time, difficulty } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit} className={form}>
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
        <button
          type='button'
          onClick={() =>
            fetch("https://jsonplaceholder.typicode.com/todos")
              .then((response) => response.json())
              .then(
                (data) =>
                  this.state.canceled && this.setState({ flag: [...data] })
              )
          }>
          GET Data
        </button>
      </form>
    );
  }
}

export default CoursesForm;
