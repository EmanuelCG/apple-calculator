import { useRef } from "react";
import { useState } from "react";

function Calculator() {

    const [firstNumber, setFirstNumber] = useState(null)
    const [secondNumber, setSecondNumber] = useState(null)



    const calculo = (operator) => {
        switch (operator) {
            case '+':
                return firstNumber + secondNumber
            case '-':
                return firstNumber - secondNumber
            case 'x':
                return firstNumber * secondNumber
            case '/':
                return firstNumber / secondNumber
            default:
                return 0
        }
    }

  return (
    <div className="h-[90vh] w-[450px] bg-gray-300 rounded-[80px] p-[10px]">
      <div className="flex flex-col bg-black h-full rounded-[70px] justify-around">
        <div className="mt-20 m-4 h-[200px] text-[80px] flex flex-col justify-end place-items-end">
          <span className="text-yellow-500 text-3xl pr-2">40+20.70</span>
          <span className="text-gray-200">20.70</span>
        </div>
            <div className="flex gap-4 justify-end pr-4">
              <button id="clear" className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none">
                <span>AC</span>
              </button>
            </div>
        <div className="flex justify-around">
          {/* Numbers buttons */}
          <div className="grid grid-cols-3 gap-4">
            <button
              id="seven"
              className="bg-[#303030] hover:bg-[#484848] transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none"
            >
              <span>7</span>
            </button>
            <button
              id="eight"
              className="bg-[#303030] hover:bg-[#484848] transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none"
            >
              <span>8</span>
            </button>
            <button
              id="nine"
              className="bg-[#303030] hover:bg-[#484848] transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none"
            >
              <span>9</span>
            </button>
            <button
              id="four"
              className="bg-[#303030] hover:bg-[#484848] transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none"
            >
              <span>4</span>
            </button>
            <button
              id="five"
              className="bg-[#303030] hover:bg-[#484848] transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none"
            >
              <span>5</span>
            </button>
            <button
              id="six"
              className="bg-[#303030] hover:bg-[#484848] transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none"
            >
              <span>6</span>
            </button>
            <button
              id="one"
              className="bg-[#303030] hover:bg-[#484848] transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none"
            >
              <span>1</span>
            </button>
            <button
              id="two"
              className="bg-[#303030] hover:bg-[#484848] transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none"
            >
              <span>2</span>
            </button>
            <button
              id="three"
              className="bg-[#303030] hover:bg-[#484848] transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none"
            >
              <span>3</span>
            </button>
            <button
              id="zero"
              className="bg-[#303030] hover:bg-[#484848] transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none"
            >
              <span>0</span>
            </button>
            <button
              id="decimal"
              className="bg-[#303030] hover:bg-[#484848] transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none"
            >
              <span>.</span>
            </button>
            <button className="bg-yellow-500 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none">
              <span id="equals">=</span>
            </button>
          </div>
          {/* Operators logics */}
          <div className="grid grid-cols-1 gap-4 ">
            <button onClick={calculo('/')} id="divide" className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none">
              <span>/</span>
            </button>
            <button id="multiply" className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none">
              <span>x</span>
            </button>
            <button id="subtract" className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none">
              <span>-</span>
            </button>
            <button id="add" className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none">
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
