import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { AdminAccessTokenState, AdminIdState } from "../recoil/states";
import AdminLogin from "./AdminLogin";

export default function AdminHeader() {
  const [adminId, setAdminId] = useRecoilState(AdminIdState);
  const [adminAccessToken, setAdminAccessToken] = useRecoilState(AdminAccessTokenState);

  const [loginToggle, setLoginToggle] = useState(false);

  const moveToAdmin = () => {
    Router.push("/admin");
  };
  return (
    <>
      <nav className="admin-header">
        <div className="admin-header__container">
          <Link href="/admin">
            <div className="admin-header__logo">Did you Eat?</div>
          </Link>
          <div className="admin-header__li">
            {adminId === "" && (
              <div
                onClick={() => {
                  setLoginToggle(true);
                }}
                className="admin-header__item">
                Log in
              </div>
            )}
            {adminId === "" && (
              <div
                onClick={() => {
                  Router.push("/admin/signup");
                }}
                className="admin-header__item">
                Sign up
              </div>
            )}
            {adminId !== "" && (
              <div
                onClick={() => {
                  setAdminAccessToken("");
                  setAdminId("");
                  Router.push("/admin");
                }}
                className="admin-header__item">
                {adminId} Log out
              </div>
            )}
          </div>
        </div>
      </nav>
      {loginToggle && <AdminLogin setLoginToggle={setLoginToggle}></AdminLogin>}
    </>
  );
}
