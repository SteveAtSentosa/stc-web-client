import { useEffect } from 'react'

export const useInitializeComponent = initFn => useEffect(initFn,
  [/* empty prop list mean only call on initial component render
     but not on subsequent state variable changes */])
