import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <div className='bg-white overflow-hidden p-[0px] rounded-[30px] max-w-[930px] h-[640px] max-h-[640px]'>
        <div className="grid grid-cols-2 gap-0 h-full max-h-[640px]">
          <div className='text-[15px] pt-[80px] pl-[60px] pr-[30px]'>
            <p className='text-[58px] font-bold pb-[25px]'>Stay updated!</p>
            <p className='mb-5'>Join 60,000+ product managers receiving monthly updates on:</p>
            <p className='my-2'><img src="/icon-list.svg" className="inline mr-3" alt="" />Product discovery and building what matters</p>
            <p className='my-2'><img src="/icon-list.svg" className="inline mr-3" alt="" />Measuring to ensure updates are a success</p>
            <p className='my-2'><img src="/icon-list.svg" className="inline mr-3" alt="" />And much more!</p>
            <p className='mt-10 py-2 font-bold text-xs'>Email address</p>
            <input className="border rounded-xl w-full h-[55px] p-5" type="email" name="" id="" placeholder="email@company.com" />
            <Link href="/about">
              <button className="rounded-xl bg-[#242642] text-white font-bold w-full h-[55px] p-3 my-5 hover:text-blac hover:bg-gradient-to-r from-[#FA5076] to-[#F86739] hover:shadow-2xl hover:shadow-[#FF5E5C] hover:transition-all">Subscribe to monthly newsletter</button>
            </Link>
          </div>
          <div className="h-full  max-h-[640px] p-[20px]">
            <div className='rounded-[20px] fit-img top-0'>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}

