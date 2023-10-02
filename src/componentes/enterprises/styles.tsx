import styled from "styled-components";

interface Enterprise {
  relative?: boolean;
}
export const ContainerEnteprises = styled.section`
  width: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 800px) {
    padding: ${({ theme }) => theme.padding.breakpoint800};
    height: auto;
    overflow: none;
  }
`;
export const TextEnterprises = styled.h3`
  font-family: ${({ theme }) => theme.font.poppins};
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary.main};
`;
export const ContainerLogoEnterprises = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  @media (max-width: 800px) {
    flex-wrap: wrap;
    padding-bottom: 20px;
  }
`;

export const Enterprise = styled.img<Enterprise>`
  height: 50px;
  width: 100px;
  position: relative;
  top: ${({ relative }) => (relative ? "8px" : "0")};
  @media (max-width: 800px) {
    height: 50px;
    width: 80px;
  }
`;
