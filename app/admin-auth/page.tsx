import React from "react";
import Login from "./Login";
import ZLoader from "@/components/common/Loader";
import { MdError } from "react-icons/md";

function LoginIndex() {
  const appId = process.env.ZIQX_APP_ID;
  const isDev = process.env.NODE_ENV === "development";
  if (!appId) {
    return (
      <main className="h-screen fullcenter gap-4">
        <MdError className="text-5xl text-red-600" />
        <h2 className="py-2">App ID is not defined in the environment</h2>
        <div className="bg-red-50 p-6 rounded-lg text-red-600">
          If you are a developer, please add the <b>ZIQX_APP_ID</b> to your
          environment
        </div>
      </main>
    );
  }
  return (
    <main className="h-screen fullcenter">
      <ZLoader height={8} />
      <h3 className="my-5">Authenticating...</h3>
      <div className="absolute bottom-10 fullcenter">
        <h6 className="text-xs text-gray-400">Powered By</h6>
        <h1 className="font-bold text-gray-500">Ziqx Auth</h1>
      </div>
      <Login appId={appId} isDev={isDev} />
    </main>
  );
}

export default LoginIndex;
