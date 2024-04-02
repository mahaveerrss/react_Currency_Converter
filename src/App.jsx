import { useEffect, useState } from "react";
import "./App.css";
import useCurrency from "./hooks/useCurrency";
function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [fromVal,setFromVal] = useState('')
  const [calculated,setCalculated] = useState('')

 
  const data = useCurrency(fromCurrency);
 
  const countries = Object.keys(data);

  useEffect(()=>{
    const convertedVal = data[toCurrency]
   
    const calcVal = Number(fromVal * convertedVal)
    setCalculated(calcVal.toFixed(2))

  },[fromVal,fromCurrency,toCurrency])

   const onSwap = () => {
     setFromCurrency(toCurrency)
     setToCurrency(fromCurrency)
    
     
   }
   
  

  return (
    <div className="flex flex-col flex-wrap gap-8">
      <h1 className="dancing-script text-white text-center flex-nowrap text-nowrap">
        Currency Converter
      </h1>
       
        <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse flex items-center flex-col sm:flex-row mb-4">
          <div className="flex">
            <label
              htmlFor="fiat-currency-input"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <div className="relative w-full">
              <input
                type="number"
                value={fromVal}
                onChange={(e)=> setFromVal(e.target.value)}
                id="fiat-currency-input"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder={`0 ${fromCurrency.toUpperCase()}`}
                required={true}
              />
            </div>
            <select
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              value={fromCurrency}
              onChange={(e) => {
                setFromCurrency(e.target.value);
              }}
              name="From"
              id="From"
            >
             
              {countries.map((country) => (
                <option value={country} key={country}>
                  {country.toUpperCase()}
                </option>
              ))}
            </select>
            
          </div>
          <button 
             onClick={()=> onSwap()}
            className="p-3 text-sm font-medium text-gray-500 focus:outline-none bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"
              />
            </svg>
            <span className="sr-only">Convert currency</span>
          </button>
          <div className="flex">
            
            <div className="relative w-full">
              <input
                type="number"
                id="crypto-input"
                value={calculated}
                readOnly={true}
                className="block p-2.5 w-full text-green-500 font-bold cursor-default z-20 text-sm   bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-green-500 dark:focus:border-blue-500"
                placeholder={`0 ${toCurrency.toUpperCase()}`}
                 
              />
            </div>
            <select
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              value={toCurrency}
              onChange={(e) => {
                 setToCurrency(e.target.value);
              }}
              name="To"
              id="To"
            >
              {countries.map((country) => (
                <option value={country} key={country}>
                  {country.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
    
    </div>
  );
}

export default App;
