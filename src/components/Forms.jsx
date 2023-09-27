import React from 'react'

export default function Forms() {
  return (
    <div className='w-full h-full my-auto px-72'>
      <form action="" className='bg-[#0e1726] rounded-lg py-7 px-6 text-white'>
        <h1 className='text-center text-2xl pb-3'>ورودی</h1>
        <div className='text-center mb-5'>برای ادامه به حساب کاربری خود وارد شوید</div>
        <label className='mt-10' htmlFor="">نام کاربری</label>
        <div className="flex items-center my-4">
          <span className='material-symbols-outlined ml-3'>person</span>
          <input className='focus:bg-gray-800 transition-colors duration-500 outline-none w-full bg-transparent border-b' placeholder='رمز عبور' type="text" />
        </div>
        <label className='mt-10' htmlFor="">رمز عبور</label>
        <div className="flex items-center my-4">
          <span className='material-symbols-outlined ml-3'>person</span>
          <input className='focus:bg-gray-800 transition-colors duration-500 outline-none w-full bg-transparent border-b' placeholder='رمز عبور' type="text" />
        </div>
        <button className='w-full bg-purple-600 hover:translate-y-1 transition-transform duration-500 my-2 px-4 py-2 rounded-md'>ورودی</button>
        <div className="flex justify-between">
          <button className='flex hover:translate-y-1 transition-transform duration-500 items-center my-2 px-4 py-2 rounded-md bg-lime-700'>
            <span className='material-symbols-outlined'>home</span>
            <span>گیت هاب</span>
          </button>
          <button className='flex hover:translate-y-1 transition-transform duration-500 items-center my-2 px-4 py-2 rounded-md bg-lime-700'>
            <span className='material-symbols-outlined'>home</span>
            <span>گیت هاب</span>
          </button>
        </div>
      </form>
    </div>
  )
}
