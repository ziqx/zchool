import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { ZiqxAuth } from "ziqx";

async function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token")?.value ?? null;
  const auth = new ZiqxAuth();
  const isTokenValid = token && (await auth.strictValidate(token));
  if (!isTokenValid) return redirect("/admin-auth");

  return <>{children}</>;
}

export default AdminRootLayout;
