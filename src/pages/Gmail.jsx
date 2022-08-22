import React from 'react'
import { Button } from '../components'
import { FcGoogle } from 'react-icons/fc'
import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

const Gmail = () => {

  const { currentColor } = useStateContext()

  return (
    <div className='m-2, md:m-10 mt-24 p-2
    md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Gmail' />  
      <div className='flex justify-center '> 
        <Button
                color='white'
                bgColor={currentColor}
                text='Login'
                borderRadius='10px'
                size='md'
              />
              
     </div>
    </div>
  )
}

export default Gmail;