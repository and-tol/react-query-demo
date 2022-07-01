import React, { useState, createContext, useContext } from 'react'
import { ChildrenProps } from 'src/types/ChildrenProps'

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37023
// romenkova commented on Dec 26, 2020

// Create Context Object
export const AppContext = createContext(null) as React.Context<any>

// Create a provider for components to consume and subscribe to changes
export const AppContextProvider = ({ children }: ChildrenProps) => {
  const [flashMessage, setFlashMessage] = useState('')

  return (
    <AppContext.Provider value={ { flashMessage, setFlashMessage } }>
      { children }
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);
