import * as C from "./style";
import headerImage from "../../assets/header-pic.svg";
import playImage from "../../assets/image-play.svg";
const Header = () => {
  return (
    <C.Header>
      <C.ListMenuHeader>teste</C.ListMenuHeader>
      <C.InfoHeader>
        <C.ContainerTextHeader>
          <C.MainText>
            Studying{" "}
            <C.TextAlterColor>
              Online is now <br />
              much easier
            </C.TextAlterColor>
          </C.MainText>
          <C.SubText>
            Skilline is an interesting platform that will teach <br /> you in
            more an interactive way
          </C.SubText>
          <C.ContainerButtons>
            <C.ButtonJoin>Join for free</C.ButtonJoin>
            <C.ButtonWatch>
              <C.ContainerRoundedButton>
                <C.ButtonPlay>
                  <C.ImagePlay src={playImage} />
                </C.ButtonPlay>
              </C.ContainerRoundedButton>
              <p>Watch how it works</p>
            </C.ButtonWatch>
          </C.ContainerButtons>
        </C.ContainerTextHeader>
        <C.ContainerImage>
          <C.Image src={headerImage} />
        </C.ContainerImage>
      </C.InfoHeader>
    </C.Header>
  );
};

export default Header;
