import styled from "styled-components";

export const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 0;
  & > li:after {
    content: "/";
    padding: 0 8px;
  }
`;

export const Crumb = styled.li`
  display: inline-block;

  &:last-of-type:after {
    content: "";
    padding: 0;
  }

  a {
    color: grey;
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`;