import React, { useState } from "react";
import { CourseLesson, LessonTitle } from "./CourseLessonsItem.styled";

interface ILesson {
  id: string;
  previewImageLink: string;
  link: string;
  status: string;
  title: string;
  order: number;
}

export const CourseLessonsItem: React.FC<ILesson> = ({
  id,
  link,
  title,
  order,
  previewImageLink,
  status,
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoClick = () => {
    if (status !== "blocked") {
      setIsVideoOpen(!isVideoOpen);
    }
  };

  return (
    <>
      <CourseLesson onClick={handleVideoClick}>
        <LessonTitle>{title}</LessonTitle>
      </CourseLesson>
    </>
  );
};
