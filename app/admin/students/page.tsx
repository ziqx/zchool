import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react'

function page() {
  return (
    <AdminLayout>
      <div id="students" className="p-5">
    {/* <!-- Header Section --> */}
    <div className="flex justify-between items-center mb-6" id="el-ikbq7uwr">
        <h2 className="text-xl font-semibold" id="el-zwrc3xtn">Students Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors duration-200" id="el-msa8lp98">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-9iatrw47">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" id="el-41jijgus"></path>
            </svg>
            Add New Student
        </button>
    </div>

    {/* <!-- Filters Section --> */}
    <div className="bg-white p-4 rounded-lg border border-neutral-200/20 mb-6" id="el-psuu48ca">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4" id="el-a4j1mc08">
            <div className="relative" id="el-lz4a2tpd">
                <input type="text" placeholder="Search students..." className="w-full px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" id="el-x0ltguob"/>
                <svg className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-fjs22b9d">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" id="el-fxq0f1om"></path>
                </svg>
            </div>
            <select className="px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" id="el-zia22pg4">
                <option value="" id="el-01kxf6ur">All Classes</option>
                <option value="10" id="el-dxqv52uy">Class 10</option>
                <option value="9" id="el-8e5fj5ii">Class 9</option>
                <option value="8" id="el-xf96ruvo">Class 8</option>
            </select>
            <select className="px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" id="el-3t7bwxfw">
                <option value="" id="el-rfje5l8b">All Sections</option>
                <option value="A" id="el-syz3ka4b">Section A</option>
                <option value="B" id="el-bew837j7">Section B</option>
                <option value="C" id="el-lhh27qma">Section C</option>
            </select>
            <select className="px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" id="el-21fnp497">
                <option value="" id="el-x8lrzzu6">Status</option>
                <option value="active" id="el-91y0n4pf">Active</option>
                <option value="inactive" id="el-0pfux3gw">Inactive</option>
            </select>
        </div>
    </div>

    {/* <!-- Students Table --> */}
    <div className="bg-white rounded-lg border border-neutral-200/20 overflow-hidden" id="el-fy3e0den">
        <table className="w-full" id="el-wpufeucd">
            <thead className="bg-gray-50" id="el-eym7av2s">
                <tr id="el-cncs6d1i">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-txfjoyok">Student</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-3rr9k4m6">Class</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-bjduaue1">Roll No.</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-nq2qehgb">Parent Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-hwli4pk3">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-t6mnycn6">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-apzf01d4">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/20" id="el-cp9mrri4">
                <tr className="hover:bg-gray-50" id="el-jmih952z">
                    <td className="px-6 py-4 whitespace-nowrap" id="el-ttupvwqm">
                        <div className="flex items-center" id="el-qa5n7br6">
                            <div className="h-10 w-10 rounded-full bg-gray-200" id="el-cypc8f9o"></div>
                            <div className="ml-4" id="el-wv43ei9a">
                                <div className="text-sm font-medium text-gray-900" id="el-orti7adz">John Doe</div>
                                <div className="text-sm text-gray-500" id="el-qrwlckei">john.doe@example.com</div>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap" id="el-ldbb1qn0">
                        <div className="text-sm text-gray-900" id="el-zk2fvm0e">Class 10-A</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap" id="el-qrj5l7cv">
                        <div className="text-sm text-gray-900" id="el-q32r2kq8">1001</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap" id="el-odyra30c">
                        <div className="text-sm text-gray-900" id="el-jvrze3w2">Robert Doe</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap" id="el-fdx1jd5a">
                        <div className="text-sm text-gray-900" id="el-3yam6yoq">+1 234 567 890</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap" id="el-o0c4zxb6">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" id="el-viiomjt4">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" id="el-5cq1e6nu">
                        <button className="text-blue-600 hover:text-blue-900 mr-3" id="el-4inbq63i">Edit</button>
                        <button className="text-red-600 hover:text-red-900" id="el-is44zz6i">Delete</button>
                    </td>
                </tr>
                {/* <!-- Repeat similar rows for more students --> */}
                <tr className="hover:bg-gray-50" id="el-jkgb5ldz">
                    <td className="px-6 py-4 whitespace-nowrap" id="el-er9u99gk">
                        <div className="flex items-center" id="el-36ckjem0">
                            <div className="h-10 w-10 rounded-full bg-gray-200" id="el-40uaso9m"></div>
                            <div className="ml-4" id="el-ymo0vwh6">
                                <div className="text-sm font-medium text-gray-900" id="el-1nqpwhx1">Jane Smith</div>
                                <div className="text-sm text-gray-500" id="el-wn3u3q40">jane.smith@example.com</div>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap" id="el-v5pjhe9p">
                        <div className="text-sm text-gray-900" id="el-3z7p67g6">Class 9-B</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap" id="el-44cgm3w6">
                        <div className="text-sm text-gray-900" id="el-fonmgkok">1002</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap" id="el-03kib29u">
                        <div className="text-sm text-gray-900" id="el-tetigeaz">Sarah Smith</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap" id="el-hh7b25cq">
                        <div className="text-sm text-gray-900" id="el-ww8rhujg">+1 234 567 891</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap" id="el-430sev4h">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" id="el-w0kfyjd3">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" id="el-rzy76zpw">
                        <button className="text-blue-600 hover:text-blue-900 mr-3" id="el-vdzeiwvu">Edit</button>
                        <button className="text-red-600 hover:text-red-900" id="el-mlwpuw4n">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        
        {/* <!-- Pagination --> */}
        <div className="bg-white px-4 py-3 border-t border-neutral-200/20 sm:px-6" id="el-0bnwjpzu">
            <div className="flex items-center justify-between" id="el-kohpvtrd">
                <div className="flex-1 flex justify-between sm:hidden" id="el-4iz1ymps">
                    <button className="relative inline-flex items-center px-4 py-2 border border-neutral-200/20 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" id="el-3stqqfg4">
                        Previous
                    </button>
                    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-neutral-200/20 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" id="el-fgtas0vk">
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between" id="el-qo37cjbh">
                    <div id="el-nn895rkc">
                        <p className="text-sm text-gray-700" id="el-509axir8">
                            Showing <span className="font-medium" id="el-wij53157">1</span> to <span className="font-medium" id="el-2hcnysgm">10</span> of <span className="font-medium" id="el-h1qgxiwc">97</span> results
                        </p>
                    </div>
                    <div id="el-sn3apbjk">
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination" id="el-w0036erb">
                            <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-200/20 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" id="el-zbtntqm6">
                                <span className="sr-only" id="el-lcxsw3vx">Previous</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" id="el-1yjpspjz">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" id="el-re03jcnw"></path>
                                </svg>
                            </button>
                            <button className="relative inline-flex items-center px-4 py-2 border border-neutral-200/20 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" id="el-qapy50od">1</button>
                            <button className="relative inline-flex items-center px-4 py-2 border border-neutral-200/20 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" id="el-sz8t30tu">2</button>
                            <button className="relative inline-flex items-center px-4 py-2 border border-neutral-200/20 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" id="el-4w0o5rgf">3</button>
                            <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-200/20 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" id="el-7uexzh1q">
                                <span className="sr-only" id="el-gd6swruh">Next</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" id="el-zim54y0t">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" id="el-fsbsxo54"></path>
                                </svg>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </AdminLayout>
  )
}

export default page
