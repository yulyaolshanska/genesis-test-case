import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyle";
import theme from "styles/theme";
import Loader from "./Loader/Loader";

const NotFoundPage = lazy(() => import("../pages/notFoundPage/NotFoundPage"));
const CourseDetailsPage = lazy(
  () => import("../pages/courseDetailsPage/CourseDetailsPage")
);
const CoursesPage = lazy(() => import("../pages/coursesPage/CoursesPage"));

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<CoursesPage />} />
          <Route path="/:id" element={<CourseDetailsPage />}>
            <Route />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
