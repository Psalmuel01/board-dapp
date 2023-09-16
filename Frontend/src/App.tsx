import { GlobalStyle, Wrapper } from "./App.styles";
import Header from "./components/Header";
import Board from "./components/Board";

import "@rainbow-me/rainbowkit/styles.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  sepolia,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora, sepolia],
  [
    alchemyProvider({ apiKey: "Zi_F-3fTztPtozvm58nBdd21noBes10h" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Colour Board",
  projectId: "082cc0ea987ee9c208e2e9946db7184b",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider coolMode chains={chains}>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Board />
        </Wrapper>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
