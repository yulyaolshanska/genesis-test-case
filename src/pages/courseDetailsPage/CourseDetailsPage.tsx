import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "redux/coursesApi";
import {
  ArrowIcon,
  BackLink,
  CourseDescription,
  CourseLesson,
  CourseLessonsList,
  LessonTitle,
  CourseTitle,
  LockIcon,
  Title,
  TitleBox,
  VideoContainer,
} from "./CourseDetailsPage.styled";
import { Container } from "components/coursesList/CoursesList.styled";
import VideoPlayer from "components/VideoPlayer/VideoPlayer";

interface LessonseDetails {
  id: string;
  link: string;
  title: string;
  status: string;
  previewImageLink: string;
  order: number;
}

const CourseDetailsPage: React.FC = () => {
  const { id: courseId = "" } = useParams();
  const { state } = useLocation();
  const backLinkHref = state?.from ?? "/";
  const { data: course } = useGetCourseByIdQuery(courseId);
  const [currentLesson, setCurrentLesson] = useState<LessonseDetails | null>(
    null
  );
  const [isVideoOpen, setIsVideoOpen] = useState(true);

  useEffect(() => {
    if (course && course.lessons && course.lessons.length > 0) {
      setCurrentLesson(course.lessons[0]);
    }
  }, [course]);

  const handleLessonClick = (lesson: LessonseDetails) => {
    if (lesson.status !== "locked") {
      setIsVideoOpen(true);
      setCurrentLesson(lesson);
    }
    if (lesson.status === "locked") {
      setIsVideoOpen(false);
    }
  };

  return (
    <>
      <Container>
        <BackLink to={backLinkHref}>
          <ArrowIcon />
          Go Back
        </BackLink>
        <CourseTitle>{course?.title}</CourseTitle>
        <CourseDescription>{course?.description}</CourseDescription>
        <VideoContainer>
          {isVideoOpen && currentLesson && (
            <VideoPlayer
              id={currentLesson.id}
              videoLink={currentLesson.link}
              order={currentLesson.order}
              previewImageLink={currentLesson.previewImageLink}
              status={currentLesson.status}
            />
          )}
        </VideoContainer>

        <Title>Lessons:</Title>
        <CourseLessonsList>
          {course?.lessons.map((lesson: LessonseDetails) => (
            <CourseLesson
              onClick={() => handleLessonClick(lesson)}
              key={lesson.id}
              id={lesson.id}
              title={lesson.title}
            >
              <TitleBox>
                <LessonTitle>{lesson.title}.</LessonTitle>
                {lesson.status === "locked" && <LockIcon />}
              </TitleBox>
            </CourseLesson>
          ))}
        </CourseLessonsList>
      </Container>
    </>
  );
};

export default CourseDetailsPage;
