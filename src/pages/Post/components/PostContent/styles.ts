import styled from "styled-components";

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 4rem;

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors["brand-blue"]};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background: ${({ theme }) => theme.colors["base-post"]};
    padding: 1rem;
    border-radius: 4px;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }
  }
`;
