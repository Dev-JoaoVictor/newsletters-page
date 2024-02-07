import iconList from './assets/icon-list.svg'
import banner from './assets/illustration-sign-up-mobile.svg'

import { Form } from './components/form';
import { Title } from './components/title';
import { Button } from './components/button';

export function App() {
  return (
    <main className="w-full flex flex-col bg-white">
      <img src={banner} alt="" className='' />
      <section className='py-10 px-6 flex flex-col gap-10'>
        <div className='flex flex-col gap-6 text-GREY_300'>
          <Title text='Stay updated!' />
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className='flex flex-col   gap-2 text-base'>
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
        <div>
          <Form>
            <Button message='Subscribe to monthly newsletter' />
          </Form>
        </div>
      </section>
    </main>
  )
}


