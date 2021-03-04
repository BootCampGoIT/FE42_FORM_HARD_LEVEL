import axios from "axios";
import React, { Component } from "react";

import {
  addNewCourse,
  deleteCourseById,
  editCourseById,
  getCourses,
} from "../services/coursesAPI";
import CoursesForm from "./coursesForm/CoursesForm";
import CoursesList from "./coursesList/CoursesList";

class Courses extends Component {
  state = {
    coursesList: [],
    editedCourse: "",
    error: {},
    isLoading: false,
  };

  //  lifeCircles
  componentDidMount() {
    this.setLoading();
    getCourses()
      .then((coursesList) => this.setState({ coursesList }))
      .catch((error) => this.setState({ error }))
      .finally(this.setLoading);
  }

  // callBacks

  setLoading = () => {
    this.setState((prevState) => ({ isLoading: !prevState.isLoading }));
  };

  addCourse = (course) => {
    this.setLoading();
    addNewCourse(course)
      .then((id) =>
        this.setState((prev) => ({
          coursesList: [...prev.coursesList, { id, ...course }],
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(this.setLoading);
  };

  deleteCourse = (id) => {
    this.setLoading();
    deleteCourseById(id)
      .then(() =>
        this.setState((prev) => ({
          coursesList: [
            ...prev.coursesList.filter((course) => course.id !== id),
          ],
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(this.setLoading);
  };

  editCourse = (course) => {
    this.setLoading();
    editCourseById(course)
      .then(() =>
        this.setState((prev) => ({
          coursesList: [
            ...prev.coursesList.map((item) =>
              item.id === course.id ? course : item
            ),
          ],
          editedCourse: "",
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(this.setLoading);
  };

  setEdit = (id) => {
    this.setState((prev) => ({ editedCourse: id }));
  };

  fetchData = () => {
    this.setState((prev) => ({
      coursesList: [
        ...prev.coursesList,
        JSON.parse(localStorage.getItem("coursesList")),
      ],
    }));
  };

  render() {
    console.log("render");
    return (
      <div>
        <CoursesForm addCourse={this.addCourse} editCourse={this.editCourse} />
        {this.state.isLoading && <h3>...loading</h3>}
        <CoursesList
          coursesList={this.state.coursesList}
          deleteCourse={this.deleteCourse}
          editedCourse={this.state.editedCourse}
          setEdit={this.setEdit}
          editCourse={this.editCourse}
          fetchData={this.fetchData}
        />
      </div>
    );
  }
}

export default Courses;

// const obj = {
//   state: {},
//   getData() {
//     this.getResult();
//   },
//   getResult() {},
// };

var a = 1;

function b() {
  a = 10;
  return;
  function a() {}
}

b();

console.log(a);