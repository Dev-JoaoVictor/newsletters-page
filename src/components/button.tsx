interface ButtonProps {
  message: string,
  handlePress?: () => void;
}

export function Button({ message, handlePress }: ButtonProps) {

  return (
    <button
      onClick={handlePress}
      className="bg-GREY_300 h-14 text-white text-center text-md font-semibold rounded-lg">
      {message}
    </button>
  )
}