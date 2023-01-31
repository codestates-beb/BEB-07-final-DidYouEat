import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function PostalCode({
  popup,
  setPopup,
  store,
  setStore,
}: {
  popup: any;
  setPopup: any;
  store: any;
  setStore: any;
}) {
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    console.log(data);
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setStore({
      ...store,
      address: fullAddress,
    });
    console.log("data", data);
    console.log("fa", fullAddress);
    console.log(data.zonecode);
    console.log("store", store);
    setPopup(false);
  };

  const togglePopup = () => {
    setPopup(false);
  };

  return (
    <div onClick={togglePopup} className="postmodal">
      <div>
        <DaumPostcode autoClose onComplete={handleComplete} />
      </div>
    </div>
  );
}
