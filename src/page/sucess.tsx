import { useCallback } from 'react';

import icon from '../assets/icon-success.svg'
import { Button } from '../components/button'
import { Title } from '../components/title'

import { useNavigate } from 'react-router-dom'

import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export function Sucess() {

  const navigate = useNavigate();
  const { email } = useContext(UserContext)

  const handleNavigate = useCallback(() => {
    navigate(-1)
  }, [navigate]);

  return (
    <main className='w-full h-screen px-6 flex items-center justify-center md:p-10 md:bg-GREY_200'>
      <div className='h-full flex flex-col justify-around bg-white md:p-10 md:w-[504px] h-[520px] rounded-3xl'>
        <div>
          <img
            className="w-16 h-16 mb-10"
            src={icon} alt="icon check" />
          <Title text='Thanks for subscribing!' />
          <p className='text-GREY_300 mt-6 md:text-xl'>A confirmation email has been sent to <strong className='text-GREY_300'>{email}</strong>. Please open it and click the button inside to confirm your subscription</p>
        </div>
        <Button
          handlePress={handleNavigate}
          message='Dismiss message' />
      </div>
    </main>
  )
}