import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between md:h-screen">
      <div className='bg-white m-auto md:overflow-hidden md:rounded-[30px] h-full w-full md:w-[930px] md:h-[640px] md:min-h-[640px]'>
        <div className="grid md:grid-cols-2 gap-0 h-full md:max-h-[640px]">
          <img src="/illustration-sign-up-mobile.svg" className="w-full md:hidden" alt="" />
          <div className='text-[15px] md:pt-[80px] p-[40px] md:pl-[60px] md:pr-[30px]'>
            <p className='text-[58px] font-bold pb-[25px]'>Stay updated!</p>
            <p className='mb-5'>Join 60,000+ product managers receiving monthly updates on:</p>
            <p className='my-2'><img src="/icon-list.svg" className="inline mr-3" alt="" />Product discovery and building what matters</p>
            <p className='my-2'><img src="/icon-list.svg" className="inline mr-3" alt="" />Measuring to ensure updates are a success</p>
            <p className='my-2'><img src="/icon-list.svg" className="inline mr-3" alt="" />And much more!</p>
            <p className='mt-10 py-2 font-bold text-xs'>Email address</p>
            <p className='font-bold text-xs'>Valid email required</p>
            <input className="border rounded-xl w-full h-[55px] p-5" type="email" name="" id="" placeholder="email@company.com" />
            <Link href="/about">
              <button className="rounded-xl bg-[#242642] text-white font-bold w-full h-[55px] p-3 my-5 hover:text-blac hover:bg-gradient-to-r from-[#FA5076] to-[#F86739] hover:shadow-2xl hover:shadow-[#FF5E5C] hover:transition-all">Subscribe to monthly newsletter</button>
            </Link>
          </div>
          <div className="h-full  max-h-[640px] p-[20px] hidden md:block">
            <div className='rounded-[20px] fit-img top-0'>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}



