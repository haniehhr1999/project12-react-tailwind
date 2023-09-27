import React from 'react'
import ChartPie from './ChartPie';
import ChartBar from './ChartBar';
import ChartLine from './ChartLine'


export default function Dashboard() {

    return (
    <div className="bg-transparent w-10/12 p-4 text-[#e0e6ed]">
              <div className="w-full flex items-stretch flex-wrap">
                  <div className="w-4/6 p-3">
                      <div className="bg-[#0e1726] rounded-lg p-3">
                          <div className="flex justify-between items-center">
                              <div>درآمد</div>
                              <div className="bg-blue-500 rounded-sm px-2 py-1 text-white">ماهانه</div>
                          </div>
                          <div>1500000</div>
                          <div>سود کل</div>
                          
                          <img src="https://static.tradingview.com/static/bundles/lightweight-charts.5c935e728656427cb801.jpg" alt="" className="w-full" />
                      </div>
                  </div>
                  <div className="w-2/6 p-3">
                      <div className="bg-[#0e1726] rounded-lg p-3">
                          <div>فروش بر اساس دسته بندی</div>
                          <ChartPie />
                          {/* <img src="https://static.vecteezy.com/system/resources/previews/014/858/382/original/companies-roles-on-market-circle-infographic-design-template-for-dark-theme-business-analysis-pie-chart-with-percentages-visual-data-presentation-vector.jpg" className="w-full" alt="" /> */}
                      </div>
                  </div>
                  <div className="w-2/6 p-3">
                      <div className="bg-[#0e1726] rounded-lg px-3 py-7">
                        <ChartBar />
                      </div>
                  </div>
                  <div className="w-2/6 p-3">
                      <div className="bg-[#0e1726] rounded-lg px-3 py-7">
                            <div>خلاصه</div>
                            <ul>
                                <li className='flex items-center justify-between my-2'>
                                    <span className="rounded-full bg-blue-400 p-2 ml-3 material-symbols-outlined text-white">home</span>
                                    <div className='w-full'>
                                        <div className="flex justify-between py-2">
                                            <div>درآمد</div>
                                            <div>14000 تومان</div>
                                        </div>
                                        <div className='h-2 rounded-full w-full bg-gray-600'>
                                            <div className="h-2 w-3/5 rounded-full bg-lime-400"></div>
                                        </div>
                                    </div>
                                </li>
                                <li className='flex items-center justify-between my-2 w-full'>
                                    <span className="rounded-full bg-blue-400 p-2 ml-3 material-symbols-outlined text-white">home</span>
                                    <div className='w-full'>
                                        <div className="flex justify-between py-2">
                                            <div>درآمد</div>
                                            <div>14000 تومان</div>
                                        </div>
                                        <div className='h-2 rounded-full w-full bg-gray-600'>
                                            <div className="h-2 w-4/5 rounded-full bg-orange-400"></div>
                                        </div>
                                    </div>
                                </li>
                                <li className='flex items-center justify-between my-2 w-full'>
                                    <span className="rounded-full bg-blue-400 p-2 ml-3 material-symbols-outlined text-white">home</span>
                                    <div className='w-full'>
                                        <div className="flex justify-between py-2">
                                            <div>درآمد</div>
                                            <div>14000 تومان</div>
                                        </div>
                                        <div className='h-2 rounded-full w-full bg-gray-600'>
                                            <div className="h-2 w-2/5 rounded-full bg-rose-400"></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                      </div>
                  </div>
                  <div className="w-2/6 p-3">
                      <div className="bg-[#0e1726] rounded-lg px-3 py-7">
                            <ChartLine />
                      </div>
                  </div>
                  <div className="w-5/12 p-3">
                      <div className="bg-[#0e1726] rounded-lg px-3 py-7">
                          <div>معاملات</div>
                          <ul className='py-3'>
                              <li className="flex items-center justify-between border my-2 p-2 border-slate-600 border-dotted rounded-md">
                                  <div className="flex items-center">
                                      <span className="material-symbols-outlined ml-3 bg-pink-500 rounded-full p-2">home</span>
                                      <div className="flex flex-col">
                                          <span>قبض برق</span>
                                          <span>4 خرداد ساعت 1 بعد از ظهر</span>
                                      </div>
                                  </div>
                                  <span>16000 تومان</span>
                              </li>
                              <li className="flex items-center justify-between border my-2 p-2 border-slate-600 border-dotted rounded-md">
                                  <div className="flex items-center">
                                      <span className="material-symbols-outlined ml-3 bg-green-500 rounded-full p-2">home</span>
                                      <div className="flex flex-col">
                                          <span>قبض برق</span>
                                          <span>4 خرداد ساعت 1 بعد از ظهر</span>
                                      </div>
                                  </div>
                                  <span>16000 تومان</span>
                              </li>
                              <li className="flex items-center justify-between border my-2 p-2 border-slate-600 border-dotted rounded-md">
                                  <div className="flex items-center">
                                      <span className="material-symbols-outlined ml-3 bg-blue-500 rounded-full p-2">home</span>
                                      <div className="flex flex-col">
                                          <span>قبض برق</span>
                                          <span>4 خرداد ساعت 1 بعد از ظهر</span>
                                      </div>
                                  </div>
                                  <span>16000 تومان</span>
                              </li>
                              <li className="flex items-center justify-between border my-2 p-2 border-slate-600 border-dotted rounded-md">
                                  <div className="flex items-center">
                                      <span className="material-symbols-outlined ml-3 bg-red-500 rounded-full p-2">home</span>
                                      <div className="flex flex-col">
                                          <span>قبض برق</span>
                                          <span>4 خرداد ساعت 1 بعد از ظهر</span>
                                      </div>
                                  </div>
                                  <span>16000 تومان</span>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="w-4/12 p-3">
                      <div className="bg-[#0e1726] rounded-lg px-3 py-7">
                          <div>فعالیت های اخیر</div>
                          <ul className='mt-4'>
                              <li className="border-r-2 flex justify-between relative border-gray-500 py-2 px-3">
                                <div>
                                      تماس کنفرانسی با مدیر بازاریابی
                                </div>
                                <div>
                                    19:00
                                </div>
                                <div className='w-2 h-2 absolute -right-1 top-5 rounded-full bg-green-400'></div>
                              </li>
                              <li className="border-r-2 flex justify-between relative border-gray-500 py-2 px-3">
                                <div>
                                      راه انداری مجدد سرور
                                </div>
                                <div>
                                    19:00
                                </div>
                                <div className='w-2 h-2 absolute -right-1 top-5 rounded-full bg-rose-400'></div>
                              </li>
                              <li className="border-r-2 flex justify-between relative border-gray-500 py-2 px-3">
                                <div>
                                   جزئیات قرارداد را به فریلنسر ارسال کنید   
                                </div>
                                <div>
                                    19:00
                                </div>
                                <div className='w-2 h-2 absolute -right-1 top-5 rounded-full bg-blue-400'></div>
                              </li>
                              <li className="border-r-2 flex justify-between relative border-gray-500 py-2 px-3">
                                <div>
                                      مهدی میخواهد زمان پروژه را افزایش دهد
                                </div>
                                <div>
                                    19:00
                                </div>
                                <div className='w-2 h-2 absolute -right-1 top-5 rounded-full bg-orange-400'></div>
                              </li>
                              <li className="border-r-2 flex justify-between relative border-gray-500 py-2 px-3">
                                <div>
                                      سرور برای حفظ و نگهداری
                                </div>
                                <div>
                                    19:00
                                </div>
                                <div className='w-2 h-2 absolute -right-1 top-5 rounded-full bg-purple-400'></div>
                              </li>
                              <li className="border-r-2 flex justify-between relative border-gray-500 py-2 px-3">
                                <div>
                                      پیوند مخرب شناسایی شد
                                </div>
                                <div>
                                    19:00
                                </div>
                                <div className='w-2 h-2 absolute -right-1 top-5 rounded-full bg-amber-400'></div>
                               </li>
                              <li className="border-r-2 flex justify-between relative border-gray-500 py-2 px-3">
                                <div>
                                    راه انداری مجدد سرور
                                </div>
                                <div>
                                     19:00                                   
                                </div>
                                <div className='w-2 h-2 absolute -right-1 top-5 rounded-full bg-red-400'></div>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="w-3/12 p-3">
                      <div className="bg-[#0e1726] rounded-lg p-3 divide-y divide-gray-500">
                          <div className='py-4'>
                              <div>اطلاعات حساب </div>
                              <div className="text-center">
                                  <div>تعادل</div>
                                  <div>470000 تومان</div>
                              </div>
                          </div>
                          <ul className='py-4'>
                              <li className="grid grid-cols-2">
                                  <div>پلن ماهیانه</div>
                                  <div>199000 تومان</div>
                              </li>
                              <li className="grid grid-cols-2">
                                  <div>مالیات</div>
                                  <div>199000 تومان</div>
                              </li>
                              <li className="grid grid-cols-2">
                                  <div>اضافی در این ماه</div>
                                  <div>2500 تومان</div>
                              </li>
                              <li className="grid grid-cols-2">
                                  <div>اشتراک سالانه نتفلیکس</div>
                                  <div>0 تومان</div>
                              </li>
                              <li className="grid grid-cols-2">
                                  <div>دیگر</div>
                                  <div>3000 تومان</div>
                              </li>
                          </ul>
                          <div className='flex justify-between py-4'>
                              <button className='bg-gray-400 text-black rounded-sm px-3 py-1'>انتقال</button>
                              <button className='bg-gray-400 text-black rounded-sm px-3 py-1'>خلاصه</button>
                          </div>
                      </div>
                  </div>
                  <div className="w-3/6 p-3">
                      <div className="bg-[#0e1726] rounded-lg p-3">
                          <div className="">سفارشات اخیر</div>
                          <div className="grid grid-cols-5 gap-2 bg-[#191e3a] rounded-md p-2">
                              <div className="w-2/10">مشتری</div>
                              <div className="w-2/10">محصول</div>
                              <div className="w-1/10">صورتحساب</div>
                              <div className="w-3/10">قیمت</div>
                              <div className="w-2/10">وضعیت</div>
                          </div>
                          <ul>
                              <li className="grid grid-cols-5 gap-2 p-2 hover:bg-gray-800 transition-colors duration-500 rounded-md cursor-pointer">
                                  <div className="w-2/10">حانیه رحیم</div>
                                  <div className="w-2/10">نایک اسپرت</div>
                                  <div className="w-1/10">#76894</div>
                                  <div className="w-3/10">88000 تومان</div>
                                  <div className="w-2/10">حمل شده</div>
                              </li>
                              <li className="grid grid-cols-5 gap-2 p-2 hover:bg-gray-800 transition-colors duration-500 rounded-md cursor-pointer">
                                  <div className="w-2/10">حامد طاهری</div>
                                  <div className="w-2/10">بلندگو</div>
                                  <div className="w-2/10">#75844</div>
                                  <div className="w-3/10">840000 تومان</div>
                                  <div className="w-2/10">پرداخت شده</div>
                              </li>
                              <li className="grid grid-cols-5 gap-2 p-2 hover:bg-gray-800 transition-colors duration-500 rounded-md cursor-pointer">
                                  <div className="w-2/10">محمد نصیری</div>
                                  <div className="w-2/10">دوربین</div>
                                  <div className="w-1/10">#66894</div>
                                  <div className="w-3/10">12600000 تومان</div>
                                  <div className="w-2/10">در انتظار</div>
                              </li>
                              <li className="grid grid-cols-5 gap-2 p-2 hover:bg-gray-800 transition-colors duration-500 rounded-md cursor-pointer">
                                  <div className="w-2/10">مرضیه مرادی</div>
                                  <div className="w-2/10">هدفون</div>
                                  <div className="w-1/10">#631025</div>
                                  <div className="w-3/10">658000 تومان</div>
                                  <div className="w-2/10">پرداخت شده</div>
                              </li>
                              <li className="grid grid-cols-5 gap-2 p-2 hover:bg-gray-800 transition-colors duration-500 rounded-md cursor-pointer">
                                  <div className="w-2/10">ملیکا آقایی</div>
                                  <div className="w-2/10">ورزش</div>
                                  <div className="w-1/10">#46935</div>
                                  <div className="w-3/10">1356000 تومان</div>
                                  <div className="w-2/10">حمل شده</div>
                              </li>
                              <li className="grid grid-cols-5 gap-2 p-2 hover:bg-gray-800 transition-colors duration-500 rounded-md cursor-pointer">
                                  <div className="w-2/10">زهرا اصفهانی</div>
                                  <div className="w-2/10">عینک</div>
                                  <div className="w-1/10">#26974</div>
                                  <div className="w-3/10">168000 تومان</div>
                                  <div className="w-2/10">حمل شده</div>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="w-3/6 p-3">
                      <div className="bg-[#0e1726] rounded-lg p-3">
                          <div className="">محصول برتر فروش</div>
                          <div className="grid grid-cols-5 gap-2 bg-[#191e3a] rounded-md p-2">
                              <div className="w-2/10">محصول</div>
                              <div className="w-2/10">قیمت</div>
                              <div className="w-1/10">تخفیف</div>
                              <div className="w-3/10">فروخته شده</div>
                              <div className="w-2/10">منبع</div>
                          </div>
                          <ul>
                              <li className="grid grid-cols-5 gap-2 p-2 cursor-pointer hover:bg-gray-800 transition-colors duration-500 rounded-md">
                                  <div className="w-2/10">بلندگو</div>
                                  <div className="w-2/10">860000 تومان</div>
                                  <div className="w-1/10">10000 تومان</div>
                                  <div className="w-3/10">240</div>
                                  <div className="w-2/10">مستقیم</div>
                              </li>
                              <li className="grid grid-cols-5 gap-2 p-2 cursor-pointer hover:bg-gray-800 transition-colors duration-500 rounded-md">
                                  <div className="w-2/10">عینک</div>
                                  <div className="w-2/10">250000 تومان</div>
                                  <div className="w-2/10">12000 تومان</div>
                                  <div className="w-3/10">190</div>
                                  <div className="w-2/10">گوگل</div>
                              </li>
                              <li className="grid grid-cols-5 gap-2 p-2 cursor-pointer hover:bg-gray-800 transition-colors duration-500 rounded-md">
                                  <div className="w-2/10">ساعت</div>
                                  <div className="w-2/10">88000 تومان</div>
                                  <div className="w-1/10">20000 تومان</div>
                                  <div className="w-3/10">66</div>
                                  <div className="w-2/10">تبلیغات</div>
                              </li>
                              <li className="grid grid-cols-5 gap-2 p-2 cursor-pointer hover:bg-gray-800 transition-colors duration-500 rounded-md">
                                  <div className="w-2/10">لبتاب</div>
                                  <div className="w-2/10">110000 تومان</div>
                                  <div className="w-1/10">56000 تومان</div>
                                  <div className="w-3/10">35</div>
                                  <div className="w-2/10">ایمیل</div>
                              </li>
                              <li className="grid grid-cols-5 gap-2 p-2 cursor-pointer hover:bg-gray-800 transition-colors duration-500 rounded-md">
                                  <div className="w-2/10">دوربین</div>
                                  <div className="w-2/10">2500000 تومان</div>
                                  <div className="w-1/10">40000 تومان</div>
                                  <div className="w-3/10">30</div>
                                  <div className="w-2/10">معرف</div>
                              </li>
                              <li className="grid grid-cols-5 gap-2 p-2 cursor-pointer hover:bg-gray-800 transition-colors duration-500 rounded-md">
                                  <div className="w-2/10">کفش</div>
                                  <div className="w-2/10">118000 تومان</div>
                                  <div className="w-1/10">30000 تومان</div>
                                  <div className="w-3/10">130</div>
                                  <div className="w-2/10">گوگل</div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
  )
}
