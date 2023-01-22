import Header from "@/src/components/Header";
import NFT from "@/src/components/NFT";
export default function Collection() {
  return (
    <div className="collection">
      <Header />
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

      <button className="collection__scanQR">Scan QR code</button>
    </div>
  );
}
