import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledHeading = styled.h1`
  color: red;
`;

const Index = () => (
  <StyledContainer>
    <StyledHeading>Hello World</StyledHeading>
  </StyledContainer>
);

export default Index;
