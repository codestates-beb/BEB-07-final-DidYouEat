import AdminCollection from "@/src/components/AdminCollection";

import AdminLayout from "@/src/components/AdminLayout";
import { AdminAccessTokenState } from "@/src/recoil/states";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export default function Store() {
  const accessToken = useRecoilValue(AdminAccessTokenState);
  const router = useRouter();

  useEffect(() => {
    if (accessToken === "") router.push("/admin");
  }, []);

  return (
    <AdminLayout>
      <div className="admin-store">
        <div className="admin-store__heading">
          <h2>My Store</h2>
        </div>
        <h2 className="admin-store__title">나의 매장 목록</h2>
        <div>
          <div className="admin-store__collection-layout">
            <Link href="/admin/store/1">
              <AdminCollection></AdminCollection>
            </Link>
            <Link href="/admin/store/1">
              <AdminCollection></AdminCollection>
            </Link>
            <Link href="/admin/store/1">
              <AdminCollection></AdminCollection>
            </Link>
            <Link href="/admin/store/1">
              <AdminCollection></AdminCollection>
            </Link>
            <Link href="/admin/store/1">
              <AdminCollection></AdminCollection>
            </Link>
            <Link href="/admin/store/1">
              <AdminCollection></AdminCollection>
            </Link>
            <Link href="/admin/store/1">
              <AdminCollection></AdminCollection>
            </Link>
            <Link href="/admin/store/create">
              <div className="admin-store__create-collection">
                <span>새로운 매장 컬렉션을 생성합니다.</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
