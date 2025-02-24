import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react'

function page() {
  return (
    <AdminLayout>
      <div id="teachers" className="p-5">
    {/* <!-- Header with Stats --> */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6" id="el-zbujm7q4">
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20" id="el-z98f391f">
            <div className="flex justify-between items-center" id="el-lllmcy4v">
                <div id="el-uzkeeky4">
                    <p className="text-sm text-gray-500" id="el-9gh3hj2h">Total Teachers</p>
                    <h3 className="text-2xl font-semibold mt-1" id="el-4qdlsmo5">125</h3>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg" id="el-z34b9cam">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-hhhwhder">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" id="el-t0x690rc"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/20" id="el-x7z7gv2p">
            <div className="flex justify-between items-center" id="el-il1f30uh">
                <div id="el-k4rme60e">
                    <p className="text-sm text-gray-500" id="el-8qv3hj33">Departments</p>
                    <h3 className="text-2xl font-semibold mt-1" id="el-9houg42b">8</h3>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg" id="el-ztsp8hwa">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-po2pcsu2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" id="el-0q1fbn04"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/20" id="el-vvuzq2kc">
            <div className="flex justify-between items-center" id="el-3kgk67t2">
                <div id="el-hmwmrkm0">
                    <p className="text-sm text-gray-500" id="el-hurjrosc">On Leave</p>
                    <h3 className="text-2xl font-semibold mt-1" id="el-esinohtx">5</h3>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg" id="el-jk06dwxp">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-ktogx4yb">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" id="el-rbae9v3l"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/20" id="el-6qo2es4p">
            <div className="flex justify-between items-center" id="el-agl0e6nh">
                <div id="el-cjqnrp75">
                    <p className="text-sm text-gray-500" id="el-19pg8cdw">New Recruits</p>
                    <h3 className="text-2xl font-semibold mt-1" id="el-g2ctfc45">12</h3>
                </div>
                <div className="p-3 bg-green-50 rounded-lg" id="el-rklxvhqn">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-jm7fbv97">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" id="el-inhiw25a"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Teachers Management Section --> */}
    <div className="bg-white rounded-lg border border-neutral-200/20" id="el-89t4yhex">
        <div className="p-4 border-b border-neutral-200/20 flex justify-between items-center" id="el-lr5e6inp">
            <h2 className="text-xl font-semibold" id="el-ieglkcn3">Teachers Management</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors duration-200" id="el-7pr6n06w">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-kprhc148">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" id="el-3z20urfi"></path>
                </svg>
                Add New Teacher
            </button>
        </div>

        {/* <!-- Filters --> */}
        <div className="p-4 border-b border-neutral-200/20 grid grid-cols-1 md:grid-cols-4 gap-4" id="el-gs458v7k">
            <input type="text" placeholder="Search teachers..." className="px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" id="el-emo9gfwv"/>
            <select className="px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" id="el-i782olvb">
                <option value="" id="el-0vrk0ozo">All Departments</option>
                <option value="mathematics" id="el-ixzpos5v">Mathematics</option>
                <option value="science" id="el-u8srlhy1">Science</option>
                <option value="english" id="el-qqa4dppj">English</option>
            </select>
            <select className="px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" id="el-szw5ma82">
                <option value="" id="el-bpux9r6y">Experience</option>
                <option value="0-2" id="el-x22eyobq">0-2 years</option>
                <option value="3-5" id="el-9raodfex">3-5 years</option>
                <option value="5+" id="el-811k0r7r">5+ years</option>
            </select>
            <select className="px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" id="el-o7xrhys7">
                <option value="" id="el-5o7t22n9">Status</option>
                <option value="active" id="el-w02dosxn">Active</option>
                <option value="on-leave" id="el-k44l4q8t">On Leave</option>
            </select>
        </div>

        {/* <!-- Teachers Grid --> */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="el-i36k1alf">
            {/* <!-- Teacher Card --> */}
            <div className="bg-gray-50 rounded-lg p-4 border border-neutral-200/20" id="el-w410l0d4">
                <div className="flex items-center" id="el-zuw11te1">
                    <div className="w-16 h-16 rounded-full bg-gray-200" id="el-9qubb6pj"></div>
                    <div className="ml-4" id="el-flq79d4n">
                        <h3 className="text-lg font-semibold" id="el-5z7pl2zz">Dr. Sarah Wilson</h3>
                        <p className="text-sm text-gray-500" id="el-rsszt1ym">Mathematics Department</p>
                    </div>
                </div>
                <div className="mt-4 space-y-2" id="el-qzr4i3jp">
                    <div className="flex items-center text-sm" id="el-dih8iqin">
                        <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-bskc3w3x">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" id="el-r9yzkct5"></path>
                        </svg>
                        sarah.wilson@school.com
                    </div>
                    <div className="flex items-center text-sm" id="el-2uifqzln">
                        <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-rj3548fl">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" id="el-62jg1kup"></path>
                        </svg>
                        +1 234 567 890
                    </div>
                    <div className="flex items-center text-sm" id="el-fsk372uo">
                        <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-hh4n8va7">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" id="el-3bz7sp8q"></path>
                        </svg>
                        10 years experience
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center" id="el-nbb8eny5">
                    <span className="px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full" id="el-eud6o4jl">Active</span>
                    <div className="space-x-2" id="el-fv2mi115">
                        <button className="text-blue-600 hover:text-blue-800" id="el-40fcx0gr">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-y81s8uz9">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" id="el-qc44r325"></path>
                            </svg>
                        </button>
                        <button className="text-red-600 hover:text-red-800" id="el-2sj27v7s">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-cl9ujudk">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" id="el-196lp4mm"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Repeat similar cards for more teachers --> */}
        </div>

        {/* <!-- Pagination --> */}
        <div className="p-4 border-t border-neutral-200/20 flex items-center justify-between" id="el-od2o8ozh">
            <p className="text-sm text-gray-700" id="el-4ru7oohk">
                Showing <span className="font-medium" id="el-ojb0s3xc">1</span> to <span className="font-medium" id="el-jc0il7ss">9</span> of <span className="font-medium" id="el-e16updgx">125</span> teachers
            </p>
            <div className="flex space-x-2" id="el-s4ukxrj4">
                <button className="px-3 py-1 border border-neutral-200/20 rounded-md text-sm" id="el-ybibnivb">Previous</button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm" id="el-y3z0iuwf">1</button>
                <button className="px-3 py-1 border border-neutral-200/20 rounded-md text-sm" id="el-a2psue32">2</button>
                <button className="px-3 py-1 border border-neutral-200/20 rounded-md text-sm" id="el-vyxyfme8">3</button>
                <button className="px-3 py-1 border border-neutral-200/20 rounded-md text-sm" id="el-yd00f69s">Next</button>
            </div>
        </div>
    </div>
</div>
    </AdminLayout>
  )
}

export default page
