import AdminFooter from "@/src/components/AdminFooter";
import AdminHeader from "@/src/components/AdminHeader";
import { useEffect, useState } from "react";

export default function CreateStore() {
  const now = new Date();

  return (
    <div className="create-store">
      <AdminHeader></AdminHeader>
      <div className="create-store__heading">
        <h2>Store NFT</h2>
      </div>
      <div className="create-store__body">
        <h1>Store NFT 생성</h1>
        <p>
          하나의 매장에 해당하는 Store NFT로 모든 Did You Eat의 서비스를 이용할 수 있습니다.
          <br />
          Store NFT를 가지고 계십니까? <span> 매장 보러가기 ↘</span>
        </p>
      </div>

      <div className="create-store__fieldset-container">
        <fieldset className="create-store__fieldset">
          <h5 className="create-store-date">생성날짜 : 2023년 1월 30일</h5>
        </fieldset>
        <fieldset className="create-store__fieldset">
          {/* <h5>매장이름</h5> */}
          <div className="input-area">
            <input id="username" type="text"></input>
            <label htmlFor="input" className="placeholder">
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
            <input id="username" type="text"></input>
            <label htmlFor="input" className="placeholder">
              주소 찾기
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
                id="img_file"></input>
            </div>
          </div>
          <div className="img-requirement">
            <h6>Image 요구사항</h6>
            <ul>
              <li>png, gif 파일만 지원됩니다.</li>
              <li>Recommended: measures 500x500px, round shape, size less than 200KB (Max. 4MB)</li>
            </ul>
          </div>
        </fieldset>
      </div>

      <AdminFooter></AdminFooter>
    </div>
  );
}
