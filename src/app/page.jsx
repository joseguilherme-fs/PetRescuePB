'use client'
import { useState } from 'react'
import DesapBody from '@/components/desapComponents/DesapBody'
import AdoteBody from '@/components/adoteComponents/AdoteBody'


export default function Home(){
  // Status dos desaparecidos //
  const [statusDesapBody, setStatusDesapBody] = useState(true)
  const alternarDesapBody = () => {
    setStatusDesapBody(!statusDesapBody)
  };

  // Status da adoção //
  const [statusAdoteBody, setStatusAdoteBody] = useState(false)
  const alternarAdoteBody = () => {
    setStatusAdoteBody(!statusAdoteBody)
  };

  return (
    <>
        {statusDesapBody && (<DesapBody
        alternarDesapBody={alternarDesapBody}
        alternarAdoteBody={alternarAdoteBody}
        />)}
        {statusAdoteBody && (<AdoteBody
        alternarDesapBody={alternarDesapBody}
        alternarAdoteBody={alternarAdoteBody}
        />)}
    
    </>
  )
}
