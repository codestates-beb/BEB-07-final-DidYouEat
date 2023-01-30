import Header from "@/src/components/Header";
import NFT from "@/src/components/nft";
import { useRecoilValue } from "recoil";
import { ClientAddress } from "@/src/recoil/states";
import axios from "axios";

export default function Collection() {
  const clientAddress = useRecoilValue(ClientAddress);

  const data = axios.get(
    `https://port-0-didyoueat-testserver-3vw25lcimking.gksl2.cloudtype.app/dev/users/:${clientAddress}/tokens`,
  );
  function handleScan() {
    console.log("open camera");
  }
  return (
    <div className="collection">
      <Header />
      <div className="landing__main">
        <h1 className="collection__h1">My collection</h1>
        <div className="collection__row"></div>
      </div>
      <button className="collection__scanQR" onClick={handleScan}>
        Scan QR code
      </button>
    </div>
  );
}
