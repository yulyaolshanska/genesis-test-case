import { CoursesList } from "components/coursesList/CoursesList";
import { useAppDispatch } from "helpers/hooks/hooks";
import React, { useEffect } from "react";
import { useGetTokenQuery } from "redux/auth/authApi";
import { setToken } from "redux/auth/authSlice";
import { coursesApi } from "redux/coursesApi";

const CoursesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetTokenQuery("");
  const [getCourses, { isLoading, currentData }] =
    coursesApi.endpoints.getCourses.useLazyQuery();
  const courses = currentData?.courses || [];

  useEffect(() => {
    if (data?.token) {
      getCourses("");
    }
  }, [data, getCourses]);

  dispatch(setToken(data?.token));

  return (
    <div>
      All courses
      <CoursesList isLoading={isLoading} courses={courses} />
    </div>
  );
};

export default CoursesPage;
