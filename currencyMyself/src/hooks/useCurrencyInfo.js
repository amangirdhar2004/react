import { React, useEffect,useState } from "react"
const [data,setData]=useState({});
function useCurrencyInfo(currency){
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((response) => response.json() )
        .then((data)=> setData(data[currency]))
    },[currency])

    return data;
}

export default useCurrencyInfo;