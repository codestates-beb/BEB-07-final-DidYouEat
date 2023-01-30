import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
//import { v1 } from "uuid";

const { persistAtom } = recoilPersist();

export const AdminIdState = atom({
  key: `adminId`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const AdminAccessTokenState = atom({
  key: `adminAccessToken`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const ClientAddress = atom({
  key: "clientAddreaa",
  default: "",
});
