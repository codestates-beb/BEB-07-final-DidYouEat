//import { prepare, request, getResult } from "klip-sdk";

export default function KlipButton() {
  async function handleConnect() {
    /* const bappName = "DiD You Eat?";
    const successLink = "/";
    const failLink = "/failed";
    const res = await prepare.auth({ bappName, successLink, failLink });
    if (res.err) {
      console.log(res.err);
    }
    const requestKey = res.request_key;

    request(requestKey, () => alert("모바일 환경에서 실행해주세요"));
    console.log(getResult(requestKey)); */
    console.log("왜안돼");
  }

  return (
    <button className="header__connect" onClick={handleConnect}>
      Klip Connect
    </button>
  );
}
