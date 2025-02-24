"use client";
import React, { useEffect } from "react";
import { ZiqxAuth } from "ziqx";

function Login({ appId, isDev }: { appId: string; isDev: boolean }) {
  const auth = new ZiqxAuth();
  useEffect(() => {
    setTimeout(() => {
      auth.login(appId, isDev);
    }, 2000);
  }, []);
  return <></>;
}

export default Login;
