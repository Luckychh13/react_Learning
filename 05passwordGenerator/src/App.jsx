import { useState,useCallback ,useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+{}~"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()* str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
    
 useEffect(()=>{
  passwordGenerator()
 },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-6 my-8  text-orange-500 bg-gray-800 '>
        <h1 className='text-white text-center text-lg mb-4'>Password generator</h1>
        <div className='flex  rounded-lg overflow-hidden '>
          <input 
           type="text"
           value={password}
           className="outline-none w-full py-2 px-3 text-orange-600 bg-gray-100"
           placeholder="Password"
           readOnly 
           ref={passwordRef}
          />
          <button
           onClick={copyPasswordToClipBoard}
           className='outline-none hover:bg-blue-600 bg-blue-700 text-white px-3
           py-0.5 shrink-0'
           >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
             type="range"
             min={6}
             max={50}
             value={length}
             className='cursor-pointer py-4'
             onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked={numberAllowed}
             id="numberInput"
             onChange={()=>{
               setNumberAllowed((prev)=>!prev);
              }} 
            />
            <label htmlFor="numberInput" className='hover:text-orange-400'>Nunmbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked={charAllowed}
             id="charInput"
             onChange={()=>{
               setCharAllowed((prev)=>!prev);
              }} 
            />
            <label htmlFor="charInput"className='hover:text-orange-400'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
