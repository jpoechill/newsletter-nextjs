import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='bg-white overflow-hidden p-[0px] rounded-[30px] max-w-[930px] h-[640px] max-h-[640px]'>
        <div className="grid grid-cols-2 gap-0 h-full max-h-[640px]">
          <div className='text-[15px] pt-[80px] pl-[65px]'>
            <p className='text-4xl font-bold pb-[25px]'>Stay updated!</p>
            <p className='mb-5'>Join 60,000+ product managers receiving monthly updates on:</p>
            <p className='my-2'><img src="/icon-list.svg" className="inline mr-3" alt="" />Product discovery and building what matters</p>
            <p className='my-2'><img src="/icon-list.svg" className="inline mr-3" alt="" />Measuring to ensure updates are a success</p>
            <p className='my-2'><img src="/icon-list.svg" className="inline mr-3" alt="" />And much more!</p>

            <br /><br />

            <p>Email address</p>

            <br /><br />

            <input type="email" name="" id="" value="email@company.com" />
            <br />
            <button>
              Subscribe to monthly newsletter
            </button>
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

