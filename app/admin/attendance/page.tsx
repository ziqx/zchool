import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react'

function page() {
  return (
    <AdminLayout>
      <div id="attendance" className="p-5">
    {/* <!-- Header with Stats --> */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6" id="el-fin6p8dy">
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20" id="el-atys22om">
            <div className="flex justify-between" id="el-4wvg54l5">
                <div id="el-6wotl9hb">
                    <p className="text-sm text-gray-500" id="el-osq71x20">Present Today</p>
                    <h3 className="text-2xl font-semibold mt-1" id="el-8pvhchbi">452</h3>
                    <p className="text-sm text-green-500 mt-1" id="el-t1dpbcz8">92%</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg" id="el-6ydnjeab">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-af5uq6jz">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" id="el-c6uo491t"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/20" id="el-6s4d2ni4">
            <div className="flex justify-between" id="el-d4pdm2dw">
                <div id="el-avrqhj4s">
                    <p className="text-sm text-gray-500" id="el-ixryhmv1">Absent Today</p>
                    <h3 className="text-2xl font-semibold mt-1" id="el-54k4d1jt">39</h3>
                    <p className="text-sm text-red-500 mt-1" id="el-n7jqy8qo">8%</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg" id="el-kh4nw9q0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-nd6wb3io">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" id="el-hlq7lh82"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/20" id="el-7i5e7u3s">
            <div className="flex justify-between" id="el-1kgwj937">
                <div id="el-69alxn3s">
                    <p className="text-sm text-gray-500" id="el-z5bhbqw4">Late Today</p>
                    <h3 className="text-2xl font-semibold mt-1" id="el-w6qee47i">15</h3>
                    <p className="text-sm text-yellow-500 mt-1" id="el-bn4gb2d8">3%</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg" id="el-t1woq723">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-o30662dh">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" id="el-1e3hig9h"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/20" id="el-auq8iydg">
            <div className="flex justify-between" id="el-sj8duh4m">
                <div id="el-ck9wvlep">
                    <p className="text-sm text-gray-500" id="el-iwnnr3wj">On Leave</p>
                    <h3 className="text-2xl font-semibold mt-1" id="el-0kv3gv4l">8</h3>
                    <p className="text-sm text-blue-500 mt-1" id="el-hcl464x8">2%</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg" id="el-7519ryev">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-o0beknph">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" id="el-b2xwifu8"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Attendance Management Section --> */}
    <div className="bg-white rounded-lg border border-neutral-200/20" id="el-qxtkoqxm">
        <div className="p-4 border-b border-neutral-200/20 flex justify-between items-center" id="el-7nuodjx1">
            <h2 className="text-xl font-semibold" id="el-fqqcdyhc">Mark Attendance</h2>
            <div className="flex space-x-4" id="el-5k87ksfq">
                <div className="relative" id="el-ziqdwggz">
                    <input type="date" className="px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" id="el-d2n4uvu3"/>
                </div>
                <select className="px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" id="el-jo2in1kn">
                    <option value="" id="el-3mxcjgev">Select Class</option>
                    <option value="10" id="el-gcti9vjg">Class 10</option>
                    <option value="9" id="el-cruxfkas">Class 9</option>
                    <option value="8" id="el-dkvn9p41">Class 8</option>
                </select>
                <select className="px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" id="el-v7xo2e17">
                    <option value="" id="el-f1jx646n">Select Section</option>
                    <option value="A" id="el-ymq789is">Section A</option>
                    <option value="B" id="el-wc9dizd7">Section B</option>
                    <option value="C" id="el-8z0he4tf">Section C</option>
                </select>
            </div>
        </div>

        {/* <!-- Attendance Table --> */}
        <div className="overflow-x-auto" id="el-1um9y2tt">
            <table className="w-full" id="el-3kh311h2">
                <thead className="bg-gray-50" id="el-ypzoq3dp">
                    <tr id="el-5asd8knc">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-902aeorq">Roll No</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-6ppfrmee">Student Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-86dwkv6u">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-5y94fhgq">Time In</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-9yl00ot0">Time Out</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-ncbxozao">Remarks</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200/20" id="el-lhgo3871">
                    <tr id="el-7ohlk6p5">
                        <td className="px-6 py-4 whitespace-nowrap text-sm" id="el-0i5xorhn">001</td>
                        <td className="px-6 py-4 whitespace-nowrap" id="el-pi0i6qyf">
                            <div className="flex items-center" id="el-el1b0v7n">
                                <div className="h-8 w-8 rounded-full bg-gray-200" id="el-zm2iviw5"></div>
                                <div className="ml-4" id="el-6czbngsq">
                                    <div className="text-sm font-medium text-gray-900" id="el-uhp8qx9m">John Doe</div>
                                    <div className="text-sm text-gray-500" id="el-in1zsext">Class 10-A</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap" id="el-10p0b4jq">
                            <select className="px-3 py-1 border border-neutral-200/20 rounded-md focus:outline-none focus:border-blue-500" id="el-hi2u04vn">
                                <option value="present" className="text-green-600" id="el-ffch6m8s">Present</option>
                                <option value="absent" className="text-red-600" id="el-w7gk7g3o">Absent</option>
                                <option value="late" className="text-yellow-600" id="el-yir82j69">Late</option>
                                <option value="leave" className="text-blue-600" id="el-d9joayhe">Leave</option>
                            </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap" id="el-nfzhadma">
                            <input type="time" className="px-2 py-1 border border-neutral-200/20 rounded-md focus:outline-none focus:border-blue-500" id="el-2fkosjop"/>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap" id="el-iw6fobaq">
                            <input type="time" className="px-2 py-1 border border-neutral-200/20 rounded-md focus:outline-none focus:border-blue-500" id="el-2o3ps4r1"/>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap" id="el-y7j5uhk7">
                            <input type="text" placeholder="Add remarks" className="px-3 py-1 border border-neutral-200/20 rounded-md focus:outline-none focus:border-blue-500" id="el-aw3ba2lh"/>
                        </td>
                    </tr>
                    {/* <!-- Repeat similar rows for more students --> */}
                </tbody>
            </table>
        </div>

        {/* <!-- Submit Button --> */}
        <div className="p-4 border-t border-neutral-200/20 flex justify-end" id="el-pu7zh7l3">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200" id="el-cjgg8h7s">
                Save Attendance
            </button>
        </div>
    </div>

    {/* <!-- Monthly Overview --> */}
    <div className="mt-6 bg-white rounded-lg border border-neutral-200/20 p-6" id="el-ywd5ol07">
        <h3 className="text-lg font-semibold mb-4" id="el-bulvry8l">Monthly Overview</h3>
        <div className="grid grid-cols-7 gap-2" id="el-ta2a1una">
            {/* <!-- Calendar days --> */}
            <div className="text-center p-2 text-sm text-gray-500" id="el-0864uiex">Mon</div>
            <div className="text-center p-2 text-sm text-gray-500" id="el-qzkqnzuy">Tue</div>
            <div className="text-center p-2 text-sm text-gray-500" id="el-b8tax04j">Wed</div>
            <div className="text-center p-2 text-sm text-gray-500" id="el-87g00mre">Thu</div>
            <div className="text-center p-2 text-sm text-gray-500" id="el-h528dx55">Fri</div>
            <div className="text-center p-2 text-sm text-gray-500" id="el-bk0kwzke">Sat</div>
            <div className="text-center p-2 text-sm text-gray-500" id="el-opke0a8y">Sun</div>
            
            {/* <!-- Calendar dates with attendance indicators --> */}
            <div className="text-center p-2 border border-neutral-200/20 rounded-lg bg-green-50" id="el-ygrva4sa">1</div>
            <div className="text-center p-2 border border-neutral-200/20 rounded-lg bg-green-50" id="el-yic0w4ce">2</div>
            <div className="text-center p-2 border border-neutral-200/20 rounded-lg bg-red-50" id="el-53qfliuw">3</div>
            <div className="text-center p-2 border border-neutral-200/20 rounded-lg bg-green-50" id="el-xcm2tfdl">4</div>
            <div className="text-center p-2 border border-neutral-200/20 rounded-lg bg-yellow-50" id="el-d6q0mqt6">5</div>
            <div className="text-center p-2 border border-neutral-200/20 rounded-lg" id="el-pf6fcfzh">6</div>
            <div className="text-center p-2 border border-neutral-200/20 rounded-lg" id="el-adnnb6e5">7</div>
            {/* <!-- Continue for the rest of the month --> */}
        </div>
        
        <div className="mt-4 flex justify-center space-x-6" id="el-pohutk5i">
            <div className="flex items-center" id="el-gjpthgzi">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2" id="el-lfvc4wn7"></div>
                <span className="text-sm text-gray-600" id="el-d07qxx7m">Present</span>
            </div>
            <div className="flex items-center" id="el-0wrjn8ss">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2" id="el-u8psbfr1"></div>
                <span className="text-sm text-gray-600" id="el-3s8aovkh">Absent</span>
            </div>
            <div className="flex items-center" id="el-fq3u0qs3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2" id="el-mw4utvsl"></div>
                <span className="text-sm text-gray-600" id="el-77pq8bes">Late</span>
            </div>
            <div className="flex items-center" id="el-xb31u12q">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" id="el-mzlx8jc0"></div>
                <span className="text-sm text-gray-600" id="el-s7u5l15k">Leave</span>
            </div>
        </div>
    </div>
</div>
    </AdminLayout>
  )
}

export default page
