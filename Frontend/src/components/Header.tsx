import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Wrapper } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <div>
        <h2 className="logo">Board Colour</h2>
      </div>
      <div>
        <ConnectButton showBalance />
      </div>
    </Wrapper>
  );
};

export default Header;
