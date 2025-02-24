import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react'

function page() {
  return (
    <AdminLayout>
      <section id="schedule" className="page-section bg-neutral-900 min-h-screen p-4 lg:p-8">
        <div className="max-w-7xl mx-auto" id="el-8ke40f0c">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6" id="el-8ph35su6">
                <h2 className="text-2xl font-bold text-white mb-4 lg:mb-0" id="el-t1x3t93h">Class Schedule</h2>
                <div className="flex gap-4" id="el-i21b9llz">
                    <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors" id="el-xxgfzk8w">
                        <span className="text-sm" id="el-7soqccmx">February 2024</span>
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" id="el-hye06uic">
                        + Add Class
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mb-8" id="el-ymn1ec0n">
                <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/30" id="el-ayk53bis">
                    <h3 className="text-neutral-400 font-medium mb-3" id="el-gqb5knkg">Monday</h3>
                    <div className="space-y-3" id="el-s8zb51tu">
                        <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30" id="el-hu759qfc">
                            <p className="text-white font-medium" id="el-xyqx6ixb">Mathematics</p>
                            <p className="text-sm text-neutral-400" id="el-hh9m7gyv">08:00 - 09:30</p>
                            <p className="text-sm text-neutral-400" id="el-164vw8dp">Room 101</p>
                        </div>
                        <div className="bg-purple-500/20 p-3 rounded-lg border border-purple-500/30" id="el-izcdni5m">
                            <p className="text-white font-medium" id="el-r2hjp3zh">Physics</p>
                            <p className="text-sm text-neutral-400" id="el-oh9yropc">10:00 - 11:30</p>
                            <p className="text-sm text-neutral-400" id="el-b6477lo7">Room 205</p>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/30" id="el-06q1swz9">
                    <h3 className="text-neutral-400 font-medium mb-3" id="el-32gkxo11">Tuesday</h3>
                    <div className="space-y-3" id="el-ozzl2fwn">
                        <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/30" id="el-989c93am">
                            <p className="text-white font-medium" id="el-9j4kbad8">Biology</p>
                            <p className="text-sm text-neutral-400" id="el-3z3eh5p6">09:00 - 10:30</p>
                            <p className="text-sm text-neutral-400" id="el-yyir59og">Room 303</p>
                        </div>
                        <div className="bg-yellow-500/20 p-3 rounded-lg border border-yellow-500/30" id="el-my0t2rce">
                            <p className="text-white font-medium" id="el-k13z8g7g">Chemistry</p>
                            <p className="text-sm text-neutral-400" id="el-ipbmjonw">11:00 - 12:30</p>
                            <p className="text-sm text-neutral-400" id="el-5srulhup">Lab 2</p>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/30" id="el-7eblt631">
                    <h3 className="text-neutral-400 font-medium mb-3" id="el-wncjtyo9">Wednesday</h3>
                    <div className="space-y-3" id="el-6ue6jmxk">
                        <div className="bg-red-500/20 p-3 rounded-lg border border-red-500/30" id="el-hdviscpr">
                            <p className="text-white font-medium" id="el-5ynnn9x0">Literature</p>
                            <p className="text-sm text-neutral-400" id="el-1c4m0oup">08:30 - 10:00</p>
                            <p className="text-sm text-neutral-400" id="el-bv5xw4vk">Room 102</p>
                        </div>
                        <div className="bg-indigo-500/20 p-3 rounded-lg border border-indigo-500/30" id="el-fzw48d6e">
                            <p className="text-white font-medium" id="el-64bb1tbk">History</p>
                            <p className="text-sm text-neutral-400" id="el-11tq5wam">10:30 - 12:00</p>
                            <p className="text-sm text-neutral-400" id="el-xjq0wxkf">Room 204</p>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/30" id="el-a16b2r98">
                    <h3 className="text-neutral-400 font-medium mb-3" id="el-s2qvq1i8">Thursday</h3>
                    <div className="space-y-3" id="el-4w04so1m">
                        <div className="bg-pink-500/20 p-3 rounded-lg border border-pink-500/30" id="el-b4kvvemi">
                            <p className="text-white font-medium" id="el-qtyjj9x1">Art</p>
                            <p className="text-sm text-neutral-400" id="el-jlp88l9v">09:00 - 10:30</p>
                            <p className="text-sm text-neutral-400" id="el-agohi546">Art Studio</p>
                        </div>
                        <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30" id="el-ng9i5yts">
                            <p className="text-white font-medium" id="el-rr2qery8">Mathematics</p>
                            <p className="text-sm text-neutral-400" id="el-b59m6fg6">11:00 - 12:30</p>
                            <p className="text-sm text-neutral-400" id="el-rhi4ucmr">Room 101</p>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/30" id="el-q1omvq3m">
                    <h3 className="text-neutral-400 font-medium mb-3" id="el-ntq3ixhz">Friday</h3>
                    <div className="space-y-3" id="el-lzd59qcy">
                        <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/30" id="el-9fogt7xa">
                            <p className="text-white font-medium" id="el-srtmpgwl">Physical Education</p>
                            <p className="text-sm text-neutral-400" id="el-2lmhz74s">08:00 - 09:30</p>
                            <p className="text-sm text-neutral-400" id="el-579dbhhm">Gymnasium</p>
                        </div>
                        <div className="bg-purple-500/20 p-3 rounded-lg border border-purple-500/30" id="el-emsmwlu8">
                            <p className="text-white font-medium" id="el-v5ro18r2">Computer Science</p>
                            <p className="text-sm text-neutral-400" id="el-j0pp3sjm">10:00 - 11:30</p>
                            <p className="text-sm text-neutral-400" id="el-yndbnfyy">Lab 1</p>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/30" id="el-sl0b2rbl">
                    <h3 className="text-neutral-400 font-medium mb-3" id="el-z562ab55">Saturday</h3>
                    <div className="space-y-3" id="el-c67ntqzd">
                        <div className="bg-orange-500/20 p-3 rounded-lg border border-orange-500/30" id="el-035fccia">
                            <p className="text-white font-medium" id="el-my0xm7u0">Music</p>
                            <p className="text-sm text-neutral-400" id="el-s2xlzl5a">09:00 - 10:30</p>
                            <p className="text-sm text-neutral-400" id="el-r9dwg61c">Music Room</p>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/30" id="el-9txvf204">
                    <h3 className="text-neutral-400 font-medium mb-3" id="el-7kk5chze">Sunday</h3>
                    <div className="p-3 rounded-lg" id="el-glz3vr9i">
                        <p className="text-neutral-500 text-center" id="el-sr87xnol">No Classes</p>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-800/50 rounded-xl border border-neutral-700/30 p-6" id="el-jc1l2f69">
                <h3 className="text-lg font-semibold text-white mb-4" id="el-xt5nalnl">Upcoming Events</h3>
                <div className="space-y-4" id="el-sg83ofuk">
                    <div className="flex items-center gap-4 p-3 bg-neutral-700/30 rounded-lg" id="el-1pu7mu57">
                        <div className="bg-blue-500/20 text-blue-500 p-3 rounded-lg text-center min-w-[60px]" id="el-4ab1x99t">
                            <div className="text-sm font-medium" id="el-40lqs79o">FEB</div>
                            <div className="text-xl font-bold" id="el-132xj3nb">20</div>
                        </div>
                        <div id="el-vfl9mr32">
                            <h4 className="text-white font-medium" id="el-q2hmajcq">Parent-Teacher Meeting</h4>
                            <p className="text-sm text-neutral-400" id="el-2eflmw0n">14:00 - 16:00 • Main Hall</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-neutral-700/30 rounded-lg" id="el-h9cm7kks">
                        <div className="bg-green-500/20 text-green-500 p-3 rounded-lg text-center min-w-[60px]" id="el-rmj3vd58">
                            <div className="text-sm font-medium" id="el-lexdpse5">FEB</div>
                            <div className="text-xl font-bold" id="el-n366hplg">25</div>
                        </div>
                        <div id="el-ljo3ehw9">
                            <h4 className="text-white font-medium" id="el-owucnf5j">Science Fair</h4>
                            <p className="text-sm text-neutral-400" id="el-mfqy93cz">09:00 - 15:00 • School Ground</p>
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
