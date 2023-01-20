import Header from "@/src/components/Header";
import NFT from "@/src/components/NFT";
export default function Collection() {
  return (
    <div className="detail">
      <Header />
      <button className="detail__back">{`<<`}</button>
      <h1 className="detail__title">Restaurant Name</h1>
      <div className="detail__col2"></div>
      <div className="detail__info">
        <p>00/00/00</p>
        <p>서울시 서초구 반포대로 275</p>
        <p>0번째 방문이에요</p>
      </div>

      <button className="detail__save">이미지저장</button>
    </div>
  );
}
