import { TagContent } from "../page";
type propObj = {
  text: string,
  color: string
}

export default function TagDiv({props}: {props: TagContent}){
  
  return (
    <div className="flex flex-row gap-2">
      {
        Object.values(props).map((item: propObj) => (
          <button key={item.text} className={`rounded rounded-2xl border-2 border-black px-2 py-1 text-xs font-bold`} style={{backgroundColor: item.color}}>{item.text}</button>
        ))
      }
    </div>
  )
}
