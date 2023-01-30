import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { AdminIdState } from "../recoil/states";

export default function AdminHeader({ setLoginToggle }: { setLoginToggle: any }) {
  const router = useRouter();
  const [adminId, setAdminId] = useRecoilState(AdminIdState);

  const moveToAdmin = () => {
    router.push("/admin");
  };
  return (
    <nav className="admin-header">
      <div className="admin-header__container">
        <Link href="/admin">
          <div className="admin-header__logo">Did you Eat?</div>
        </Link>
        <div className="admin-header__li">
          {adminId === "" && (
            <div
              onClick={() => {
                setAdminId("jinwoo");
                setLoginToggle(true);
              }}
              className="admin-header__item">
              Log in
            </div>
          )}
          <div
            onClick={() => {
              router.push("/admin/signup");
            }}
            className="admin-header__item">
            Sign up
          </div>
          {adminId !== "" && (
            <div
              onClick={() => {
                setAdminId("");
                moveToAdmin();
              }}
              className="admin-header__item">
              {adminId} Log out
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
