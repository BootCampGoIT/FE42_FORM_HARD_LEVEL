import React from "react";
import CourseListItem from "./courseListItem/CourseListItem";

const CoursesList = ({
  coursesList,
  deleteCourse,
  editedCourse,
  setEdit,
  editCourse,
}) => {
  return (
    <div>
      <h2>Courses:</h2>
      <ul className='list'>
        {coursesList.map((course) => (
          <CourseListItem
            {...course}
            key={course.id}
            deleteCourse={deleteCourse}
            editedCourse={editedCourse}
            setEdit={setEdit}
            editCourse={editCourse}
          />
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;
