import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { RootState } from "./store";

// export interface ICoursefffff {
//   id: string;
//   courses: [];
//   description: string;
//   lessonsCount: number;
//   rating: number;
//   title: string;
//   tags: [];
//   meta: object;
//   previewImageLink: string;
// }
interface ICourse {
  courses: [];
}
type CoursesResponse = ICourse;

const baseQuery = fetchBaseQuery({
  baseUrl:
    "https://api.wisey.app/api/v1/core/preview-courses?perPage=10&page=2",
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
  }),
});

export const { useGetCoursesQuery } = coursesApi;
