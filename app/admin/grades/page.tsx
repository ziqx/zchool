import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react'

function page() {
  return (
    <AdminLayout>
      <section id="grades" className="page-section  min-h-screen p-4 lg:p-8">
        <div className="max-w-7xl mx-auto" id="el-40lfzw9r">
            <h2 className="text-2xl font-bold  mb-6" id="el-b9pmklm0">Student Grades</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8" id="el-cjux419q">
                <div className="bg-white rounded-xl p-6" id="el-4yov12zz">
                    <h3 className="text-lg font-semibold  mb-2" id="el-qsze3hel">Class Average</h3>
                    <div className="text-4xl font-bold text-emerald-500" id="el-d7rise18">85.6%</div>
                    <p className="text-neutral-400 text-sm mt-2" id="el-6lm6ovkn">+2.3% from last semester</p>
                </div>
                
                <div className="bg-white rounded-xl p-6" id="el-psu198ze">
                    <h3 className="text-lg font-semibold  mb-2" id="el-dlpa082o">Highest Grade</h3>
                    <div className="text-4xl font-bold text-blue-500" id="el-ou4ugno7">98%</div>
                    <p className="text-neutral-400 text-sm mt-2" id="el-45y7jpah">Mathematics</p>
                </div>
                
                <div className="bg-white rounded-xl p-6" id="el-9q7u3rfv">
                    <h3 className="text-lg font-semibold  mb-2" id="el-6xz3h7m1">Students at Risk</h3>
                    <div className="text-4xl font-bold text-red-500" id="el-w4w46b0a">12</div>
                    <p className="text-neutral-400 text-sm mt-2" id="el-mrni00ix">Below 60% average</p>
                </div>
            </div>
            
            <div className="bg-white rounded-xl" id="el-183jx5sy">
                <div className="p-6" id="el-jfnoxrf2">
                    <div className="flex justify-between items-center mb-6" id="el-yntf27av">
                        <h3 className="text-lg font-semibold " id="el-k4cddtfj">Recent Grade Entries</h3>
                        <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700  rounded-lg transition-colors" id="el-9m54ewbf">Export Data</button>
                    </div>
                    
                    <div className="overflow-x-auto" id="el-jqmxm3l9">
                        <table className="w-full text-left" id="el-5prl5edc">
                            <thead className="bg-neutral-700/30" id="el-bxlcjaiu">
                                <tr id="el-6pl703bn">
                                    <th className="px-6 py-3 text-neutral-300 text-sm font-semibold" id="el-mqlpqvg5">Student Name</th>
                                    <th className="px-6 py-3 text-neutral-300 text-sm font-semibold" id="el-6gx0sbq0">Subject</th>
                                    <th className="px-6 py-3 text-neutral-300 text-sm font-semibold" id="el-w0pr8oqj">Grade</th>
                                    <th className="px-6 py-3 text-neutral-300 text-sm font-semibold" id="el-98x1jmlg">Date</th>
                                    <th className="px-6 py-3 text-neutral-300 text-sm font-semibold" id="el-c673x0jc">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-700/30" id="el-skq2orby">
                                <tr className="hover:bg-neutral-700/20" id="el-771mjgf5">
                                    <td className="px-6 py-4 " id="el-2tp1sufw">Alice Johnson</td>
                                    <td className="px-6 py-4 text-neutral-300" id="el-8bdu1gh0">Mathematics</td>
                                    <td className="px-6 py-4 text-emerald-500 font-semibold" id="el-ykjvrnvu">95%</td>
                                    <td className="px-6 py-4 text-neutral-400" id="el-03r31npp">2024-02-15</td>
                                    <td className="px-6 py-4" id="el-t432278g"><span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-500" id="el-k48ba26g">Excellent</span></td>
                                </tr>
                                <tr className="hover:bg-neutral-700/20" id="el-4m7n8dzk">
                                    <td className="px-6 py-4 " id="el-qy4bnxtt">Mike Smith</td>
                                    <td className="px-6 py-4 text-neutral-300" id="el-dxble6it">Physics</td>
                                    <td className="px-6 py-4 text-yellow-500 font-semibold" id="el-6yjq0oac">75%</td>
                                    <td className="px-6 py-4 text-neutral-400" id="el-6za36j67">2024-02-15</td>
                                    <td className="px-6 py-4" id="el-vrg66rmg"><span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-500" id="el-kittm8if">Average</span></td>
                                </tr>
                                <tr className="hover:bg-neutral-700/20" id="el-8opdcly8">
                                    <td className="px-6 py-4 " id="el-3dukng1o">Sarah Williams</td>
                                    <td className="px-6 py-4 text-neutral-300" id="el-mdpww0x0">Chemistry</td>
                                    <td className="px-6 py-4 text-red-500 font-semibold" id="el-1ygiweza">55%</td>
                                    <td className="px-6 py-4 text-neutral-400" id="el-q351sv72">2024-02-14</td>
                                    <td className="px-6 py-4" id="el-ew0uakl4"><span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-500" id="el-2xgl3wsa">At Risk</span></td>
                                </tr>
                                <tr className="hover:bg-neutral-700/20" id="el-3hcjwlel">
                                    <td className="px-6 py-4 " id="el-mvlq7ypc">James Brown</td>
                                    <td className="px-6 py-4 text-neutral-300" id="el-n8bvwu1v">Biology</td>
                                    <td className="px-6 py-4 text-emerald-500 font-semibold" id="el-xch05bo3">88%</td>
                                    <td className="px-6 py-4 text-neutral-400" id="el-qc2g7hpy">2024-02-14</td>
                                    <td className="px-6 py-4" id="el-e1fgucbj"><span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-500" id="el-cexlsnns">Good</span></td>
                                </tr>
                                <tr className="hover:bg-neutral-700/20" id="el-17mxfazh">
                                    <td className="px-6 py-4 " id="el-19cxyzyp">Emma Davis</td>
                                    <td className="px-6 py-4 text-neutral-300" id="el-6uoutz13">English</td>
                                    <td className="px-6 py-4 text-emerald-500 font-semibold" id="el-go4paf7g">92%</td>
                                    <td className="px-6 py-4 text-neutral-400" id="el-fqmvwepa">2024-02-13</td>
                                    <td className="px-6 py-4" id="el-d2cbytsd"><span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-500" id="el-c56ebbak">Excellent</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="mt-6 flex justify-between items-center" id="el-0b3m15vx">
                        <div className="text-sm text-neutral-400" id="el-jqrvbsjf">Showing 5 of 25 entries</div>
                        <div className="flex gap-2" id="el-ge5887fy">
                            <button className="px-4 py-2 text-sm text-neutral-300 bg-neutral-700/30 rounded-lg hover:bg-neutral-700/50 transition-colors" id="el-rq4d8av3">Previous</button>
                            <button className="px-4 py-2 text-sm  bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" id="el-nilg3zec">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </AdminLayout>
  )
}

export default page
