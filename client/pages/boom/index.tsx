import Link from "next/link";
import { XCircle } from "react-feather";
export default function Boom() {
  return (
    <div className="boom">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="boom__container">
        <Link href="/collection" className="boom__button">
          <XCircle color="white" />
        </Link>
        <div className="boom__nft"></div>
      </div>
    </div>
  );
}
