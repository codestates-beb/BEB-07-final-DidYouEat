import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { AdminAccessTokenState, AdminIdState } from "../recoil/states";

export default function AdminLogin({ setLoginToggle }: { setLoginToggle: any }) {
  const [adminAccessToken, setAdminAccessToken] = useRecoilState(AdminAccessTokenState);
  const [adminId, setAdminId] = useRecoilState(AdminIdState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isWating, setIsWating] = useState(false);

  const loginEl: any = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginSubmit = () => {
    setIsWating(true);
    axios
      .post(process.env.SERVER_URL + "/auth/owner/signin", {
        id: email,
        password: password,
      })
      .then((res) => {
        const accessToken = res.data.message.accessToken;
        setIsWating(false);
        setAdminAccessToken(accessToken);
        setAdminId(email);
        router.push("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              <input ref={emailRef} onChange={handleEmailChange} type="text"></input>

              <label
                onClick={() => {
                  emailRef.current.focus();
                }}
                htmlFor="input"
                className={email === "" ? "label-placeholder" : "label-placeholder is-written"}>
                이메일을 입력해주세요.
              </label>
            </div>
          </div>
          <div className="admin-login__pw">
            <div className="input-area">
              <input ref={passwordRef} onChange={handlePasswordChange} type="password"></input>

              <label
                onClick={() => {
                  passwordRef.current.focus();
                }}
                htmlFor="input"
                className={password === "" ? "label-placeholder" : "label-placeholder is-written"}>
                비밀번호를 입력해주세요.
              </label>
            </div>
          </div>
          <div className="admin-login__signup">
            <p>
              Did You Eat 사장님 계정이 없으십니까?{" "}
              <span
                onClick={() => {
                  router.push("/admin/signup");
                }}>
                지금 만드세요 ↗
              </span>
            </p>
          </div>
          <div onClick={handleLoginSubmit} className="white-color classic-button">
            로그인
          </div>
        </div>
      </div>
    </div>
  );
}
