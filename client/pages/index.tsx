import Image from 'next/image';
import Header from "@/src/components/Header"
export default function Home() {
  return (
    <>
      <div className="landing">
        <Header/>
        <div className="landing__scroll1">
          <h1 className="landing__h1__right">A New Way to Capture My Favorite Restaurants</h1> 
          <Image
            className="landing__illustration1"
            src="/../public/images/Landing1.png"
            alt="landing illustration"
            width={400}
            height={400}
          />
        </div>
        <div className="landing__scroll2">
          <Image
            className="landing__illustration3"
            src="/../public/images/Landing3.png"
            alt="landing illustration"
            width={400}
            height={400}
          />
          <Image
            className="landing__illustration2"
            src="/../public/images/Landing2.png"
            alt="landing illustration"
            width={400}
            height={400}
          />
          <h1 className="landing__h1-center">Scan and Receive Super Cool NFTs</h1>
        </div>
        <div className="landing__scroll3">
          <h1 className="landing__h1-center">It is THIS easy</h1>
          <div className="landing__scroll3-1">
            <h2 className="landing__h2">1. Open Camera</h2>
            <h2 className="landing__h2">2. Scan QR code</h2>
            <h2 className="landing__h2">3. Get NFTs!</h2>
          </div>
        </div>
        <div className="landing__scroll4">
          <h1 className="landing__h1-center">Collect NFTs like these</h1>
        </div>
        <div className="landing__scroll5">
          <button className="landing__button">Get Started</button>
          <a className="landing__showOwner">Are You a Shop Owner?</a>
        </div>
      </div>
      </>
  );
}
