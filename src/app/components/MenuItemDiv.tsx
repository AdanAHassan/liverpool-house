import React from "react"
import { BiDish } from "react-icons/bi"
import TagDiv from "@/app/components/TagDiv"
import { MenuContent } from "../page"
import CountDiv from "./CountDiv"
import { AiOutlinePlusCircle } from "react-icons/ai"

export default function MenuItemDiv({menuItemData, setHoverIndex, index}: {menuItemData: MenuContent, setHoverIndex: React.Dispatch<React.SetStateAction<number>>, index: number}): JSX.Element {
  return (
    <div onMouseOver={() =>  setHoverIndex(index + 1)} onMouseOut={() => setHoverIndex(0)} className="group bg-white text-black h-full border border-black border-2 overflow-hidden relative">
      <div className="absolute top-0 h-[7.5vh] items-center px-4 flex flex-row w-full justify-between z-50">
        <div className="group-hover:invisible visible transition duration-500 ease-in-out font-bold text-xl">0{index+1}</div>
        <div className="group-hover:rotate-45 duration-500 ease-in-out rounded-full text-3xl"><AiOutlinePlusCircle /></div>
      </div>
      <div className="w-full group-hover:h-[35vh] h-[37.5vh] translate-y-[-30vh] group-hover:translate-y-0 duration-500 ease-in-out group-hover:pt-4 pt-0 px-6 pb-2 border-b-2 border-black">
        <CountDiv />
      </div>
      <div className="flex flex-col justify-between text-start h-[42.5vh] group-hover:translate-y-0 translate-y-[-30vh] duration-500 ease-in-out px-6 pb-6 pt-3">
        <div className="h-1/2 w-full flex flex-col gap-1">
          <div><TagDiv props={menuItemData.tags}
          /></div>
          <div className="text-xl font-bold">{menuItemData.title}</div>
          <div className="text-xs text-gray-700">{menuItemData.served}</div>
        </div>
        <div className="h-1/2 w-full flex flex-col justify-end gap-4">
          <div className="text-sm text-gray-950">{menuItemData.summary.slice(0, 100)}</div>        
          <button className="rounded border-2 border-black px-2 py-1 flex flex-row items-center gap-[6px] w-fit">
            <BiDish />
            <p className="text-xs font-medium">{menuItemData.servingSize>1 ? `${menuItemData.servingSize} People` : "1 Person" }</p>
          </button>
        </div>
      </div>
    </div>
  )
}
