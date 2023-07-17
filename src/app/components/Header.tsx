import React from "react"
import { TitleContent } from "./TitleContent"
import { Navbar } from "./Navbar"

interface HeaderProps {
  headerTextArray: {
    header: string, 
    index: number
  }[]
  hoverIndex: number
  setHoverIndex?: React.SetStateAction<number>
}



export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <div className={`relative h-full text-black overflow-hidden`} >
      <div className="absolute z-30"><Navbar /></div>
      <div className={`flex flex-row h-full w-fit overflow-x-scroll ${
  props.hoverIndex === 1 ? "translate-x-[-20%]" : 
props.hoverIndex === 2 ? "translate-x-[-40%]" :
props.hoverIndex === 3 ? "translate-x-[-60%]" :
props.hoverIndex === 4 ? "translate-x-[-80%]" : "translate-x-0"
} duration-1000 ease-in-out`}>
      <div className="w-screen h-full flex items-center tracking-[2em] justify-center overflow-hidden uppercase font-bold">
        <h1 className="text-[15vw]">Menu</h1>
      </div>
      {
        props.headerTextArray.map((item) => (
          <TitleContent 
            key={item.index}
            header={item.header}
            index={item.index}
          />
        ))
      }
      </div>
    </div>
  )
}
