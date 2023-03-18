import React from "react";
import {
  Card,
  CourseImg,
  CourseTitle,
  LessonsCount,
  Rating,
  Skills,
} from "./CourseItem.styled";

interface IMeta {
  courseVideoPreview: object;
  skills?: [];
}

interface ICourse {
  description: string;
  lessonsCount: number;
  rating: number;
  title: string;
  tags: [];
  meta: IMeta;
  image: string;
}

export const CourseItem: React.FC<ICourse> = ({
  description,
  lessonsCount,
  rating,
  title,
  tags,
  meta,
  image,
}) => {
  const skills = meta?.skills?.join(", ") ?? "";

  return (
    <Card>
      <CourseTitle>{title}</CourseTitle>
      <CourseImg src={image + "/cover.webp"} />
      <LessonsCount>Lessons: {lessonsCount}</LessonsCount>
      <Rating>Rating: {rating}</Rating>
      {skills !== "" ?? <Skills>Skills: {skills}</Skills>}
    </Card>
  );
};
