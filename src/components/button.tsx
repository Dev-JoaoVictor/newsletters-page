interface ButtonProps {
  message: string
}

export function Button({ message }: ButtonProps) {
  return (
    <button className="bg-GREY_300 h-14 text-white text-center text-sm font-semibold rounded-lg">
      {message}
    </button>
  )
}