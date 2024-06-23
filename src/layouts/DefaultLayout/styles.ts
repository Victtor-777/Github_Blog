import styled from "styled-components";

export const LayoutContainer = styled.div`
  > main {
    max-width: 54rem;
    margin: 0 auto;

    @media (max-width: 54rem) {
      padding: 0 1rem;
    }
  }
`;
