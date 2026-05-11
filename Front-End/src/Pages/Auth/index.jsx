import React, { useState } from "react";
import FirstStep from "./FirstStep";
import ForgotPassword from "./ForgotPassword";
import LoginPassword from "./LoginPassword";
import LoginOtp from "./LoginOtp";

export default function Auth() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [pageType, setPageType] = useState("first");
  return (
    <>
      {pageType === "first" ? (
        <FirstStep
          phoneNumber={phoneNumber}
          changePageType={setPageType}
          changePhone={setPhoneNumber}
        />
      ) : pageType === "forgot" ? (
        <ForgotPassword changePageType={setPageType} />
      ) : pageType === "password" ? (
        <LoginPassword
          phoneNumber={phoneNumber}
          changePageType={setPageType}
          changePhone={setPhoneNumber}
        />
      ) :pageType === "otp" ? (
        <LoginOtp
          phoneNumber={phoneNumber}
          changePageType={setPageType}
          changePhone={setPhoneNumber}
        />
      ):console.log("first")}
    </>
  );
}
