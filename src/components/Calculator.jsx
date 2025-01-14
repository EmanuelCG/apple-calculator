import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    const operators = ["+", "-", "x", "÷"];
    const lastChar = input.slice(-1); // Último carácter ingresado
  
    if (input === "Error") {
      // Reinicia el estado si hubo un error
      setInput(value);
      setDisplay(value);
      return;
    }
  
    if (operators.includes(value)) {
      // Maneja operadores consecutivos
      if (operators.includes(lastChar)) {
        if (value === "-") {
          // Permite un signo negativo después de un operador
          setInput((prev) => prev + value);
          setDisplay((prev) => prev + value);
        } else {
          // Reemplaza todos los operadores consecutivos por el último
          setInput((prev) => prev.replace(/[-+x÷]+$/, "") + value);
          setDisplay((prev) => prev.replace(/[-+x÷]+$/, "") + value);
        }
      } else {
        setInput((prev) => prev + value);
        setDisplay((prev) => prev + value);
      }
      return;
    }
  
    if (value === ".") {
      // Evita más de un punto decimal en el mismo número
      const parts = input.split(/[+\-x÷]/); // Divide por operadores
      if (parts[parts.length - 1].includes(".")) return;
      setInput((prev) => prev + value);
      setDisplay((prev) => prev + value);
      return;
    }
  
    // Maneja números y otros valores válidos
    setInput((prev) => (prev === "0" ? value : prev + value));
    setDisplay((prev) => (prev === "0" ? value : prev + value));
  };
  
  const calculate = () => {
    try {
      // Preprocesa la expresión antes de evaluarla
      let sanitizedInput = input
        .replace(/x/g, "*") // Reemplaza x por *
        .replace(/÷/g, "/") // Reemplaza ÷ por /
        .replace(/([-+x÷]){2,}/g, "$1") // Reemplaza operadores consecutivos por el último
        .replace(/([+\-x÷])$/, ""); // Elimina operadores al final
  
      const calculation = eval(sanitizedInput); // Evalúa la expresión
  
      setInput(calculation.toString());
      setDisplay(calculation.toString());
    } catch {
      setInput("Error");
      setDisplay("Error");
    }
  };
  

  const clear = () => {
    setInput("");
    setDisplay("");
  };

  const buttons = [
    { key: "seven", value: 7 },
    { key: "eight", value: 8 },
    { key: "nine", value: 9 },
    { key: "four", value: 4 },
    { key: "five", value: 5 },
    { key: "six", value: 6 },
    { key: "one", value: 1 },
    { key: "two", value: 2 },
    { key: "three", value: 3 },
    { key: "zero", value: 0 },
    { key: "decimal", value: "." },
  ];

  const buttonsOperators = [
    { key: "add", value: "+" },
    { key: "multiply", value: "x" },
    { key: "subtract", value: "-" },
    { key: "divide", value: "÷" },
  ];

  return (
    <div className="h-[850px] w-[450px] bg-gray-300 rounded-[80px] p-[10px]">
      <div className="flex flex-col bg-black h-full rounded-[70px] justify-around">
        <div className="mt-20 m-4 h-[200px] text-[80px] flex flex-col justify-end place-items-end overflow-hidden">
          <div className="text-yellow-500 text-3xl pr-2 overflow-y-auto w-[390px] h-[70px] scrollable flex justify-end text-wrap">
            {display}
          </div>
          <span
            id="display"
            className="text-gray-200 overflow-x-scroll w-[390px] scrollable text-right"
          >
            {input || "0"}
          </span>
        </div>
        <div className="flex gap-4 justify-end pr-4">
          <button
            onClick={() => clear()}
            id="clear"
            className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none"
          >
            <span>AC</span>
          </button>
        </div>
        <div className="flex justify-around relative">
          {/* Caculate button */}
          <button
            id="equals"
            onClick={calculate}
            className={`bg-yellow-500 bottom-0 right-[138px] absolute hover:bg-yellow-400 transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none`}
          >
            <span>=</span>
          </button>

          {/* Numbers buttons */}
          <div className="grid grid-cols-3 gap-4">
            {buttons.map(({ key, value }) => (
              <button
                key={key}
                onClick={() => handleClick(value.toString())}
                id={key}
                className={` ${
                  value === "="
                    ? "bg-yellow-500 hover:bg-yellow-400"
                    : "bg-[#303030]"
                } hover:bg-[#484848] transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none`}
              >
                <span>{value}</span>
              </button>
            ))}
          </div>
          {/* Operators logics */}
          <div className="grid grid-cols-1 gap-4 ">
            {buttonsOperators.map(({ key, value }) => (
              <button
                key={key}
                onClick={() => handleClick(value.toString())}
                id={key}
                className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 h-[80px] w-[80px] rounded-full text-white text-[40px] font-thin items-center justify-center flex leading-none"
              >
                <span>{value}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
