// import Image from 'next/image'
import { useMoralis } from "react-moralis";
// import styles from '../Magiclink/styles.css';
import Logo from "../Magiclink/logo.png";
import { useState } from "react";

import React from "react";

export default function SignIn() {
  const { authenticate, authError, isAuthenticating } = useMoralis();

  const [email, setEmail] = useState("");

  //Magic Authentication
  const handleCustomLogin = async () => {
    await authenticate({
      provider: "magicLink",
      email: email,
      apiKey: "pk_live_5074FD80BF3F7EB9",
      network: "kovan",
    });
  };

  return (
    <div className="card">
      <img alt="logo" className="img" src={Logo} width={300} height={200} />
      {isAuthenticating && <p className="green">Authenticating</p>}
      {authError && (
        <p className="error">{JSON.stringify(authError.message)}</p>
      )}
      <div className="buttonCard">
        <input
          type={"email"}
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button className="loginButton" onClick={handleCustomLogin}>
          Enter your Email
        </button>
      </div>
    </div>
  );
}
