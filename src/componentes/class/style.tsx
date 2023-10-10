import styled from 'styled-components'

export const ContainerClass = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap:100px;
  width: 80%;
  padding-bottom: 50px;
`

export const ContainerText = styled.div``

export const ContainerImage = styled.div`
  position: relative;
`

export const TittleClass = styled.h3`
  color: ${({ theme }) => theme.color.secundary.main};
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.poppins};
  font-size: 1.4em;
  position: relative;
  span {
    color: ${({ theme }) => theme.color.primary.contrastText};
    font-weight: 700;
  }
  & ::after{
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
export const ImageClass = styled.img`
  width: 400px;
  height: 250px;
`
export const SubTittle = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.color.primary.main};
  font-family: ${({ theme }) => theme.font.poppins};
  font-weight: 400;
  text-align: justify;
`;

export const DecorationTittle = styled.div`
  position: absolute;
  left: -2%;
  top: -8%;
  height: 40px;
  width: 40px;
  background-color: #DCE2EE;
  border-radius: 50%;
  z-index: -1;
`
export const CubeOne = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #23BDEE;
  z-index: -10;
  position: absolute;
  left: -10px;
  top: -10px;
  border-radius: 20px;
`
export const CubeTwo = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #2F327D;
  z-index: -10;
  position: absolute;
  right: -10px;
  bottom: -10px;
  border-radius: 20px;
`