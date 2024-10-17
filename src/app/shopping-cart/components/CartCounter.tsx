'use client'
import { useState } from "react";


interface Props {
  value?: number;
}


export const CartCounter = ({ value = 0 }: Props) => {

  const [counter, setCounter] = useState(value);

  const incrementar = (numero: number = 1): void => {
    setCounter(counter + numero)
  }

  const decrementar = (numero: number = 1): void => {
    setCounter(counter - numero)
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <span className="text-9xl">
        {counter}
      </span>
      <div className="flex">
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 "
          onClick={() => incrementar()}
        >+1</button>
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 " onClick={() => decrementar()}>-1</button>
      </div>
    </div>
  )
}
