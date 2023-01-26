import Header from "@/src/components/Header";
import NFT from "@/src/components/nft";
export default function Collection() {
  function handleScan() {
    console.log("open camera");
  }
  return (
    <div className="collection">
      <Header />
      <div className="landing__main">
        <h1 className="collection__h1">My collection</h1>
        <div className="collection__row">
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
        </div>
      </div>
      <button className="collection__scanQR" onClick={handleScan}>
        Scan QR code
      </button>
    </div>
  );
}
