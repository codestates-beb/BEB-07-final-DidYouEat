import Header from '@/src/components/Header';
import NFT from '@/src/components/nft';
export default function Collection() {
  return (
    <div className="collection">
      <Header />
      <button className="collection__back">{`<<`}</button>
      <h1 className="collection__title">Restaurant Name</h1>
      <div className="collection__col2"></div>
      <div className="collection__info">
        <p>00/00/00</p>
        <p>서울시 서초구 반포대로 275</p>
        <p>0번째 방문이에요</p>
      </div>

      <button className="collection__save">이미지저장</button>
    </div>
  );
}
