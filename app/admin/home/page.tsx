import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "",
};
function page() {
  return (
    <AdminLayout>
      <div id="dashboard" className="p-5">
        {/* -- Stats Grid -- */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
          id="el-f1gsgqpm"
        >
          <div
            className="bg-white p-6 rounded-lg border border-neutral-200/20"
            id="el-nomlu55b"
          >
            <div className="flex items-center justify-between" id="el-szz90uzi">
              <div id="el-yoiq3z50">
                <p className="text-sm text-gray-500" id="el-cxv9g9fu">
                  Total Students
                </p>
                <h3 className="text-2xl font-semibold mt-1" id="el-2j9n5id7">
                  2,451
                </h3>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg" id="el-3e2i3lan">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-m6a4l7by"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    id="el-w2tkb7fs"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm" id="el-fbuzvxod">
              <span
                className="text-green-500 flex items-center"
                id="el-hdfd6z13"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-iwmqethk"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                    id="el-g7psqvo3"
                  ></path>
                </svg>
                3.2%
              </span>
              <span className="text-gray-400 ml-2" id="el-7wd911qc">
                vs last month
              </span>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-lg border border-neutral-200/20"
            id="el-vdmbpoxh"
          >
            <div className="flex items-center justify-between" id="el-knjsrd69">
              <div id="el-7v2xvtlb">
                <p className="text-sm text-gray-500" id="el-gmlcqu63">
                  Total Teachers
                </p>
                <h3 className="text-2xl font-semibold mt-1" id="el-wox32gtd">
                  125
                </h3>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg" id="el-4xb34gmr">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-mx037mr7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    id="el-prahovmj"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm" id="el-bwj9uq4k">
              <span
                className="text-green-500 flex items-center"
                id="el-8a8rbjfa"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-wnqnx2gn"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                    id="el-sbbpljd2"
                  ></path>
                </svg>
                2.1%
              </span>
              <span className="text-gray-400 ml-2" id="el-kuffnxgg">
                vs last month
              </span>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-lg border border-neutral-200/20"
            id="el-prs5cj3h"
          >
            <div className="flex items-center justify-between" id="el-jvmx031q">
              <div id="el-m2f2crew">
                <p className="text-sm text-gray-500" id="el-t7td1j56">
                  Total Classes
                </p>
                <h3 className="text-2xl font-semibold mt-1" id="el-9j36ijq8">
                  48
                </h3>
              </div>
              <div className="p-3 bg-green-50 rounded-lg" id="el-tr2pw9gt">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-f0hx98wj"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    id="el-36js6ecn"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm" id="el-gl86laqp">
              <span className="text-red-500 flex items-center" id="el-8vj2c5gq">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-2xehxz4f"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    id="el-defzoynw"
                  ></path>
                </svg>
                1.4%
              </span>
              <span className="text-gray-400 ml-2" id="el-7zz9mz7h">
                vs last month
              </span>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-lg border border-neutral-200/20"
            id="el-00xe1bg2"
          >
            <div className="flex items-center justify-between" id="el-p77elin0">
              <div id="el-5axxmgmp">
                <p className="text-sm text-gray-500" id="el-1dy0j39r">
                  Total Revenue
                </p>
                <h3 className="text-2xl font-semibold mt-1" id="el-kl8p8q96">
                  $284.5k
                </h3>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg" id="el-xz8bbbby">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-ynhm09g6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    id="el-fbif1kyg"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm" id="el-xt010alw">
              <span
                className="text-green-500 flex items-center"
                id="el-ikz6okjp"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-7uqujt9t"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                    id="el-ez1wpvwa"
                  ></path>
                </svg>
                4.7%
              </span>
              <span className="text-gray-400 ml-2" id="el-gcmwnq8v">
                vs last month
              </span>
            </div>
          </div>
        </div>

        {/* -- Main Content Grid -- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="el-29geodra">
          {/* -- Recent Activities -- */}
          <div
            className="lg:col-span-2 bg-white rounded-lg border border-neutral-200/20 p-6"
            id="el-d25padcd"
          >
            <h2 className="text-lg font-semibold mb-4" id="el-4s0m4lb5">
              Recent Activities
            </h2>
            <div className="space-y-4" id="el-iutcftrh">
              <div
                className="flex items-center p-4 bg-gray-50 rounded-lg"
                id="el-8p6xbm5w"
              >
                <div
                  className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4"
                  id="el-j249rrze"
                >
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    id="el-11spqbb7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      id="el-9xpktwfe"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1" id="el-4woixr2w">
                  <h4 className="text-sm font-medium" id="el-h5enayh2">
                    New student enrollment
                  </h4>
                  <p className="text-sm text-gray-500" id="el-8d14i1lj">
                    John Doe enrolled in Class 10-A
                  </p>
                </div>
                <span className="text-sm text-gray-400" id="el-5hkyho1r">
                  2m ago
                </span>
              </div>

              <div
                className="flex items-center p-4 bg-gray-50 rounded-lg"
                id="el-898m42yp"
              >
                <div
                  className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4"
                  id="el-wuoqyidl"
                >
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    id="el-2sn89llc"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      id="el-nc5gqxxk"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1" id="el-a3fimjue">
                  <h4 className="text-sm font-medium" id="el-n5q5qj7x">
                    Attendance marked
                  </h4>
                  <p className="text-sm text-gray-500" id="el-gb7y2iyl">
                    Class 8-B attendance completed
                  </p>
                </div>
                <span className="text-sm text-gray-400" id="el-0ihnleaf">
                  15m ago
                </span>
              </div>

              <div
                className="flex items-center p-4 bg-gray-50 rounded-lg"
                id="el-ubmmsnhc"
              >
                <div
                  className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4"
                  id="el-gy0w844v"
                >
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    id="el-fw86exkv"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      id="el-nd04uthx"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1" id="el-99odv3a3">
                  <h4 className="text-sm font-medium" id="el-9tx3nsff">
                    Fee payment received
                  </h4>
                  <p className="text-sm text-gray-500" id="el-3n6cyukm">
                    Sarah Johnson - Grade 9 fees
                  </p>
                </div>
                <span className="text-sm text-gray-400" id="el-rytqtsh0">
                  1h ago
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Upcoming Events -- */}
          <div
            className="bg-white rounded-lg border border-neutral-200/20 p-6"
            id="el-i8zl0ghg"
          >
            <h2 className="text-lg font-semibold mb-4" id="el-f0jprpjo">
              Upcoming Events
            </h2>
            <div className="space-y-4" id="el-7gacxsq7">
              <div
                className="flex items-start border-l-4 border-blue-500 pl-4"
                id="el-4sasr3la"
              >
                <div className="flex-1" id="el-dod1zs7u">
                  <h4 className="text-sm font-medium" id="el-fbbvxk76">
                    Parent-Teacher Meeting
                  </h4>
                  <p className="text-sm text-gray-500" id="el-dky2sj02">
                    Class 10 - Block A
                  </p>
                  <p className="text-xs text-gray-400 mt-1" id="el-g5v4mknd">
                    Tomorrow - 10:00 AM
                  </p>
                </div>
              </div>

              <div
                className="flex items-start border-l-4 border-green-500 pl-4"
                id="el-ykg1tmdw"
              >
                <div className="flex-1" id="el-pn7oq4wc">
                  <h4 className="text-sm font-medium" id="el-5e8vtczd">
                    Annual Sports Day
                  </h4>
                  <p className="text-sm text-gray-500" id="el-o8yqonrg">
                    School Ground
                  </p>
                  <p className="text-xs text-gray-400 mt-1" id="el-nbqhawet">
                    Dec 15 - 8:00 AM
                  </p>
                </div>
              </div>

              <div
                className="flex items-start border-l-4 border-purple-500 pl-4"
                id="el-fttem18z"
              >
                <div className="flex-1" id="el-00jcr37x">
                  <h4 className="text-sm font-medium" id="el-ih3n6rki">
                    Science Exhibition
                  </h4>
                  <p className="text-sm text-gray-500" id="el-lfmc4ceq">
                    School Auditorium
                  </p>
                  <p className="text-xs text-gray-400 mt-1" id="el-ax0qr99a">
                    Dec 18 - 9:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default page;
