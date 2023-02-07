import AdminFooter from "@/src/components/AdminFooter";
import AdminHeader from "@/src/components/AdminHeader";
import AdminLayout from "@/src/components/AdminLayout";
import PostalCode from "@/src/components/PostalCode";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { AdminAccessTokenState, AdminIdState } from "@/src/recoil/states";
import { useRouter } from "next/router";

export default function CreateStore() {
  const router = useRouter();
  const storeNameRef: any = useRef();
  const storeDetailAddressRef: any = useRef();

  const [date, setDate] = useState(new Date());
  const [popup, setPopup] = useState(false);
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "https://images.reactbricks.com/src_set/9e37bdce-6ee2-44da-93e9-2ac1f97e6ca8-500/MillerLite.webp",
  });
  const [store, setStore] = useState({
    name: "",
    address: "",
    detail_address: "",
  });
  const [storeCoordinate, setStoreCoordinate] = useState({
    x: 0,
    y: 0,
  });
  const accessToken = useRecoilValue(AdminAccessTokenState);
  const adminId = useRecoilValue(AdminIdState);

  const handleStoreAddressInput = (e: any) => {
    setStore({
      ...store,
      [e.target.name]: e.target.value,
    });
  };

  const handleStoreNameInput = (e: any) => {
    setStore((prev) => {
      const next = { ...prev };
      next.name = e.target.value;
      return next;
    });
  };

  const handleStoreDetailInput = (e: any) => {
    setStore((prev) => {
      const next = { ...prev };
      next.detail_address = e.target.value;
      return next;
    });
  };

  const togglePopup = () => {
    setPopup(!popup);
  };

  const handleImgInputChange = (e: any) => {
    const newImageFile = e.target.files[0];
    const formData = new FormData();

    formData.append("newImageFile", newImageFile);

    for (const keyvalue of formData) {
      console.log(keyvalue);
    }

    if (newImageFile) {
      // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
      URL.revokeObjectURL(image.preview_URL);
      const preview_URL = URL.createObjectURL(newImageFile);
      setImage({
        image_file: newImageFile,
        preview_URL,
      });
      console.log(newImageFile);
    }
  };

  const handleCreateCollection = async () => {
    console.log(adminId, image.image_file, storeCoordinate.x, storeCoordinate.y, store.name, store.address);
    // const imageUrl = await sendFileToIPFS();

    const res = await axios.post(
      process.env.SERVER_URL + "/collections/create",
      {
        img_url: "https://gateway.pinata.cloud/ipfs/QmVssnRt3eq5zsXZ8K6jKNjTQigPssTYgx4yQbVEBvNJXX",
        location: store.address + store.detail_address,
        coordinate_x: storeCoordinate.x,
        coordinate_y: storeCoordinate.y,
        owner_id: adminId,
        shop_name: store.name,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    console.log(res);
    return res;
  };

  const sendFileToIPFS = async () => {
    if (image.image_file) {
      try {
        const formData = new FormData();
        formData.append("file", image.image_file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `${process.env.PINATA_API_KEY}`,
            pinata_secret_api_key: `${process.env.PINATA_API_SECRET}`,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        console.log(ImgHash);
        console.log("resFile:", resFile);
        return ImgHash;
      } catch (error) {
        console.log("Error sending File to IPFS: ");
        console.log(error);
      }
    }
  };

  const getCoordinateByAddress = async (address: any) => {
    const config = { headers: { Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_RESTAPI}` } }; // 헤더 설정
    const url = "https://dapi.kakao.com/v2/local/search/address.json?query=" + address; // REST API url에 data.address값 전송

    axios
      .get(url, config)
      .then(function (result) {
        console.log(result);
        if (result.data !== undefined || result.data !== null) {
          if (result.data.documents[0].x && result.data.documents[0].y) {
            // Kakao Local API로 검색한 주소 정보 및 위도, 경도값 저장

            setStoreCoordinate((prev) => {
              const next = { ...prev };
              next.x = Math.floor(result.data.documents[0].x * 1_000_000);
              next.y = Math.floor(result.data.documents[0].y * 1_000_000);

              return next;
            });

            return { x: result.data.documents[0].x, y: result.data.documents[0].y };
          }
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (accessToken === "") router.push("/admin");
    return URL.revokeObjectURL(image.preview_URL);
  }, []);

  useEffect(() => {
    if (store.address) getCoordinateByAddress(store.address);
  }, [store.address]);

  return (
    <AdminLayout>
      <div className="create-store">
        <div className="create-store__heading">
          <h2>Store NFT</h2>
        </div>
        <div className="create-store__body">
          <h1>Store NFT 생성</h1>
          <p>
            하나의 매장에 해당하는 Store NFT로 모든 Did You Eat의 서비스를 이용할 수 있습니다.
            <br />
            Store NFT를 가지고 계십니까?
            <Link href="/admin/store">
              <span> 매장 보러가기 ↘</span>
            </Link>
          </p>
        </div>

        <div className="create-store__fieldset-container">
          <fieldset className="create-store__fieldset">
            <h5 className="create-store-date">
              생성날짜 : {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일
            </h5>
          </fieldset>
          <fieldset className="create-store__fieldset">
            {/* <h5>매장이름</h5> */}
            <div className="input-area">
              <input ref={storeNameRef} onChange={handleStoreNameInput} type="text"></input>
              <label
                onClick={() => {
                  storeNameRef.current.focus();
                }}
                htmlFor="input"
                className={store.name === "" ? "label-placeholder" : "label-placeholder is-written"}>
                매장이름을 입력해주세요.
              </label>
            </div>
            <div className="failure-message hide">아이디는 네 글자 이상이어야 합니다.</div>
            <div className="success-message hide">사용할 수 있는 아이디입니다.</div>
            <div className="invalid-message hide">영문과 숫자만 사용 가능합니다.</div>
          </fieldset>

          <fieldset className="create-store__fieldset">
            {/* <h5>매장주소</h5> */}
            <div className="input-area">
              <input
                id="address-input"
                onClick={togglePopup}
                onChange={handleStoreAddressInput}
                value={store.address}
                type="text"></input>
              <label htmlFor="input" className={store.address === "" ? "label-placeholder" : "label-placeholder hide"}>
                주소 찾기
              </label>
              <span onClick={togglePopup} className="right-arrow">
                ➡️
              </span>
            </div>
            {popup && <PostalCode popup={popup} setPopup={setPopup} store={store} setStore={setStore}></PostalCode>}
            <div className="failure-message hide">아이디는 네 글자 이상이어야 합니다.</div>
            <div className="success-message hide">사용할 수 있는 아이디입니다.</div>
            <div className="invalid-message hide">영문과 숫자만 사용 가능합니다.</div>
          </fieldset>

          <fieldset className={store.address === "" ? "create-store__fieldset hide" : "create-store__fieldset"}>
            {/* <h5>매장 상세주소</h5> */}
            <div className="input-area">
              <input ref={storeDetailAddressRef} type="text" onChange={handleStoreDetailInput}></input>
              <label
                onClick={() => {
                  storeDetailAddressRef.current.focus();
                }}
                htmlFor="input"
                className={store.detail_address === "" ? "label-placeholder" : "label-placeholder is-written"}>
                매장 상세주소를 입력해주세요.
              </label>
            </div>
            <div className="failure-message hide">아이디는 네 글자 이상이어야 합니다.</div>
            <div className="success-message hide">사용할 수 있는 아이디입니다.</div>
            <div className="invalid-message hide">영문과 숫자만 사용 가능합니다.</div>
          </fieldset>

          <fieldset className="create-store__fieldset">
            <h5>NFT 이미지 입력</h5>
            <div className="create-store__img_input">
              <div className="linear-background">
                <label htmlFor="img_file">
                  <h5>NFT 이미지 업로드</h5>
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="#f7f9f9" width="45px">
                    <g>
                      <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                    </g>
                  </svg>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="post_img"
                  className="createpost__img-input"
                  onChange={handleImgInputChange}
                  onClick={(e: any) => (e.target.value = null)}
                  id="img_file"></input>
              </div>
              <Image src={image.preview_URL} alt="miler" width={250} height={250}></Image>
            </div>
            <div className="img-requirement">
              <h6>Image 요구사항</h6>
              <ul>
                <li>png, gif 파일만 지원됩니다.</li>
                <li>Recommended: measures 500x500px, round shape, size less than 200KB (Max. 4MB)</li>
              </ul>
            </div>
          </fieldset>
          <fieldset className="create-store__fieldset">
            <div onClick={handleCreateCollection} className="classic-button yellow-color  margin-auto">
              생성하기
            </div>
          </fieldset>
        </div>
      </div>
    </AdminLayout>
  );
}
