import React from 'react'

export default function Contact({txt,delf,txttel,txtville}) {
  return (
    <div>
      <input type="text"  readOnly  className='inp2'   value={txt}    />  
<input type="text"  readOnly    className='inp1' value={txttel}    /> 
<input type="text"  readOnly  className='inp3'   value={txtville}    /> 
 

<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" style={{color:"red"}} class="bi bi-person-x" viewBox="0 0 16 16" onClick={delf}>
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z"/>
</svg>
    </div>
  )
}
