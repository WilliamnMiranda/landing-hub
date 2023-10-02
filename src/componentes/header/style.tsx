import styled from "styled-components";
export const Header = styled.header`
  height: 600px;
  background: #ffebe7;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.padding.default};
  overflow: hidden;
  @media (max-width: 1400px) {
    padding: ${({ theme }) => theme.padding.breakpoint1560};
  }
  @media (max-width: 1220px) {
    padding: ${({ theme }) => theme.padding.breakpoint1220};
  }
  @media (max-width: 800px) {
    padding: ${({ theme }) => theme.padding.breakpoint800};
    height: auto;
    overflow: none;
    padding: 0px 20px 40px 20px;
  }
`;
export const ListMenuHeader = styled.div`
  background-color: red;
`;
export const InfoHeader = styled.section`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;
export const ContainerImage = styled.div`
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  width: 670px;
  height: 590px;
  @media (max-width: 800px) {
    object-fit: contain;
    width: 400px;
    height: 400px;
  }
`;
export const ContainerTextHeader = styled.div`
  position: relative;
  top: 20%;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const MainText = styled.h1`
  font-size: 3.375em;
  color: ${({ theme }) => theme.color.primary.contrastText};
  font-family: ${({ theme }) => theme.font.nunito};
  font-weight: 800;
  @media (max-width: 1669px) {
    font-size: 2.8em;
  }
  @media (max-width: 800px) {
    text-align: center;
  }
`;
export const TextAlterColor = styled.span`
  color: ${({ theme }) => theme.color.secundary.main};
  font-family: ${({ theme }) => theme.font.poppins};
  font-weight: 700;
`;
export const SubText = styled.p`
  font-family: ${({ theme }) => theme.font.nunito};
  font-size: 1.2em;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  color: #464646;
`;

export const ContainerButtons = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const ButtonJoin = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  color: white;
  font-family: ${({ theme }) => theme.font.poppins};
  font-weight: 600;
  border-radius: 80px;
  background-color: ${({ theme }) => theme.color.primary.contrastText};
`;
export const ButtonWatch = styled.p`
  display: flex;
  align-items: center;
  color: #252641;
  justify-content: center;
  font-family: ${({ theme }) => theme.font.poppins};
  gap: 10px;
  font-weight: 400;
  font-size: 0.9em;
  p {
    position: relative;
    top: 3px;
  }
`;

export const ContainerRoundedButton = styled.div`
  height: 40px;
  width: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
export const ButtonPlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagePlay = styled.img`
  width: 15px;
  height: 15px;
  position: relative;
  left: 14%;
`;
