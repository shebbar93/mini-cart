import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  color: white;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcements = () => {
  return <Container>Free shipping on Orders Over 500₹.</Container>;
};

export default Announcements;
