import React from 'react'
// import { NavLink  } from 'react-router-dom';
import pic1 from '../assets/me.jpg'

export default function Users() {
  return (
    <div className='px-10 py-7'>
        <div className='grid gap-6 grid-cols-3 text-white'>
            <div className='col-span-1 rounded-lg bg-[#0e1726] p-4'>
                <div>پروفایل</div> 
                <img className='rounded-full w-1/5 mx-auto' src={pic1} alt="" />
                <h2 className='text-center'>حانیه رحیم</h2>
                <div className='flex items-center my-3'>
                    <span class="material-symbols-outlined ml-3">home</span>
                    <div className=''>طراح سایت</div>
                </div>
                <div className='flex items-center my-3'>
                    <span class="material-symbols-outlined ml-3">calendar_month</span>
                    <div className=''>29 آذر 1381</div>
                </div>
                <div className='flex items-center my-3'>
                    <span class="material-symbols-outlined ml-3">map</span>
                    <div className=''>تهران</div>
                </div>
                <div className='flex items-center my-3'>
                    <span class="material-symbols-outlined ml-3">mail</span>
                    <div className=''>haniehrahim78@gmail.com</div>
                </div>
                <div className='flex items-center'>
                    <span class="material-symbols-outlined ml-3">call</span>
                    <div className=''>09109254065</div>
                </div>
            </div>
            <div className='col-span-2 rounded-lg bg-[#0e1726] p-4'>
                <div>توانایی ها</div>
                <div className='bg-[#191e3a] my-5 rounded-full'>
                    <div className='flex justify-between px-3 bg-[#2d376d] rounded-full w-1/5'>
                        <div>php</div>
                        <div>20%</div>
                    </div>
                </div>
                <div className='bg-[#191e3a] my-5 rounded-full'>
                    <div className='flex justify-between px-3 bg-[#2d376d] rounded-full w-3/5'>
                        <div>php</div>
                        <div>60%</div>
                    </div>
                </div>
                <div className='bg-[#191e3a] my-5 rounded-full'>
                    <div className='flex justify-between px-3 bg-[#2d376d] rounded-full w-2/5'>
                        <div>php</div>
                        <div>40%</div>
                    </div>
                </div>
                <div className='bg-[#191e3a] my-5 rounded-full'>
                    <div className='flex justify-between px-3 bg-[#2d376d] rounded-full w-4/5'>
                        <div>php</div>
                        <div>80%</div>
                    </div>
                </div>
            </div>
            <div className='col-span-1 rounded-lg bg-[#0e1726] p-4'>
                تحصیلات 
                <div className='grid grid-cols-3'>
                    <div className='col-span-1 text-gray-500 py-3'>
                        4 مهر 1394
                    </div>
                    <div className='col-span-2 border-s-2 px-3 py-3 border-yellow-500 relative'>
                        <div>کالج سلطنتی هنر</div>
                        <div>طراح ایلاستریتور</div>
                        <div className='h-2 w-2 bg-blue-500 rounded-full absolute -right-1 top-5'></div>
                    </div>
                    <div className='col-span-1 text-gray-500 py-3'>
                        25 تیر 1395
                    </div>
                    <div className='col-span-2 border-s-2 px-3 py-3 border-yellow-500 relative'>
                        <div>موسسه فناوری ماساچوست</div>
                        <div>طراح ایلاستریتور</div>
                        <div className='h-2 w-2 bg-blue-500 rounded-full absolute -right-1 top-5'></div>
                    </div>
                    <div className='col-span-1 text-gray-500 py-3'>
                        13 بهمن 1395
                    </div>
                    <div className='col-span-2 border-s-2 px-3 py-3 border-yellow-500 relative'>
                        <div>دانشکده هنر موسسه شیکاگو</div>
                        <div>طراح ایلاستریتور</div>
                        <div className='h-2 w-2 bg-blue-500 rounded-full absolute -right-1 top-5'></div>
                    </div>
                </div>
            </div>
            <div className='col-span-2 rounded-lg bg-[#0e1726] p-4'>
                <div>بیوگرافی</div>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                </p>
                <p>
                و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <div className='grid grid-cols-2 gap-4 '>
                    <div className='bg-[#191e3a] p-4 rounded-lg mt-8'>
                        <h4 className='text-[#888ea8] font-bold text-xl pb-3'>اپلیکیشن موبایل</h4>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </div>
                    <div className='bg-[#191e3a] p-4 rounded-lg mt-8'>
                        <h4 className='text-[#888ea8] font-bold text-xl pb-3'>اپلیکیشن موبایل</h4>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </div>
                    <div className='bg-[#191e3a] p-4 rounded-lg mt-8'>
                        <h4 className='text-[#888ea8] font-bold text-xl pb-3'>اپلیکیشن موبایل</h4>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </div>
                    <div className='bg-[#191e3a] p-4 rounded-lg mt-8'>
                        <h4 className='text-[#888ea8] font-bold text-xl pb-3'>اپلیکیشن موبایل</h4>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 rounded-lg bg-[#0e1726] p-4'>
                تجربه کار
                <div className='grid grid-cols-3'>
                    <div className='col-span-1 text-gray-500 py-3'>
                        4 مهر 1394
                    </div>
                    <div className='col-span-2 border-s-2 px-3 py-3 border-yellow-500 relative'>
                        <div>شرکت نتفلیکس</div>
                        <div>طراح ایلاستریتور</div>
                        <div className='h-2 w-2 bg-blue-500 rounded-full absolute -right-1 top-5'></div>
                    </div>
                    <div className='col-span-1 text-gray-500 py-3'>
                        25 تیر 1395
                    </div>
                    <div className='col-span-2 border-s-2 px-3 py-3 border-yellow-500 relative'>
                        <div>شرکت گوگل</div>
                        <div>طراح ایلاستریتور</div>
                        <div className='h-2 w-2 bg-blue-500 rounded-full absolute -right-1 top-5'></div>
                    </div>
                    <div className='col-span-1 text-gray-500 py-3'>
                        13 بهمن 1395
                    </div>
                    <div className='col-span-2 border-s-2 px-3 py-3 border-yellow-500 relative'>
                        <div>شرکت تنظیم مجدد طراحی</div>
                        <div>طراح ایلاستریتور</div>
                        <div className='h-2 w-2 bg-blue-500 rounded-full absolute -right-1 top-5'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
