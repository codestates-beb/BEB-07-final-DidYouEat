import Link from "next/link";
import KlipButton from "./KlipButton";
//import { prepare, request, getResult, getCardList } from "klip-sdk";

export default function Header() {
  return (
    <nav className="header">
      <div className="header__logo">
        <Link href="/" className="header__h1">
          DiD You Eat?
        </Link>
      </div>
      <div className="header__button">
        <KlipButton />
      </div>
    </nav>
  );
}
