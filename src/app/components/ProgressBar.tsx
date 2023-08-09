import { useProgressBar, useProgressBarUpdate, ACTIONS } from "@/app/providers/ProgressBarProvider"

export const ProgressBar = () => {
  
  const progressBar = useProgressBar()
  const dispatch = useProgressBarUpdate()

  const incrementProgressBar = () => dispatch({ type: ACTIONS.INCREMENT_PROGRESS_BAR })
  const decrementProgressBar = () => dispatch({ type: ACTIONS.DECREMENT_PROGRESS_BAR })

  return (
    <div className="flex flex-row px-12 py-12 w-screen h-fit justify-between items-center relative">
      <button className="bg-black p-3 rounded-full" onClick={decrementProgressBar}></button>
      <div className="flex flex-row border-black border-4 bg-white justify-start w-full h-6 mx-2 duration-500 ease-in-out relative">
        <div 
          className="bg-black h-full" 
          style={{ 
            width: `${(progressBar.count/28)*100}%`, 
            transition: "width .5s ease-out"
          }}>
        </div>
        <div 
          className="flex flex-col gap-[2px] mt-6 items-center bg-blue-400 w-0">
          <div className="bg-black p-1 rounded-full"></div>
          <div className="text-xs font-bold">Here</div>
        </div>
        <h2 className="absolute right-0 top-[-36px] font-bold text-xs">{progressBar.count} of 28</h2>
      </div>
      <button className="bg-black p-3 rounded-full" onClick={incrementProgressBar}></button>
    </div>
  )
}


