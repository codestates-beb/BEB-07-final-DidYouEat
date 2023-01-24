import Image from "next/image";
import Header from "@/src/components/Header";
import Link from "next/link";
import NFT from "@/src/components/nft";
export default function Home() {
  return (
    <>
      <div className="landing">
        <Header />
        <div className="landing__main">
          <div className="landing__scroll1">
            <h1 className="landing__h1__right">A New Way to Capture My Favorite Restaurants</h1>

            <Image
              className="landing__illustration1"
              src="/images/Landing1.png"
              alt="landing illustration"
              width={400}
              height={400}
            />
          </div>
          <h1 className="landing__h1-left">Scan and Receive Super Cool NFTs</h1>
          <div className="landing__scroll2">
            <Image
              className="landing__illustration3"
              src="/images/Landing3.png"
              alt="landing illustration"
              width={400}
              height={400}
            />

            <Image
              className="landing__illustration2"
              src="/images/Landing2.png"
              alt="landing illustration"
              width={400}
              height={400}
            />
          </div>
          <div className="landing__scroll3">
            <h1 className="landing__h1-center">It is THIS easy</h1>
            <div className="landing__scroll3-1">
              <h2 className="landing__h2-1">1. Open Camera</h2>
              <h2 className="landing__h2-2">2. Scan QR code</h2>
              <h2 className="landing__h2-3">3. Get NFTs!</h2>
              <div className="landing__emoji1">
                <Image src="/images/emoji1.png" alt="camera" width={30} height={30}></Image>
              </div>
              <div className="landing__emoji2">
                <Image
                  className="landing__emoji2"
                  src="/images/emoji2.png"
                  alt="QR code"
                  width={30}
                  height={30}></Image>
              </div>
              <div className="landing__emoji3">
                <Image className="landing__emoji3" src="/images/emoji3.png" alt="NFT" width={30} height={30}></Image>
              </div>
            </div>
          </div>
          <div className="landing__scroll4">
            <h1 className="landing__h1-center">Collect NFTs like these</h1>
            <div className="landing__nft">
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
          <div className="landing__scroll5">
            <button className="landing__button">Get Started</button>
            <Link href="/admin" className="landing__shopOwner">
              사장님이신가요?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}