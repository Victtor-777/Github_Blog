import { HeaderContainer } from "./styles";
import logoBlog from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoBlog} alt="" />
    </HeaderContainer>
  );
}
