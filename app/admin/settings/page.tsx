import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react'

function page() {
  return (
    <AdminLayout>
       <section id="settings" className="page-section bg-neutral-900 min-h-screen p-4 lg:p-8">
        <div className="max-w-7xl mx-auto" id="el-7ohgfh1v">
            <div className="mb-8" id="el-othf9xie">
                <h2 className="text-2xl font-bold text-white mb-2" id="el-rmq82p13">Settings</h2>
                <p className="text-neutral-400" id="el-ci48s9lq">Manage your school system preferences and configurations</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="el-hbwhr985">
                {/* <!-- Left Sidebar Navigation --> */}
                <div className="lg:col-span-1" id="el-mrng0bz7">
                    <div className="bg-neutral-800/50 rounded-xl border border-neutral-700/30 p-4" id="el-i8wv3ksu">
                        <nav className="space-y-2" id="el-ex2r48ui">
                            <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg" id="el-0xh0ih6e">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-2virm4g4">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" id="el-90n075n3"></path>
                                </svg>
                                Profile Settings
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-neutral-300 hover:bg-neutral-700/30 rounded-lg transition-colors" id="el-awtufgmw">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-y7exsjtc">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" id="el-5xr3rj6n"></path>
                                </svg>
                                System Preferences
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-neutral-300 hover:bg-neutral-700/30 rounded-lg transition-colors" id="el-tsh8oj2l">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-sudy2xyj">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" id="el-vztjg2w2"></path>
                                </svg>
                                Security
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-neutral-300 hover:bg-neutral-700/30 rounded-lg transition-colors" id="el-bd9vcgui">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-7vgyv0t8">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" id="el-8dyrnwv2"></path>
                                </svg>
                                Notifications
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-neutral-300 hover:bg-neutral-700/30 rounded-lg transition-colors" id="el-hhbb69gh">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-np32rl3y">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" id="el-gy2lhsq9"></path>
                                </svg>
                                User Management
                            </button>
                        </nav>
                    </div>
                </div>

                {/* <!-- Main Settings Content --> */}
                <div className="lg:col-span-2" id="el-o5126jew">
                    <div className="bg-neutral-800/50 rounded-xl border border-neutral-700/30 p-6" id="el-3p5u05af">
                        <h3 className="text-xl font-semibold text-white mb-6" id="el-5forre9h">Profile Settings</h3>
                        
                        <form className="space-y-6" id="el-azagwbct">
                            <div className="space-y-4" id="el-qwavyp7m">
                                <div id="el-yrr9j832">
                                    <label className="block text-sm font-medium text-neutral-300 mb-2" id="el-63f3lxk9">School Name</label>
                                    <input type="text" className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 text-white" value="Springfield High School" id="el-wcr1zugt"/>
                                </div>

                                <div id="el-ngt15tj5">
                                    <label className="block text-sm font-medium text-neutral-300 mb-2" id="el-3e4vljet">Administrator Email</label>
                                    <input type="email" className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 text-white" value="admin@springfield.edu" id="el-bgygf1v7"/>
                                </div>

                                <div id="el-du5p081h">
                                    <label className="block text-sm font-medium text-neutral-300 mb-2" id="el-xdh67g9e">Phone Number</label>
                                    <input type="tel" className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 text-white" value="+1 (555) 123-4567" id="el-443lzvwh"/>
                                </div>

                                <div id="el-me1upqvv">
                                    <label className="block text-sm font-medium text-neutral-300 mb-2" id="el-2mcdf1qz">Address</label>
                                    <textarea className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 text-white" rows={3} id="el-ju5vjaqr">123 Education Street, Springfield, ST 12345</textarea>
                                </div>
                            </div>

                            <div className="border-t border-neutral-700/30 pt-6" id="el-nhx96xle">
                                <h4 className="text-lg font-medium text-white mb-4" id="el-u3t9u5ao">Appearance</h4>
                                <div className="space-y-4" id="el-f0niicon">
                                    <div className="flex items-center justify-between" id="el-yud779v1">
                                        <span className="text-neutral-300" id="el-in9tmzml">Dark Mode</span>
                                        <button type="button" role="switch" aria-checked="true" className="bg-blue-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out" id="el-rt42hxfw">
                                            <span className="translate-x-5 relative inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out" id="el-017gm624"></span>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between" id="el-6euj7vno">
                                        <span className="text-neutral-300" id="el-b9qxsi8v">Compact Mode</span>
                                        <button type="button" role="switch" aria-checked="false" className="bg-neutral-700 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out" id="el-0p6wpv59">
                                            <span className="translate-x-0 relative inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out" id="el-xiomsgb2"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-neutral-700/30 pt-6" id="el-wku2krmr">
                                <h4 className="text-lg font-medium text-white mb-4" id="el-uiyejd3s">Email Notifications</h4>
                                <div className="space-y-3" id="el-036uif7i">
                                    <label className="flex items-center gap-3" id="el-qbrwo0ay">
                                        <input type="checkbox" checked className="form-checkbox text-blue-600 rounded" id="el-70fh3b4y" />
                                        <span className="text-neutral-300" id="el-k7f5anas">System Updates</span>
                                    </label>
                                    <label className="flex items-center gap-3" id="el-znizmdm6">
                                        <input type="checkbox" checked className="form-checkbox text-blue-600 rounded" id="el-st218sbq" />
                                        <span className="text-neutral-300" id="el-u9qf2or7">New Student Registrations</span>
                                    </label>
                                    <label className="flex items-center gap-3" id="el-da9lclyj">
                                        <input type="checkbox" className="form-checkbox text-blue-600 rounded" id="el-oduwthv2" />
                                        <span className="text-neutral-300" id="el-46ulvzoa">Schedule Changes</span>
                                    </label>
                                    <label className="flex items-center gap-3" id="el-x8birmqb">
                                        <input type="checkbox" checked className="form-checkbox text-blue-600 rounded" id="el-anqdux2p" />
                                        <span className="text-neutral-300" id="el-qbhdzguk">Grade Submissions</span>
                                    </label>
                                </div>
                            </div>

                            <div className="border-t border-neutral-700/30 pt-6" id="el-k9fyq290">
                                <h4 className="text-lg font-medium text-white mb-4" id="el-t8r9tofb">Danger Zone</h4>
                                <div className="space-y-4" id="el-e7zsn4rc">
                                    <button type="button" className="px-4 py-2 bg-red-600/20 text-red-500 rounded-lg hover:bg-red-600/30 transition-colors" id="el-rd8omwzn">
                                        Reset All Settings
                                    </button>
                                    <button type="button" className="px-4 py-2 bg-red-600/20 text-red-500 rounded-lg hover:bg-red-600/30 transition-colors" id="el-bmey00z4">
                                        Delete Account
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-end gap-4" id="el-thf0crfw">
                                <button type="button" className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors" id="el-87jq5lsy">
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" id="el-dfjnr539">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </AdminLayout>
  )
}

export default page
