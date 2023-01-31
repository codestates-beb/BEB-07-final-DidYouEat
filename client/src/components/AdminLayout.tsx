import { ReactNode } from "react";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";

export default function AdminLayout({ children }: { children: any }) {
  return (
    <div className="layout">
      <AdminHeader></AdminHeader>
      <div>{children}</div>
      <AdminFooter></AdminFooter>
    </div>
  );
}
