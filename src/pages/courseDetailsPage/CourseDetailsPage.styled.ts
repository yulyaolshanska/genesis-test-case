import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export const ArrowIcon = styled(MdArrowBackIos)`
  width: 20px;
  height: 20px;
  @media ${(p) => p.theme.media.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const VideoContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
export const CourseTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;
export const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 15px;
`;
export const CourseDescription = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 16px;
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 20px;
  }
`;
export const CourseLessonsList = styled.ol``;

export const BackLink = styled(NavLink)`
  position: absolute;
  top: 20px;
  left: -30px;
  /* width: 200px; */
  z-index: 10;
  padding: 10px 15px;
  transform: translateX(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: ${(p) => p.theme.colors.accent};

  border-radius: 20px;
  background-color: rgb(246, 247, 247);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    background-color: rgb(191, 191, 191);
  }
  &.active {
    background-color: rgba(254, 254, 254, 0.5);
  }
`;

export const LockIcon = styled(FaLock)``;
export const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;
