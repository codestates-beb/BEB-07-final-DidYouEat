import Header from "@/src/components/Header";
import NFT from "@/src/components/nft";
import { useRecoilValue } from "recoil";
import { ClientAddress } from "@/src/recoil/states";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSetRecoilState } from "recoil";

export default function Collection() {
  const [showModal, setShowModal] = useState(false);
  const clientAddress = useRecoilValue(ClientAddress);
  const [currentNickname, setCurrentNickname] = useState("");
  const setClientAddress = useSetRecoilState(ClientAddress);

  useEffect(() => {
    const localClientAddress = localStorage.getItem("clientAddress");
    if (localClientAddress !== "") {
      setClientAddress(localClientAddress);
    }
  }, []);

  useEffect(() => {
    console.log("clientAddress:" + clientAddress);
  });

  const getUserData = async function () {
    await axios.get(process.env.SERVER_URL + `/users/${clientAddress}`);
    console.log(getUserData);
  };

  function handleNicknameChange(e: any) {
    setCurrentNickname(e.target.value);
  }

  function handleSubmit() {
    console.log(currentNickname);
    setShowModal(false);
    axios.patch(process.env.SERVER_URL + `/users/changenick`, {
      wallet_address: clientAddress,
      nickname: currentNickname,
    });
  }

  function handleButtonClick() {
    setShowModal(true);
  }

  return (
    <div className="collection">
      <Header />
      <div className="landing__main">
        <h1 className="collection__h1">My Collection</h1>
        <h3 className="collection__h3">@{currentNickname}</h3>
        <div className="collection__nickname">
          <button className="collection__nicknameChange" onClick={handleButtonClick}>
            닉네임 변경
          </button>

          <Modal isOpen={showModal}>
            <div className="collection__modal">
              <p className="collection__p">닉네임을 변경하세요</p>
              <input
                className="collection__nicknameForm"
                value={currentNickname}
                type="text"
                onChange={handleNicknameChange}
                placeholder="닉네임 입력"></input>
              <button className="collection__nickButton" onClick={handleSubmit}>
                수정하기
              </button>
            </div>
          </Modal>
        </div>
        <div className="collection__row">
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
        </div>
      </div>
    </div>
  );
}
