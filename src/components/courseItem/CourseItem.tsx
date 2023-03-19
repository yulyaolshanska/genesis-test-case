import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Card,
  CourseImg,
  CourseTitle,
  DetailsBox,
  LessonsCount,
  Rating,
  Skills,
  TagItem,
} from "./CourseItem.styled";

interface IMeta {
  courseVideoPreview: object;
  skills?: [];
}

interface ICourse {
  id: string;
  description: string;
  lessonsCount: number;
  rating: number;
  title: string;
  tags: [];
  meta: IMeta;
  image: string;
}

export const CourseItem: React.FC<ICourse> = ({
  id,
  description,
  lessonsCount,
  rating,
  title,
  tags,
  meta,
  image,
}) => {
  const skills = meta?.skills?.join(", ") ?? "";
  const location = useLocation();

  return (
    <Card>
      <NavLink to={`/${id}`} state={{ from: location }}>
        <CourseImg src={image + "/cover.webp"} />
        <DetailsBox>
          <CourseTitle>{title}</CourseTitle>
          <LessonsCount>Lessons: {lessonsCount}</LessonsCount>
          <Rating>Rating: {rating}</Rating>
          {skills !== "" ?? <Skills>Skills: {skills}</Skills>}

          <TagItem key={id}>#{tags}</TagItem>
        </DetailsBox>
      </NavLink>
    </Card>
  );
};
