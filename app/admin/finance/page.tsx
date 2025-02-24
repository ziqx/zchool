import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react'

function page() {
  return (
    <AdminLayout>
      <section id="finance" className="page-section bg-neutral-900 min-h-screen p-4 lg:p-8">
        <div className="max-w-7xl mx-auto" id="el-65bkfx24">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6" id="el-jjc88bcj">
                <h2 className="text-2xl font-bold text-white mb-4 lg:mb-0" id="el-z18aug08">Financial Overview</h2>
                <div className="flex gap-4" id="el-asjesdo3">
                    <select className="bg-neutral-800 text-white px-4 py-2 rounded-lg" id="el-28i27tn6">
                        <option id="el-wepvr6tp">2024</option>
                        <option id="el-cwwi3mv9">2023</option>
                        <option id="el-9vvtswc6">2022</option>
                    </select>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" id="el-bfcyctw7">
                        Generate Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" id="el-qqr37qce">
                <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30" id="el-uw21d6a5">
                    <div className="flex items-center justify-between mb-4" id="el-esem1jd3">
                        <h3 className="text-neutral-400" id="el-wvn3mto7">Total Revenue</h3>
                        <span className="text-emerald-500 bg-emerald-500/20 px-2 py-1 rounded text-sm" id="el-956fx6ic">+12.5%</span>
                    </div>
                    <p className="text-3xl font-bold text-white" id="el-bb5kxzvx">$528,590</p>
                    <p className="text-sm text-neutral-400 mt-2" id="el-b10j02ds">vs $469,683 last year</p>
                </div>

                <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30" id="el-vw7oknfx">
                    <div className="flex items-center justify-between mb-4" id="el-sd4h32m5">
                        <h3 className="text-neutral-400" id="el-1ektk47k">Outstanding Fees</h3>
                        <span className="text-red-500 bg-red-500/20 px-2 py-1 rounded text-sm" id="el-en8r0mzy">+5.2%</span>
                    </div>
                    <p className="text-3xl font-bold text-white" id="el-dbzgnnlv">$48,260</p>
                    <p className="text-sm text-neutral-400 mt-2" id="el-s4quk3qb">from 156 students</p>
                </div>

                <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30" id="el-7c6xpdyl">
                    <div className="flex items-center justify-between mb-4" id="el-kaahklnd">
                        <h3 className="text-neutral-400" id="el-kd69cbl7">Expenses</h3>
                        <span className="text-yellow-500 bg-yellow-500/20 px-2 py-1 rounded text-sm" id="el-6xejssw7">+3.7%</span>
                    </div>
                    <p className="text-3xl font-bold text-white" id="el-7cnuzcwx">$342,875</p>
                    <p className="text-sm text-neutral-400 mt-2" id="el-oryljo4a">vs $330,645 last year</p>
                </div>

                <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30" id="el-d8rigxon">
                    <div className="flex items-center justify-between mb-4" id="el-868zvnac">
                        <h3 className="text-neutral-400" id="el-b1pfrt2w">Net Profit</h3>
                        <span className="text-emerald-500 bg-emerald-500/20 px-2 py-1 rounded text-sm" id="el-er4wed30">+18.3%</span>
                    </div>
                    <p className="text-3xl font-bold text-white" id="el-ropdadxd">$185,715</p>
                    <p className="text-sm text-neutral-400 mt-2" id="el-tza641wf">vs $139,038 last year</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8" id="el-pbtkkbz5">
                <div className="lg:col-span-2 bg-neutral-800/50 rounded-xl border border-neutral-700/30 p-6" id="el-8104pp0x">
                    <h3 className="text-lg font-semibold text-white mb-6" id="el-aptu4lqf">Recent Transactions</h3>
                    <div className="overflow-x-auto" id="el-z5n6c7ow">
                        <table className="w-full" id="el-92rug346">
                            <thead id="el-94zcvm77">
                                <tr className="text-left border-b border-neutral-700/30" id="el-ocpu23t7">
                                    <th className="pb-3 text-neutral-400 font-medium" id="el-tua95om5">Description</th>
                                    <th className="pb-3 text-neutral-400 font-medium" id="el-clcppd87">Date</th>
                                    <th className="pb-3 text-neutral-400 font-medium" id="el-y46lyxdj">Amount</th>
                                    <th className="pb-3 text-neutral-400 font-medium" id="el-f6y1fw2h">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm" id="el-non4kook">
                                <tr className="border-b border-neutral-700/30" id="el-d7gib7ee">
                                    <td className="py-4 text-white" id="el-8twfudpp">Tuition Fee - Grade 10</td>
                                    <td className="py-4 text-neutral-400" id="el-qss681dx">Feb 15, 2024</td>
                                    <td className="py-4 text-white" id="el-e45fr97v">$1,200</td>
                                    <td className="py-4" id="el-jbkg735f"><span className="px-2 py-1 bg-emerald-500/20 text-emerald-500 rounded" id="el-h8omsg5x">Paid</span></td>
                                </tr>
                                <tr className="border-b border-neutral-700/30" id="el-g6mry92g">
                                    <td className="py-4 text-white" id="el-0976njck">Library Fee</td>
                                    <td className="py-4 text-neutral-400" id="el-lcprmrxo">Feb 14, 2024</td>
                                    <td className="py-4 text-white" id="el-9s8t1ui3">$50</td>
                                    <td className="py-4" id="el-41di9dy6"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded" id="el-bxiy27xz">Pending</span></td>
                                </tr>
                                <tr className="border-b border-neutral-700/30" id="el-tizjio7r">
                                    <td className="py-4 text-white" id="el-17aug5yd">Sports Equipment</td>
                                    <td className="py-4 text-neutral-400" id="el-37tt06qr">Feb 13, 2024</td>
                                    <td className="py-4 text-white" id="el-dhdlcag7">$350</td>
                                    <td className="py-4" id="el-cx1slabb"><span className="px-2 py-1 bg-emerald-500/20 text-emerald-500 rounded" id="el-4d9mpbwf">Paid</span></td>
                                </tr>
                                <tr className="border-b border-neutral-700/30" id="el-2yoelj5w">
                                    <td className="py-4 text-white" id="el-gf8sc56e">Lab Fee - Chemistry</td>
                                    <td className="py-4 text-neutral-400" id="el-qygdwyow">Feb 12, 2024</td>
                                    <td className="py-4 text-white" id="el-tx4xpfw6">$150</td>
                                    <td className="py-4" id="el-36ped76y"><span className="px-2 py-1 bg-red-500/20 text-red-500 rounded" id="el-hzzeiuyc">Overdue</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-neutral-800/50 rounded-xl border border-neutral-700/30 p-6" id="el-rc5u40gd">
                    <h3 className="text-lg font-semibold text-white mb-6" id="el-o5wulct9">Payment Methods</h3>
                    <div className="space-y-4" id="el-nr2q1f24">
                        <div className="flex items-center justify-between p-4 bg-neutral-700/30 rounded-lg" id="el-risd0gyv">
                            <div className="flex items-center gap-3" id="el-wsim3hwq">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center" id="el-ka3v5x8x">
                                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-51wuz7n2">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" id="el-e1ajd2td"></path>
                                    </svg>
                                </div>
                                <span className="text-white" id="el-y3wd703u">Credit Card</span>
                            </div>
                            <span className="text-neutral-400" id="el-7lpstvwu">45%</span>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-neutral-700/30 rounded-lg" id="el-5ys4xsyu">
                            <div className="flex items-center gap-3" id="el-8g9hz5h8">
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center" id="el-58uxp8lj">
                                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-a7jox1gz">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" id="el-yi7spaiv"></path>
                                    </svg>
                                </div>
                                <span className="text-white" id="el-a1pbb2jr">Bank Transfer</span>
                            </div>
                            <span className="text-neutral-400" id="el-1eoqmumw">35%</span>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-neutral-700/30 rounded-lg" id="el-xm34qu3f">
                            <div className="flex items-center gap-3" id="el-296juv9z">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center" id="el-x4mppvcb">
                                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-p7zo3ca3">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" id="el-j89jgsax"></path>
                                    </svg>
                                </div>
                                <span className="text-white" id="el-prh40z1h">Cash</span>
                            </div>
                            <span className="text-neutral-400" id="el-9dm701x0">20%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-800/50 rounded-xl border border-neutral-700/30 p-6" id="el-jtpn5cek">
                <div className="flex justify-between items-center mb-6" id="el-9o1afxdr">
                    <h3 className="text-lg font-semibold text-white" id="el-a30xraa7">Outstanding Payments</h3>
                    <button className="text-blue-500 hover:text-blue-400 transition-colors" id="el-1a1awesr">View All</button>
                </div>
                <div className="overflow-x-auto" id="el-ls1r8d68">
                    <table className="w-full" id="el-e843d3rp">
                        <thead id="el-umwgklzg">
                            <tr className="text-left border-b border-neutral-700/30" id="el-gkofjey4">
                                <th className="pb-3 text-neutral-400 font-medium" id="el-26yocmey">Student</th>
                                <th className="pb-3 text-neutral-400 font-medium" id="el-ecqeqv8a">Description</th>
                                <th className="pb-3 text-neutral-400 font-medium" id="el-ay8mhzg9">Due Date</th>
                                <th className="pb-3 text-neutral-400 font-medium" id="el-ol4bwqo1">Amount</th>
                                <th className="pb-3 text-neutral-400 font-medium" id="el-9bhjbexn">Actions</th>
                            </tr>
                        </thead>
                        <tbody id="el-9lm4xdfx">
                            <tr className="border-b border-neutral-700/30" id="el-zw7e1q29">
                                <td className="py-4 text-white" id="el-li8c573c">John Doe</td>
                                <td className="py-4 text-neutral-400" id="el-az89ju05">Annual Tuition Fee</td>
                                <td className="py-4 text-neutral-400" id="el-4od63juh">Mar 01, 2024</td>
                                <td className="py-4 text-white" id="el-u4vvjw19">$2,500</td>
                                <td className="py-4" id="el-b3rvwnqp">
                                    <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" id="el-vonu8eqv">Send Reminder</button>
                                </td>
                            </tr>
                            <tr className="border-b border-neutral-700/30" id="el-v030i29k">
                                <td className="py-4 text-white" id="el-bir3jgxj">Sarah Smith</td>
                                <td className="py-4 text-neutral-400" id="el-qr9qohwx">Transportation Fee</td>
                                <td className="py-4 text-neutral-400" id="el-kubjntjo">Feb 28, 2024</td>
                                <td className="py-4 text-white" id="el-i9tiort0">$350</td>
                                <td className="py-4" id="el-9y6nu118">
                                    <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" id="el-st0kg0c7">Send Reminder</button>
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
