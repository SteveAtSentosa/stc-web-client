import React, { createContext} from 'react'
import PT from 'prop-types'

export const UserContext = createContext('Users/steve')

export const UserProvider = ({ children }) => {

  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = { children: PT.element }
export default UserContext

