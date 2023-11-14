'use client'

import { useForm } from "react-hook-form";
import Image from 'next/image'
import Link from 'next/link';
import Form from '/components/Form'
export default function Home() {

  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log('Hello123')
  })

  return (
    <main className="flex flex-col items-center justify-between md:h-screen">
      <div className='bg-white m-auto md:overflow-hidden md:rounded-[30px] h-full w-full md:w-[930px] md:h-[640px] md:min-h-[640px]'>
        <div className="grid md:grid-cols-2 gap-0 h-full md:max-h-[640px]">
          <img src="/illustration-sign-up-mobile.svg" className="w-full md:hidden" alt="" />
          <div className='text-[15px] md:pt-[80px] p-[40px] md:pl-[60px] md:pr-[30px]'>
            <p className='text-[58px] font-bold pb-[25px]'>Stay updated!</p>
            <p className='mb-5'>Join 60,000+ product managers receiving monthly updates on:</p>
            <p className='my-2'><Image src="/icon-list.svg" width='20' height="20" className='inline mr-3' alt="Picture of the author" />Product discovery and building what matters</p>
            <p className='my-2'><Image src="/icon-list.svg" width='20' height="20" className='inline mr-3' alt="Picture of the author" />Measuring to ensure updates are a success</p>
            <p className='my-2'><Image src="/icon-list.svg" width='20' height="20" className='inline mr-3' alt="Picture of the author" />And much more!</p>
            <Form />
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



