import { useState } from 'react'

function Password() {
  const [pStatus, setPStatus] = useState(false)

  return (
    <div className='password'>
      <input type={pStatus ? 'text' : 'password' }/>
      <button onClick={()=>setPStatus(!pStatus)}> {pStatus ? 'Hide' : 'Show'} </button>
    </div>
  )
}

export default Password;
