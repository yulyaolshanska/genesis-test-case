import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 20px;
  margin-left: auto;
  margin-right: auto;
  @media ${(p) => p.theme.media.tablet} {
    width: 768px;
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 1280px;
  }
`;

export const CourseList = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
  @media ${(p) => p.theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: unset;
    gap: 24px;
  }
`;

export const StyledButton = styled.button<{ active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 28px;

  border: ${(p) => (p.active ? "none" : "2px solid")};
  border-radius: 40px;

  background-color: ${(p) =>
    p.active ? p.theme.colors.accent : p.theme.colors.white};
  color: ${(p) =>
    p.active ? p.theme.colors.secondatyBtnText : p.theme.colors.accent};
  cursor: pointer;

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${(p) =>
      p.active ? p.theme.colors.hoverBtn : p.theme.colors.white};
    border-color: ${(p) => p.theme.colors.hoverBtn};
    color: ${(p) =>
      p.active ? p.theme.colors.secondatyBtnText : p.theme.colors.hoverBtn};
    outline: none;
  }
`;

export const PaginationButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const PaginationButton = styled(StyledButton)`
  border-radius: 20%;
  :not(:last-child) {
    margin-right: 10px;
  }
`;
