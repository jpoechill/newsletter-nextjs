import Link from 'next/link';
import { useSearchParams } from 'next/navigation'

export default function About() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  console.log(searchParams)

  return (
    <main className="flex flex-col items-center justify-between h-screen">
      <div className='bg-white m-auto overflow-hidden md:rounded-[30px] h-full w-full md:h-[520px] min-h-[520px] md:w-[520px]'>
        <div className='flex h-full'>
          <div className='m-auto p-[60px]'>
            <img src="/icon-list.svg" className="inline mr-3 h-[60px]" alt="" />
            <p className='text-[58px] font-bold pb-[20px] leading-tight py-5'>Thanks for subscribing!</p>
            <p className='pb-4'>
              A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.
            </p>
            <Link href="/">
              <button className="rounded-xl bg-[#242642] text-white font-bold w-full h-[55px] p-3 my-5 hover:text-blac hover:bg-gradient-to-r from-[#FA5076] to-[#F86739] hover:shadow-2xl hover:shadow-[#FF5E5C] hover:transition-all">
                Dismiss message
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

