import AdminFooter from "@/src/components/AdminFooter";
import AdminHeader from "@/src/components/AdminHeader";
import Link from "next/link";

export default function Admin() {
  return (
    <div className="admin">
      <AdminHeader></AdminHeader>
      <div className="admin__heading-container">
        <h1 className="admin__h1">
          Introducing the new <br /> POAP and DID information offering system.
        </h1>
        <div className="admin-button__container">
          <Link href="/admin/store">
            <div className="admin__button">Connect With Kakao wallet</div>
          </Link>
        </div>
      </div>
      <div className="admin__contact">
        <div className="admin__contact__content">
          도움이 더 필요하신가요? &nbsp;&nbsp;디쥬잇팀에게 직접 문의하고 필요한 기능을 제공받으세요.
        </div>
      </div>
      <AdminFooter></AdminFooter>
    </div>
  );
}
