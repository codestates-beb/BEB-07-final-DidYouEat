export default function KlipButton() {
  function handleConnect() {
    console.log("connect");
  }
  return (
    <button className="header__connect" onClick={handleConnect}>
      Klip Connect
    </button>
  );
}
