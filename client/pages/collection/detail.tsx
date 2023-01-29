import Header from "@/src/components/Header";
import Link from "next/link";
import Image from "next/image";
export default function Collection(props: any) {
  return (
    <div className="detail">
      <Header />
      <Link className="detail__back" href="/collection">{`<<`}</Link>
      <h1 className="detail__title">Restaurant Name</h1>
      <div className="detail__col2">
        <Image src={props.imgURL} alt="POAP" />
      </div>
      <div className="detail__info">
        <p>{props.date} 00/00/00</p>
        <p>{props.address} 서울시 서초구 반포대로 123</p>
        <p>{props.numTimes}번째 방문이에요</p>
      </div>

      <a className="detail__save" href="image link" download>
        <button className="detail__save">이미지저장</button>
      </a>
    </div>
  );
}
