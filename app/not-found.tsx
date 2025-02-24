import AdminLayout from "@/components/layouts/AdminLayout";
import React from "react";

function notFound() {
  return (
    <main>
      <div className="w-full h-[100vh] overflow-hidden fullcenter">
        <img src="/svgs/404.svg" alt="" />
        <h6>Powered By</h6>
        <h1 className="text-2xl font-bold text-blue-700">Ziqx Zchool</h1>
      </div>
    </main>
  );
}

export default notFound;
