import Header from "@/src/components/Header";
import NFT from "@/src/components/nft";
import { useEffect } from "react";
export default function Collection() {
  function handleScan() {
    // useEffect(() => {
    //   navigator.camera.getPicture(onSuccess, onFail, {
    //     quality: 50,
    //     destinationType: Camera.destinationType.FILE_URI,
    //   });
    // }, []);

    // const onSuccess = (imageData) => {
    //   console.log(imageData);
    // };
    // const onFail = (message) => {
    //   console.log(message);
    // };
    console.log("open camera");
    //deeplink to camera
  }
  return (
    <div className="collection">
      <Header />
      <div className="landing__main">
        <h1 className="collection__h1">My collection</h1>
        <div className="collection__row">
          <NFT />
        </div>
      </div>
      <button className="collection__scanQR" onClick={handleScan}>
        Scan QR code
      </button>
    </div>
  );
}
