import { atom } from "recoil";
import { v1 } from "uuid";
// import { recoilPersist } from "recoil-persist";

// const sessionStorage = typeof window !== "undefined" ? window.sessionStorage : undefined;

// const { persistAtom } = recoilPersist({
//   key: "recoil-persist",
//   storage: sessionStorage,
// });

export const AdminIdState = atom({
  key: `adminId/${v1()}`,
  default: "",
  // effects_UNSTABLE: [persistAtom],
});

export const AdminAccessTokenState = atom({
  key: `adminAccessToken/${v1()}`,
  default: "",
  // effects_UNSTABLE: [persistAtom],
});

export const ClientAddress = atom({
  key: "clientAddress",
  default: "",
});

export const RequestKey = atom({
  key: "requestKey",
  default: "",
});
