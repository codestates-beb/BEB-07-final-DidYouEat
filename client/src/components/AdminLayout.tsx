import { ReactNode, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { AdminAccessTokenState, AdminIdState } from "../recoil/states";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";

export default function AdminLayout({ children }: { children: any }) {
  const setAdminAccessToken = useSetRecoilState(AdminAccessTokenState);
  const setAdminId = useSetRecoilState(AdminIdState);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken !== "") {
      setAdminAccessToken(JSON.parse(localStorage.getItem("accessToken")));
      setAdminId(JSON.parse(localStorage.getItem("adminId")));
    }
  }, []);
  return (
    <div className="layout">
      <AdminHeader></AdminHeader>
      <div>{children}</div>
      <AdminFooter></AdminFooter>
    </div>
  );
}
