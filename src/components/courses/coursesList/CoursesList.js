import React from "react";
import CourseListItem from "./courseListItem/CourseListItem";
import { myList } from "./Courses.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

const CoursesList = ({
  coursesList,
  deleteCourse,
  editedCourse,
  setEdit,
  editCourse,
  fetchData,
}) => {
  return (
    <div>
      <h2>Courses:</h2>

      <InfiniteScroll
        dataLength={coursesList.length}
        next={fetchData}
        hasMore={false}
        loader={<h4>Loading...</h4>}>
        <ul className={[myList, "flexRow"].join(" ")}>
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
      </InfiniteScroll>
    </div>
  );
};

export default CoursesList;
