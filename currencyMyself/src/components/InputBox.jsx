import {React} from "react";

function InputBox(
    label,
    amount=0,
    onAmountChange,
    className='',
    setCurrency='usd',
    onSetCurrencyChange,
    amountDisable=true,
    currencyDisable=true,
    currencyOptions=[]
    
){
    
    
    return (
        <>
            <div className='bg-black text-white h-40 w-full rounded-xl bg-opacity-95 block m-5'>
                <h1 className='ml-5 font-bold text-xl'>TO</h1>
                <div className='flex items-center m-2 h-16'>
                    <label className='w-full'>Amount<input type='number' min='0' className='rounded-lg text-black bg-slate-300 h-12 w-5/6 m-2'/></label>
                </div>
                <div>
                    <label className='flex justify-end items-center'>
                    Currency:
                        <select className='m-2 w-12 rounded-sm' value='' disabled={currencyDisable}>
                        
                        </select>
                    </label>
                </div>
            </div>
        </>
    )
}

export default InputBox

{/* <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
    <div className="w-1/2">
    <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
    {label}
    </label>
    <input
    id={amountInputId}
    className="outline-none w-full bg-transparent py-1.5"
    type="number"
    placeholder="Amount"
    disabled={amountDisable}
    value={amount}
    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
    />
    </div>
    <div className="w-1/2 flex flex-wrap justify-end text-right">
    <p className="text-black/40 mb-2 w-full">Currency Type</p>
    <select
    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
    value={selectCurrency}
    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
    disabled={currencyDisable}
    >
    
    {currencyOptions.map((currency) => (
        <option key={currency} value={currency}>
        {currency}
        </option>
        ))}
        
        </select>
        </div>
        </div>
        ); */}