import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Wrapper } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <div>
        <h1 className="logo">Board Colour</h1>
      </div>
      <div>
        <ConnectButton showBalance />
      </div>
    </Wrapper>
  );
};

export default Header;
