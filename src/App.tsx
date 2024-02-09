import iconList from './assets/icon-list.svg'

import { Form } from './components/form';
import { Title } from './components/title';

import { useMediaQuery } from 'react-responsive'

import bannerMobile from './assets/illustration-sign-up-mobile.svg'
import bannerDesktop from './assets/illustration-sign-up-desktop.svg'

export function App() {

  const isMobile = useMediaQuery({
    query: '(max-width: 765px)'
  })

  return (
    <main className="md:bg-GREY_200 h-screen md:p-10 lg:p-10 lg:flex items-center justify-center">
      <div className='bg-white rounded-2xl md:flex items-center md:p-2 flex-row-reverse lg:p-6 lg:gap-16'>
        <div className='md:flex-auto'>
          {
            isMobile ? (
              <img src={bannerMobile} className='w-full' alt='banner de apresentação' />
            ) :
              (
                <img src={bannerDesktop} alt='banner de apresentação' />
              )
          }
        </div>
        <section className='py-10 px-6 flex flex-col gap-10 lg:justify-center lg:max-w-[500px]'>
          <div className='flex flex-col gap-6 text-GREY_300  '>
            <Title text='Stay updated!' />
            <p className='lg:text-xl text-wrap'>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className='flex flex-col gap-2 text-base lg:text-lg'>
              <li className='flex gap-4'>
                <img src={iconList} alt="" />
                <p>Product discovery and building what matters</p>
              </li>
              <li className='flex gap-4'>
                <img src={iconList} alt="" />
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li className='flex gap-4'>
                <img src={iconList} alt="" />
                <p>And much more!</p>
              </li>
            </ul>
          </div>
          <Form />
        </section>
      </div>
    </main>
  )
}


