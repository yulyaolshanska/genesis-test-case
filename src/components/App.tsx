import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

const Layout = lazy(() => import("./Layout/Layout"));
const NotFoundPage = lazy(() => import("../pages/notFoundPage/NotFoundPage"));
const CourseDetailsPage = lazy(
  () => import("../pages/courseDetailsPage/CourseDetailsPage")
);
const CoursesPage = lazy(() => import("../pages/coursesPage/CoursesPage"));

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CoursesPage />} />
            <Route path="/:id" element={<CourseDetailsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
