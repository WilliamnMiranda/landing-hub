import styled from "styled-components";
interface IImage {
  position: boolean;
}
export const ContainerSoftware = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;

export const TittleSoftware = styled.h3`
  color: ${({ theme }) => theme.color.secundary.main};
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.poppins};
  font-size: 1.4em;
  span {
    color: ${({ theme }) => theme.color.primary.contrastText};
    font-weight: 700;
  }
`;

export const SubTittle = styled.p`
  color: ${({ theme }) => theme.color.primary.main};
  font-family: ${({ theme }) => theme.font.poppins};
  font-weight: 400;
  text-align: center;
`;

export const ContainerCards = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Card = styled.article`
  box-sizing: border-box;
  width: 280px;
  height: 260px;
  box-shadow: 0px 10px 60px 0px #262d7614;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  position: relative;
  padding: 0px 20px 0px 20px;
`;

export const ContainerIconCard = styled.div`
  position: absolute;
  top: -9%;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconCard = styled.img<IImage>`
  height: 23px;
  width: 23px;
  position: relative;
  left: ${({ position }) => !position && "2%"};
`;

export const TittleCard = styled.h3<IImage>`
  color: ${({ theme }) => theme.color.secundary.main};
  font-family: ${({ theme }) => theme.font.poppins};
  font-weight: 500;
  text-align: center;
  font-size: 1em;
  position: relative;
  top: ${({ position }) => position && "-4%"};
`;

export const TextCard = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color.primary.main};
  font-family: ${({ theme }) => theme.font.poppins};
  font-weight: 400;
  font-size: 0.9em;
`;
