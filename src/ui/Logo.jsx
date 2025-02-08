import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import Heading from "../ui/Heading";
const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 7.6rem;
  width: auto;
`;

const SiteName = styled(Heading)`
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: "var(--color-grey-700)";
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" draggable="false" />
      <SiteName isDarkMode={isDarkMode}>依山旅游酒店</SiteName>
    </StyledLogo>
  );
}

export default Logo;
