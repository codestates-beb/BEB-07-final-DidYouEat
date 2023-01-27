import Link from "next/link";

export default function AdminHeader() {
  return (
    <nav className="admin-header">
      <div className="admin-header__container">
        <Link href="/admin">
          <div className="admin-header__logo">Did you Eat?</div>
        </Link>
        <div className="admin-header__li">
          <div className="admin-header__item">Log in</div>
          <div className="admin-header__item">Sign up</div>
        </div>
      </div>
    </nav>
  );
}
