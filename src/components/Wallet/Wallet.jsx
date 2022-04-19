// import Transfer from "./components/Transfer";
import NativeBalance from "../NativeBalance";
import Address from "../Address/Address";
import Blockie from "../Blockie";
import { Card } from "antd";

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "600",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",
    width: "450px",
    fontSize: "16px",
    fontWeight: "500",
  },
};

export default function Wallet() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <div style={styles.header}>
            <Blockie scale={5} avatar currentWallet style />
            <Address size="6" copyable />
            <NativeBalance />
          </div>
        }
      >
        {/* <Transfer /> */}
      </Card>
      <Card
        title="Quick Start Instructions" extra={<a href="#">More</a>} style={{ width: 300 }}
      >
        <p>Click <strong>Authenticate</strong> to connect your Metamask to see wallet balance </p>
        <p><strong>OR</strong></p>
        <p><strong>IF you don't have a wallet</strong>, you can get one by signing in with your email which automatically creates a wallet for you. Simply, click Email Login on the Main Menu every time you want to sign-in to access your wallet.</p>
        {/* <Transfer /> */}
      </Card>
    </div>
  );
}
