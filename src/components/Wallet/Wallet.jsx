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
      {/* <Card
        style={styles.card}
        title={
          <div style={styles.header}>
            <Row gutter={16}>
              <Col span={12}>
                <Statistic title="Active Users" value={112893} />
              </Col>
              <Col span={12}>
                <Statistic
                  title="Account Balance (CNY)"
                  value={112893}
                  precision={2}
                />
                <Button style={{ marginTop: 16 }} type="primary">
                  Recharge
                </Button>
              </Col>
            </Row>
          </div>
        }
      >
        {/* <Transfer /> */}
      {/* </Card> */}
    </div>
  );
}
