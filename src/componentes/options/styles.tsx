import styled  from "styled-components";

interface IImg{
  img: string;
}
export const ContainerOptions = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
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
`

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

export const ContainerCards = styled.article`
  display: flex;
  gap:25px;
`;

export const Card = styled.div<IImg>`
  position: relative;
  width: 400px;
  height: 250px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  border-radius: 20px;
  position:relative;
  display: flex;
  align-items: center;
  flex-direction:column;
  justify-content: center;
`;
export const Blur = styled.div`
  position: absolute;
  width: 400px;
  height: 250px;
  background-color: rgba(0,0,0,0.4);
  border-radius: 20px;
`
export const ContentCard = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
`

export const TittleContentCard = styled.h3`
  font-family: ${({ theme }) => theme.font.poppins};
  font-size: 1.4em;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;
  color:white;
`

export const ButtonContentOne = styled.button`
background-color: transparent;
outline:none;
color:white;
border-radius: 50px;
padding: 20px 50px;
border: 1px solid white;
`

export const ButtonContentTwo = styled.button`
background-color: #23BDEE;
border: none;
border-radius: 30px;
color:white;
outline:none;
padding: 20px 50px;
`