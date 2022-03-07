// import React, { useState, useEffect } from "react";
// import { useMoralis } from "react-moralis";

// function Ramper() {
//   const [ramper, setRamper] = useState();
//   const { Moralis } = useMoralis();
//   useEffect(() => {
//     if (!Moralis?.["Plugins"]?.["fiat"]) return null;
//     async function initPlugin() {
//       Moralis.Plugins.fiat
//         .buy({}, { disableTriggers: true })
//         .then((data) => setRamper(data.data));
//     }
//     initPlugin();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [Moralis.Plugins]);

//   return (
//     <iframe
//       src={ramper}
//       title="ramper"
//       frameBorder="no"
//       allow="accelerometer; autoplay; camera; gyroscope; payment;"
//       style={{
//         width: "420px",
//         height: "625px",
//         boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
//         border: "1px solid #e7eaf3",
//         borderRadius: "1rem",
//         backgroundColor: "white",
//       }}
//     />
//   );
// }

export default Ramper;

import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';
/*
 *  Quick Integration
 */
function Ramper() {
  new RampInstantSDK({
    hostAppName: 'Ramp Demo',
    hostLogoUrl: 'https://i.ibb.co/fFd9p97/redouble-logo-dotted-png-1000x1000.png',
    variant: 'auto',
  }).show();
  // new RampInstantSDK({
  // hostAppName: 'Ramp Demo',
  // hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png',
  // swapAmount: '10000000000000000',
  // swapAsset: 'ETH',
  // userAddress: '0xe2E0256d6785d49eC7BadCD1D44aDBD3F6B0Ab58',
  // url: 'https://ri-widget-staging.firebaseapp.com/', // only specify the url if you want to use testnet widget versions,
  // use variant: 'auto' for automatic mobile / desktop handling,
  // 'hosted-auto' for automatic mobile / desktop handling in new window,
  // 'mobile' to force mobile version
  // 'desktop' to force desktop version (default)
  // variant: 'auto', 
// })
  // .on('*', console.log)
  // .show();
}

