import Metamask from "./WalletIcons/metamaskWallet.png";
import TrustWallet from "./WalletIcons/TrustWallet.png";

export const connectors = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "injected",
    priority: 1,
  },
  {
    title: "Trust Wallet",
    icon: TrustWallet,
    connectorId: "injected",
    priority: 3,
  },
];
