import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Link href="/" className="header__h1">
          DiD You Eat?
        </Link>
      </div>
      <div className="header__button">
        <button className="header__connect">Klip Connect</button>
      </div>
    </div>
  );
}
