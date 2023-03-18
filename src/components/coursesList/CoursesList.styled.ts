import styled from "styled-components";

export const CourseList = styled.ul``;

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
