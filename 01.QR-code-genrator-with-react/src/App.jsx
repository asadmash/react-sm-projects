import { useEffect, useRef, useState } from "react";
import GenerateQR from './components/GenerateQR';



function App() {
  // state for store and update input value
  const [inputValue, setInputValue] = useState('');
  // state for hold and manage qrcode image
  const [qrcode, setQrcode] = useState('');
  //input ref
  const inputRef  = useRef(null);
 
  
return(
  <div className='h-screen w-screen bg-[#536493] flex justify-center items-center'>
    <div className="container w-[400px] h-auto bg-white px-4 py-3 rounded-md">
      <h2 className="font-bold mb-3">Enter Your Text or URL</h2>
    <input type="text" ref={inputRef} className={`qr-text-inp border rounded w-full p-2 outline-none`} placeholder='Text or URL' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    <div className={`qr-box my-2 overflow-hidden transition-[max-height] duration-1s ease-in-out  ${qrcode ? 'max-h-[300px] opacity-100' : 'max-h-[0] opacity-0'}`}>
      {/* when qrcode is not empty the image will be visible */}
      {qrcode && <img src={qrcode} className="mx-auto my-4 border p-2 rounded"/>}
    </div>
    <button className="generateBtn bg-blue-600 text-white px-5 py-2 border-none rounded-sm w-full font-bold tracking-wider" onClick={() => GenerateQR(inputValue, setQrcode, inputRef)}>
      Generate QR Code
    </button>
    </div>
  </div>
)
}



export default App;