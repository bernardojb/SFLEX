'use client'
import * as React from 'react';

import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/contact-form/ContactForm';

const Home = () => {
  return (
    <>
      {/* INTRO */}
      <section className='bg-[#090909] relative h-screen w-full'>

      </section>

      {/* CONTATO */}
      {/* <section className='bg-cream py-24'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
              <h1 className='text-primary max-w-2xl text-xl font-semibold mb-4'>Faça uma cotação para sua empresa</h1>
              <p className='text-secondary max-w-md text-base'>Preencha os campos e em breve retornaremos o contato com as melhores soluções. Se preferir, entre em contato:</p>

              <div className=' flex flex-row justify-between'>
                <div className=''>
                  <p className='text-md text-secondary'>Whatsapp</p>
                  <p className='text-base text-primary font-bold'>(11) 91201-6426</p>
                </div>

                <div className=''>
                  <p className='text-md text-secondary'>Telefone</p>
                  <p className='text-base text-primary font-bold'>(11) 4328-0030</p>
                </div>
              </div>

              <div className=''>
                <p className='text-md text-secondary'>Email</p>
                <p className='text-base text-primary font-bold'>contato@briteinformatica.com.br</p>
              </div>
            </div>

            <div className='col-span-7 col-start-6'>
              <div className='bg-white shadow-xl h-[847px] w-full rounded-lg'></div>
            </div>
          </div>

        </div>
      </section> */}
      <ContactForm />
    </>
  )
}

export default Home
