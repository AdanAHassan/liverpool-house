import { useState } from "react"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"

export default function CountDiv(){

  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-10 h-full group-hover:justify-between duration-1500 ease-in-out pb-2">
      <button className="px-4 py-2 bg-black text-white rounded-full self-start text-sm">Quantity</button>
      <div className="w-full flex flex-row px-12 text-2xl items-center justify-around">
        <div 
          className="hover:cursor-pointer hover:bg-black hover:text-white rounded rounded-full duration-200"
          onClick={() => {
            if(count <= 0){
              setCount(0)
            } else {
              setCount(count - 1)
            }
        }}>
          <AiOutlineMinusCircle />
        </div>
        <div className="text-[100px] font-bold w-full text-center">{count >= 10 || count===0 ? count : "0" + count }</div>
        <div className="hover:cursor-pointer hover:bg-black hover:text-white rounded rounded-full duration-200" onClick={() => setCount(count + 1)}>
          <AiOutlinePlusCircle />
        </div>
      </div>
      <button className="px-2 py-1 bg-white text-xs border-2 border-black rounded-full hover:cursor-pointer hover:bg-black hover:text-white duration-200 ease-in-out font-bold">Add to Order</button>
    </div>
  )
}
