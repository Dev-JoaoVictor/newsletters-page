interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return (
    <h1 className="text-[40px] leading-[50px] font-bold text-GREY_300 lg:text-[56px]">
      {text}
    </h1>
  )
}