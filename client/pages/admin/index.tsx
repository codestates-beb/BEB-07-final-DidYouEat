import AdminFooter from "@/src/components/AdminFooter";
import AdminHeader from "@/src/components/AdminHeader";
import AdminLayout from "@/src/components/AdminLayout";
import AdminLogin from "@/src/components/AdminLogin";
import { AdminIdState } from "@/src/recoil/states";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function Admin() {
  const router = useRouter();
  const [adminId, setAdminId] = useRecoilState(AdminIdState);
  const [loginToggle, setLoginToggle] = useState(false);

  const handleStartDYE = () => {
    if (adminId === "") setLoginToggle(true);
    else router.push("/admin/store");
  };

  return (
    <AdminLayout>
      {loginToggle && <AdminLogin setLoginToggle={setLoginToggle} />}
      <div className="admin">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="admin__heading-container">
          <h1 className="admin__h1">
            Introducing the new <br /> POAP and DID information offering system.
          </h1>
          <div className="admin-button__container">
            <div onClick={handleStartDYE} className="admin__button">
              Start using "Did You Eat" system
            </div>
          </div>
        </div>
        <div className="admin__contact">
          <div className="admin__contact__content">
            도움이 더 필요하신가요? &nbsp;&nbsp;디쥬잇팀에게 직접 문의하고 필요한 기능을 제공받으세요.
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
