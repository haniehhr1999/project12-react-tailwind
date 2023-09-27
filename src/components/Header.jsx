import React from 'react'
import { Link} from 'react-router-dom';

export default function Header() {
    // w-full fixed top-0 
  return (
    <header className="shadow-lg ">
          <div className="flex justify-between p-4 items-center text-[#888ea8]">
              <div>
                  <img src="" alt="" />
                  <div className="flex items-center py-1 px-3 bg-[#0e1726]">
                      <span className="text-[#888ea8] material-symbols-outlined">search</span>
                      <input className="bg-transparent" type="text" placeholder="جستجو کنید..." />
                  </div>
              </div>
              <div>
                  <span className="material-symbols-outlined">flag</span>
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="material-symbols-outlined">mail</span>
              </div>
          </div>
          <div className="flex justify-between p-4 items-center text-[#888ea8] bg-[#1a1c2d]">
              <div className="flex items-center">
                  <span className="material-symbols-outlined">menu</span>
                  <span>داشبورد / فروش</span>
              </div>
              <div>
                  <details className="dropdown ">
                      <summary className="m-1 btn border border-slate-500 px-3 py-1">تنظیمات</summary>
                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                          <li>
                              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">نامه</Link>
                          </li>
                          <li>
                              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">پرینت</Link>
                          </li>
                          <li>
                              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">دانلود</Link>
                          </li>
                          <li>
                              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">اشتراک گذاری</Link>
                          </li>
                      </ul>
                  </details>
              </div>

          </div>
      </header>
  )
}
