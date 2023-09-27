import React from 'react'
import { NavLink  } from 'react-router-dom';


export default function Menu() {
  return (
    <div className="bg-transparent w-2/12 p-4 border-l-2 border-slate-600	">
              <ul>
                  <li>
                      <NavLink to='/dashboard' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">dashboard</span>
                          <span>داشبورد</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/components' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">apps</span>
                          <span>اجزا</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/elements' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">menu</span>
                          <span>عناصر</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/font-icon' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">text_fields</span>
                          <span>فونت آیکن</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/widgets' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">widgets</span>
                          <span>ابزارک ها</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/tables' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">table</span>
                          <span>جداول</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/data-tables' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">monitoring</span>
                          <span>جداول داده ها</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/forms' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">description</span>
                          <span>فرم ها</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/users' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">person</span>
                          <span>کاربران</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/pages' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">auto_stories</span>
                          <span>صفحات</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/authentication' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">person_search</span>
                          <span>احراز هویت</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/blogs' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">sticky_note</span>
                          <span>مقالات</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/dashboard' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">menu</span>
                          <span>داشبورد</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/faq' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">menu</span>
                          <span>پرسش و پاسخ</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/dashboard' className="hover:bg-gray-500 hover:text-#7eff00 rounded-lg text-[#506690] py-3 px-4 transition-colors duration-500 flex items-center w-full" 
                        style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "#7eff00" : "#babdd4",
                                };
                            }}>
                          <span className="material-symbols-outlined ml-2">drag_pan</span>
                          <span>کشیدن</span>
                      </NavLink>
                  </li>
              </ul>
          </div>
  )
}
