import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { RootState } from "./store";

interface ILesson {
  id: string;
  previewImageLink: string;
  link: string;
  status: string;
  title: string;
  order: number;
}
interface ICourse {
  courses: [];
}
type CoursesResponse = ICourse;
interface ICourseDetail {
  title: string;
  containsLockedLessons: boolean;
  description: string;
  lessons: ILesson[];
  meta: object;
  rating: number;
}
type CourseResponse = ICourseDetail;

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.wisey.app/api/v1/core/preview-courses",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("authorization", `Bearer ${token}`);
      headers.set("Access-Control-Request-Headers", "authorization");
    }
    return headers;
  },
});

export const coursesApi = createApi({
  reducerPath: "coursesApi",
  baseQuery,
  tagTypes: ["Courses", "Course"],
  endpoints: (builder) => ({
    getCourses: builder.query<CoursesResponse, string>({
      query: () => "",
      providesTags: ["Courses"],
    }),
    getCourseById: builder.query<CourseResponse, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetCoursesQuery, useGetCourseByIdQuery } = coursesApi;
