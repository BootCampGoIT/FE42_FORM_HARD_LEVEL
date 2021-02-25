import React from "react";
import CoursesForm from "../../coursesForm/CoursesForm";
const CourseListItem = ({
  id,
  name,
  modulesCount,
  time,
  difficulty,
  deleteCourse,
  editedCourse,
  editCourse,
  setEdit,
}) => {
  const deleteItem = () => {
    deleteCourse(id);
  };
  const editItem = () => {
    setEdit(id);
  };

  return (
    <li>
      {editedCourse === id ? (
        <CoursesForm
          course={{ id, name, modulesCount, time, difficulty }}
          editCourse={editCourse}
        />
      ) : (
        <>
          <h2>Name: {name}</h2>
          <p>Modules count: {modulesCount}</p>
          <p>Total time: {time}</p>
          <p>Difficulty: {difficulty}</p>
          <button type='button' onClick={deleteItem}>
            Delete
          </button>
          <button type='button' onClick={editItem}>
            Edit
          </button>
        </>
      )}
    </li>
  );
};

export default CourseListItem;
