import React, { useEffect, useState } from 'react';
import crc from 'crc';
import './App.css';

type BufferInput = string | ArrayBuffer | Buffer;

type CrcValue = {
    crc1: string;
    crc8: string;
    crc81wire: string;
    crc16: string;
    crc16ccitt: string;
    crc16modbus: string;
    crc16kermit: string;
    crc16xmodem: string;
    crc24: string;
    crc32: string;
    crcjam: string;
}

function App() {

  const [crcValue,setCrcValue] = useState<any>({})
  
  function generate (bufferInput:BufferInput): CrcValue{
    const crc1  = crc.crc1(bufferInput).toString(16);
    const crc8  = crc.crc8(bufferInput).toString(16);
    const crc81wire  = crc.crc81wire(bufferInput).toString(16);
    const crc16  = crc.crc16(bufferInput).toString(16);
    const crc16ccitt  = crc.crc16ccitt(bufferInput).toString(16);
    const crc16modbus  = crc.crc16modbus(bufferInput).toString(16);
    const crc16kermit  = crc.crc16kermit(bufferInput).toString(16);
    const crc16xmodem  = crc.crc16xmodem(bufferInput).toString(16);
    const crc24  = crc.crc24(bufferInput).toString(16);
    const crc32  = crc.crc32(bufferInput).toString(16);
    const crcjam  = crc.crcjam(bufferInput).toString(16);

    return {
      crc1,
      crc8,
      crc81wire,
      crc16,
      crc16ccitt,
      crc16modbus,
      crc16kermit,
      crc16xmodem,
      crc24,
      crc32,
      crcjam
    }

  }

  useEffect(()=>{
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    textarea.addEventListener("keyup", function(e) {
        this.style.height = "inherit";
        this.style.height = `${this.scrollHeight}px`;
    });
  },[])


  function onInput (value:string){
    if(!value){
      setCrcValue({})
      return
    }
    const crcvalue = generate(value)
    setCrcValue(crcvalue)
  }


  return (
    <div className="ccrrcc">
        <p className='ccrrcc-title'> <a 
          href="https://baike.baidu.com/item/%E5%BE%AA%E7%8E%AF%E5%86%97%E4%BD%99%E6%A0%A1%E9%AA%8C%E7%A0%81/10168758?fr=aladdin"
          target='_blank' rel="noreferrer"
          >
            CCRRCC - 循环冗余校验码（crc）</a> </p>
        <textarea 
          className='ccrrcc-input' 
          autoFocus
          placeholder='输入你要转换的字符串' 
          onChange={(e)=>{
            const {value} = e.target
            onInput(value)
          }}
        />
        <div className='ccrrcc-list'>
          {
            Object.keys(crcValue).map((item: string)=>{
              return <div key={item} className='ccrrcc-card'>
                <span>{item}</span>
                <p>{crcValue[item]}</p>
            </div>
            })
          }
        </div>
        
    </div>
  );
}

export default App;
