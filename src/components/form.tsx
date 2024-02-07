import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
  email: z.string().min(1, "email is required").email('valid email required')
})

type FormData = z.infer<typeof schema>;


interface FormProps {
  children: React.ReactNode
}

export function Form({ children }: FormProps) {

  const { register, handleSubmit, formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  });

  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-6'
    >
      <div className='flex flex-col gap-2 text-GREY_300'>
        <label
          htmlFor="email"
          className='text-xs font-bold text-GREY_300 flex justify-between'>
          Email address
          {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
        </label>
        <input
          {...register('email')}
          id="email"
          type="text"
          placeholder="email@company.com"
          className={`h-14 border-2 border-GREY_100 rounded-lg p-6 placeholder:text-base outline-none 
        ${errors.email && 'bg-red-100 bg-opacity-8 border-red-500 placeholder:text-red-500'}`} />
      </div>
      {children}
    </form>
  )
}