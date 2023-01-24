import AdminCollection from "@/src/components/AdminCollection";
import AdminFooter from "@/src/components/AdminFooter";
import AdminHeader from "@/src/components/AdminHeader";
import Link from "next/link";

export default function Store() {
  return (
    <div className="admin-store">
      <AdminHeader></AdminHeader>
      <h2 className="admin-store__title">나의 매장 목록보기</h2>
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
      <AdminFooter></AdminFooter>
    </div>
  );
}
