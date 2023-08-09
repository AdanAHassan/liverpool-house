import { useContext, createContext, useReducer } from "react"

const ProgressBarContext = createContext()
const ProgressBarUpdateContext = createContext()

// Can be used to update the progrss of the user
// Increment by one after every stage
//
//
// I dont know how or why you will need 28 steps for a food payment process, it seems like it would lead to a bad user experience and reduce the number of people completing the 

export const ACTIONS = {
  INCREMENT_PROGRESS_BAR: "increment-progress-bar-count",
  DECREMENT_PROGRESS_BAR: "DEcrement-progress-bar-count"
}

const reducer = (progressBar, action) => {
  switch (action.type){
    case ACTIONS.INCREMENT_PROGRESS_BAR:
      if (progressBar.count < 28){
        return { count: progressBar.count + 1}
      }
      return progressBar
    case ACTIONS.DECREMENT_PROGRESS_BAR:
      if (progressBar.count > 0){
        return { count: progressBar.count - 1}
      }
      return progressBar
    default:
      return state
  }
}

export const useProgressBar = () => useContext(ProgressBarContext)

export const useProgressBarUpdate = () => useContext(ProgressBarUpdateContext)

export const ProgressBarProvider = ({ children }) => {

  const [progressBar, dispatch] = useReducer(reducer, { count: 0 })
 

  return (
    <ProgressBarContext.Provider value={progressBar}>
      <ProgressBarUpdateContext.Provider value={dispatch}>
        {children}
      </ProgressBarUpdateContext.Provider>
    </ProgressBarContext.Provider>
  )
}
