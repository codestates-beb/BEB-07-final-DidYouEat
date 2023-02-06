import Image from "next/image";
import KlipButton from "@/src/components/KlipButton";
export default function Error() {
  return (
    <div className="error">
      <div className="error__container">
        <div className="error__message">
          <Image src="/images/error.png" width={400} height={400} alt="error" />
          <h2 className="error__h2">접근 권한이 없습니다</h2>
          <p className="error__p">클립 로그인을 해주세요</p>
        </div>
        <KlipButton />
      </div>
    </div>
  );
}
