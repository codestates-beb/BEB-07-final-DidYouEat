import Link from "next/link";
import { useRef } from "react";

export default function AdminLogin({ setLoginToggle }) {
  const loginEl = useRef();

  return (
    <div
      ref={loginEl}
      onClick={(e) => {
        if (e.target === loginEl.current) setLoginToggle(false);
      }}
      className="admin-login">
      <div className="admin-login__container">
        <div className="admin-login__header">
          <span>Log in</span>
          <span
            className="login-close-button"
            onClick={() => {
              setLoginToggle(false);
            }}>
            X
          </span>
        </div>
        <div className="admin-login__body">
          <div className="admin-login__id">
            <div className="input-area">
              <input type="text"></input>
              {/* ref={storeNameRef} onChange={handleStoreNameInput} */}
              <label
                //   onClick={() => {
                //     storeNameRef.current.focus();
                //   }}
                htmlFor="input"
                className="label-placeholder">
                사용하실 아이디를 입력해주세요.
              </label>
            </div>
          </div>
          <div className="admin-login__pw">
            <div className="input-area">
              <input type="text"></input>
              {/* ref={storeNameRef} onChange={handleStoreNameInput} */}
              <label
                //   onClick={() => {
                //     storeNameRef.current.focus();
                //   }}
                htmlFor="input"
                className="label-placeholder">
                사용하실 비밀번호를 입력해주세요.
              </label>
            </div>
          </div>
          <div className="admin-login__signup">
            <p>
              Did You Eat 관리자 계정이 없으십니까? <span>지금 만드세요 ↗</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
