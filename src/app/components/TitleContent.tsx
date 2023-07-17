interface TitleProps {
  header: string, 
  index: number,
}

export const TitleContent: React.FC<TitleProps> = (props: TitleProps) => {
  return (
    <div>
      <div key={props.header} className={`w-screen h-full flex overflow-hidden tracking-[2em] items-center justify-center transition duration-200 ease-in-out uppercase font-bold`}>
        <h1 className="text-[15vw]">{props.header}</h1>
      </div>
    </div>
  )
}
