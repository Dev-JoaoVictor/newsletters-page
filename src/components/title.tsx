interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return (
    <h1 className="text-[40px] font-bold text-GREY_300">
      {text}
    </h1>
  )
}