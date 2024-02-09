interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return (
    <h1 className="text-[40px] leading-10 font-bold text-GREY_300">
      {text}
    </h1>
  )
}