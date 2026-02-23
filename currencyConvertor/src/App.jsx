import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const[amount,setAmount]=useState(0)
  const[from,setFrom]=useState("inr")
  const[to,setTo]=useState("usd")
  const[convertedAmount,setconvertedAmount]=useState(0)
  
  const currencyInfo=useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert=()=>{
    (setconvertedAmount(amount * currencyInfo[to]))
  }

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://img.freepik.com/premium-photo/globe-covered-different-currency-notes-representing-interconnectedness-global-finance-globe-made-entirely-different-currencies-from-around-world_538213-76826.jpg?w=2000')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto 
bg-white/70 backdrop-blur-lg 
shadow-xl rounded-2xl 
border border-white/30 p-6">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className=" absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-md bg-slate-500 text-white hover:bg-slate-600 transition"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full py-3 rounded-xl 
bg-slate-600 
hover:bg-slate-700 
text-white font-medium 
transition-all duration-300 
shadow-md hover:shadow-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
