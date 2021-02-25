import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import CoursesForm from "./coursesForm/CoursesForm";
import CoursesList from "./coursesList/CoursesList";

class Courses extends Component {
  state = {
    coursesList: [
      {
        id: "seasrdtygui",
        name: "react",
        modulesCount: 16,
        time: 340,
        difficulty: "hard",
      },
      {
        id: "fsddfdsfsdf",
        name: "html",
        modulesCount: 136,
        time: 3340,
        difficulty: "hard",
      },
    ],
    editedCourse: "",
  };

  addCourse = (course) => {
    this.setState((prev) => ({
      coursesList: [...prev.coursesList, { ...course, id: uuidv4() }],
    }));
  };

  deleteCourse = (id) => {
    this.setState((prev) => ({
      coursesList: [...prev.coursesList.filter((course) => course.id !== id)],
    }));
  };

  editCourse = (course) => {
    this.setState((prev) => ({
      coursesList: [
        ...prev.coursesList.map((item) =>
          item.id === course.id ? course : item
        ),
      ],
      editedCourse: "",
    }));
  };

  setEdit = (id) => {
    this.setState((prev) => ({ editedCourse: id }));
  };

  render() {
    return (
      <div>
        <CoursesForm addCourse={this.addCourse} editCourse={this.editCourse} />
        <CoursesList
          coursesList={this.state.coursesList}
          deleteCourse={this.deleteCourse}
          editedCourse={this.state.editedCourse}
          setEdit={this.setEdit}
          editCourse={this.editCourse}
        />
      </div>
    );
  }
}

export default Courses;

const id = "dfsdd";
if (id) {
  console.log("hello");
} else console.log("by");
