import axios from "axios";

export const getCourses = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_DATABASE_URL}/courses.json`
    );

    if (response.data) {
      const coursesList = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      return coursesList;
    }
    return [];
  } catch (error) {
    return error;
  }
};

export const addNewCourse = async (course) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_DATABASE_URL}/courses.json`,
      course
    );
    return response.data.name;
  } catch (error) {
    return error;
  }
};

export const deleteCourseById = (id) => {
  try {
    return axios.delete(
      `${process.env.REACT_APP_DATABASE_URL}/courses/${id}.json`
    );
  } catch (error) {
    return error;
  }
};

export const editCourseById = (course) => {
  const id = course.id;
  delete course.id;
  try {
    return axios.put(
      `${process.env.REACT_APP_DATABASE_URL}/courses/${id}.json`,
      course
    );
  } catch (error) {
    return error;
  }
};
