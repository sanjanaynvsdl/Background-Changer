import { useState } from 'react'
import './App.css'


//In this, The usage of useState hook, And how call-back works in terms of state-management!
function App() {

  const [color,setColor]=useState("olive");


//I can pass this function or use setColor(but in call-back)
//Else it will directly execute on rendering the component!
//onClick = {()=> (changeColor(color))}
  function changeColor(color) {
    setColor(color);
  }
  
//Used a aesthetic color pallet!
  return (
    <>
      <h1 className="text-3xl font-bold pt-2 mb-6 text-center text-gray-800">Discover Aesthetic Colors Just by Clicking a Button! 🎨</h1>
      <div className='w-full h-screen  duration-200 ' style = {{background:color}}>
        <div className ='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center bottom-12 gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=> setColor('#E1EDEC')} className='outline-none px-4 py-1  rounded-full shadow-lg text-black font-bold'  style={{background:'#E1EDEC'}}>Pale Cyan</button>
            <button onClick={() =>setColor('#979D99')} className='outline-none px-4 py-1  rounded-full shadow-lg text-black font-bold' style={{background:'#979D99'}}>Stone Grey</button>
            <button onClick={()=>setColor('#A5A4B5')} className='outline-none px-4 py-1  rounded-full shadow-lg text-black font-bold' style={{background:'#A5A4B5'}}>Grayish Purple</button>
            <button onClick={()=>setColor('#CFADAF')} className='outline-none px-4 py-1  rounded-full shadow-lg text-black font-bold' style={{background:'#CFADAF'}}>Dusty Rose</button>
            <button onClick={()=>setColor('#7C5A66')} className='outline-none px-4 py-1  rounded-full shadow-lg text-black font-bold' style={{background:'#7C5A66'}}>Mauve Mirage</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
