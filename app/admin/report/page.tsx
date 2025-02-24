import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react'

function page() {
  return (
    <AdminLayout>
      <section id="reports" className="page-section bg-neutral-900 min-h-screen p-4 lg:p-8">
        <div className="max-w-7xl mx-auto" id="el-ntfvnk8h">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6" id="el-8c1pzozi">
                <h2 className="text-2xl font-bold text-white mb-4 lg:mb-0" id="el-enwy2b77">Academic Reports</h2>
                <div className="flex gap-4" id="el-r8wcbkx0">
                    <select className="bg-neutral-800 text-white px-4 py-2 rounded-lg" id="el-7gfub43d">
                        <option id="el-kmzfiqyj">2023-2024</option>
                        <option id="el-ejs1rubo">2022-2023</option>
                    </select>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" id="el-wu7x3u3n">
                        Generate Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" id="el-q6j9kkxx">
                <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30" id="el-3z00hmwh">
                    <div className="flex items-center gap-4 mb-4" id="el-0ri4j3d4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center" id="el-v9lww11z">
                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-k3h8zw7z">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" id="el-h7zga6ht"></path>
                            </svg>
                        </div>
                        <div id="el-firf2txe">
                            <p className="text-neutral-400" id="el-ep7kuxu0">Total Students</p>
                            <p className="text-2xl font-bold text-white" id="el-x0if9kjf">1,250</p>
                        </div>
                    </div>
                    <div className="text-sm text-emerald-500" id="el-zyh8h3c3">↑ 12% increase</div>
                </div>

                <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30" id="el-rzjsq8hq">
                    <div className="flex items-center gap-4 mb-4" id="el-jnt4rjgb">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center" id="el-p3hk93ll">
                            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-pbztssm6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" id="el-9yiwx0mu"></path>
                            </svg>
                        </div>
                        <div id="el-q59scbvb">
                            <p className="text-neutral-400" id="el-7kbk0n76">Classes</p>
                            <p className="text-2xl font-bold text-white" id="el-je6jygdn">45</p>
                        </div>
                    </div>
                    <div className="text-sm text-emerald-500" id="el-xj6qn6un">↑ 5% increase</div>
                </div>

                <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30" id="el-b2fq8ld2">
                    <div className="flex items-center gap-4 mb-4" id="el-nmgxk8qx">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center" id="el-bxw9xufp">
                            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-4re1hnj6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" id="el-oley7i3h"></path>
                            </svg>
                        </div>
                        <div id="el-qo5ex2jk">
                            <p className="text-neutral-400" id="el-xcy321no">Pass Rate</p>
                            <p className="text-2xl font-bold text-white" id="el-dv3xln8i">92%</p>
                        </div>
                    </div>
                    <div className="text-sm text-emerald-500" id="el-r9rfbw1n">↑ 3% increase</div>
                </div>

                <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30" id="el-8lk3ew6m">
                    <div className="flex items-center gap-4 mb-4" id="el-dys4958e">
                        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center" id="el-yx41hihb">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-zogj7l8s">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" id="el-t1hv6uxu"></path>
                            </svg>
                        </div>
                        <div id="el-p0tb1pts">
                            <p className="text-neutral-400" id="el-p5kfnk9y">Attendance</p>
                            <p className="text-2xl font-bold text-white" id="el-4a5ryoxx">95%</p>
                        </div>
                    </div>
                    <div className="text-sm text-yellow-500" id="el-b8bgzc7s">↔ No change</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8" id="el-yb0ikyqs">
                <div className="bg-neutral-800/50 rounded-xl border border-neutral-700/30 p-6" id="el-tfmeyrxo">
                    <h3 className="text-lg font-semibold text-white mb-6" id="el-z5m5cuqb">Latest Reports</h3>
                    <div className="space-y-4" id="el-hs3yqgh4">
                        <div className="flex items-center justify-between p-4 bg-neutral-700/30 rounded-lg" id="el-i6fk09gi">
                            <div className="flex items-center gap-4" id="el-oc9q4ska">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center" id="el-zrzfg3lu">
                                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-49yo41n6">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" id="el-krq8v7vg"></path>
                                    </svg>
                                </div>
                                <div id="el-rfhvpor4">
                                    <p className="text-white font-medium" id="el-02kt8bmc">End of Term Report</p>
                                    <p className="text-sm text-neutral-400" id="el-znuqw78f">Generated on Feb 15, 2024</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" id="el-f9yl7gi2">Download</button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-neutral-700/30 rounded-lg" id="el-z1z65dcw">
                            <div className="flex items-center gap-4" id="el-njbqllvy">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center" id="el-orm12w9q">
                                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-4xlm1lh7">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" id="el-nnvuvcga"></path>
                                    </svg>
                                </div>
                                <div id="el-e8owsvy6">
                                    <p className="text-white font-medium" id="el-52bju3k3">Performance Analysis</p>
                                    <p className="text-sm text-neutral-400" id="el-93u3as5a">Generated on Feb 10, 2024</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" id="el-07s8gh5b">Download</button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-neutral-700/30 rounded-lg" id="el-1pcgqcmm">
                            <div className="flex items-center gap-4" id="el-q3nb9091">
                                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center" id="el-ea8jfr9c">
                                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-lkkxlsn9">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" id="el-g4hrmv4k"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" id="el-685o7oji"></path>
                                    </svg>
                                </div>
                                <div id="el-gujbf9d9">
                                    <p className="text-white font-medium" id="el-e09kjkeo">Attendance Report</p>
                                    <p className="text-sm text-neutral-400" id="el-97flxke6">Generated on Feb 5, 2024</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" id="el-g6l31npq">Download</button>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-800/50 rounded-xl border border-neutral-700/30 p-6" id="el-sk5r32h3">
                    <h3 className="text-lg font-semibold text-white mb-6" id="el-oulq2nzx">Report Generation</h3>
                    <form className="space-y-6" id="el-soxxtpj2">
                        <div id="el-d8j56qgf">
                            <label className="block text-neutral-400 mb-2" id="el-r9rnxztf">Report Type</label>
                            <select className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 text-white" id="el-y3tv8ljf">
                                <option id="el-beisjr08">Academic Performance</option>
                                <option id="el-da6jdbje">Attendance Report</option>
                                <option id="el-ty6yli94">Behavior Report</option>
                                <option id="el-x71owwtv">Financial Report</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="el-t6723etw">
                            <div id="el-bgt7phpk">
                                <label className="block text-neutral-400 mb-2" id="el-jaeau72s">Start Date</label>
                                <input type="date" className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 text-white" id="el-xrehtj6b"/>
                            </div>
                            <div id="el-8j3xrja8">
                                <label className="block text-neutral-400 mb-2" id="el-ogw6pdoo">End Date</label>
                                <input type="date" className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 text-white" id="el-9pjbp2g3"/>
                            </div>
                        </div>

                        <div id="el-bthgw5gj">
                            <label className="block text-neutral-400 mb-2" id="el-eqjjekb4">Include Sections</label>
                            <div className="space-y-2" id="el-8r5rvpme">
                                <label className="flex items-center gap-2" id="el-vbkawcp2">
                                    <input type="checkbox" className="form-checkbox text-blue-600 rounded" id="el-pqge3eu7"/>
                                    <span className="text-white" id="el-wbqdkjrm">Grades Overview</span>
                                </label>
                                <label className="flex items-center gap-2" id="el-m7rleimf">
                                    <input type="checkbox" className="form-checkbox text-blue-600 rounded" id="el-vi51bn2w"/>
                                    <span className="text-white" id="el-4hqpwe4e">Attendance Data</span>
                                </label>
                                <label className="flex items-center gap-2" id="el-6eve8irh">
                                    <input type="checkbox" className="form-checkbox text-blue-600 rounded" id="el-33se8edc"/>
                                    <span className="text-white" id="el-w7ccf25u">Teacher Comments</span>
                                </label>
                                <label className="flex items-center gap-2" id="el-as8o939r">
                                    <input type="checkbox" className="form-checkbox text-blue-600 rounded" id="el-pi7o783w"/>
                                    <span className="text-white" id="el-11m4s50b">Performance Charts</span>
                                </label>
                            </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors" id="el-6ltpyiwk">
                            Generate Report
                        </button>
                    </form>
                </div>
            </div>

            <div className="bg-neutral-800/50 rounded-xl border border-neutral-700/30 p-6" id="el-8ajot5cr">
                <h3 className="text-lg font-semibold text-white mb-6" id="el-5os3s45d">Report History</h3>
                <div className="overflow-x-auto" id="el-a10ps30j">
                    <table className="w-full" id="el-ih1y42qb">
                        <thead id="el-cdnmclrp">
                            <tr className="text-left border-b border-neutral-700/30" id="el-327f93ui">
                                <th className="pb-3 text-neutral-400 font-medium" id="el-cfbbvav0">Report Name</th>
                                <th className="pb-3 text-neutral-400 font-medium" id="el-477hvyyl">Generated By</th>
                                <th className="pb-3 text-neutral-400 font-medium" id="el-yvpjnk7p">Date</th>
                                <th className="pb-3 text-neutral-400 font-medium" id="el-fya6ymwf">Status</th>
                                <th className="pb-3 text-neutral-400 font-medium" id="el-n0258cck">Actions</th>
                            </tr>
                        </thead>
                        <tbody id="el-uv0d033s">
                            <tr className="border-b border-neutral-700/30" id="el-bo9uk5w7">
                                <td className="py-4 text-white" id="el-8e9erisu">Q1 Performance Report</td>
                                <td className="py-4 text-neutral-400" id="el-82kseqfd">John Smith</td>
                                <td className="py-4 text-neutral-400" id="el-5edvyuds">Feb 15, 2024</td>
                                <td className="py-4" id="el-p2nyscmp"><span className="px-2 py-1 bg-emerald-500/20 text-emerald-500 rounded" id="el-kixnq5yh">Completed</span></td>
                                <td className="py-4" id="el-i8xufbla">
                                    <div className="flex gap-2" id="el-l9sy0n0a">
                                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" id="el-v3bbhql0">Download</button>
                                        <button className="px-3 py-1 text-sm bg-neutral-700 text-white rounded hover:bg-neutral-600 transition-colors" id="el-rfq3aj6o">Share</button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-neutral-700/30" id="el-i3isvevj">
                                <td className="py-4 text-white" id="el-j3ygrd7l">Annual Attendance Report</td>
                                <td className="py-4 text-neutral-400" id="el-w3pjplj2">Sarah Johnson</td>
                                <td className="py-4 text-neutral-400" id="el-8fqr24cw">Feb 10, 2024</td>
                                <td className="py-4" id="el-hnrwuve8"><span className="px-2 py-1 bg-emerald-500/20 text-emerald-500 rounded" id="el-p9yfwgi4">Completed</span></td>
                                <td className="py-4" id="el-4ipgf3rl">
                                    <div className="flex gap-2" id="el-xh1ixxv4">
                                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" id="el-6npvzakb">Download</button>
                                        <button className="px-3 py-1 text-sm bg-neutral-700 text-white rounded hover:bg-neutral-600 transition-colors" id="el-ga18d1n4">Share</button>
                                    </div>
                                </td>
                            </tr>
                            <tr id="el-0vcm3h5v">
                                <td className="py-4 text-white" id="el-l1hmf3a0">Student Progress Report</td>
                                <td className="py-4 text-neutral-400" id="el-zsvanu2a">Mike Wilson</td>
                                <td className="py-4 text-neutral-400" id="el-2n48j4vk">Feb 5, 2024</td>
                                <td className="py-4" id="el-ra6uqcef"><span className="px-2 py-1 bg-emerald-500/20 text-emerald-500 rounded" id="el-30dmz3dl">Completed</span></td>
                                <td className="py-4" id="el-ajcuftug">
                                    <div className="flex gap-2" id="el-ncauorw5">
                                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" id="el-53lcisfc">Download</button>
                                        <button className="px-3 py-1 text-sm bg-neutral-700 text-white rounded hover:bg-neutral-600 transition-colors" id="el-vup6ua1c">Share</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    </AdminLayout>
  )
}

export default page
