import React from 'react';
import {useState} from 'react';
import { useFormState } from 'react-dom';
let pass1
function Password(){
    const passwordGenerator=({length,numStatus,charStatus})=> {
        let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let pass=''
        if(numStatus) str+='1234567890'
        if(charStatus) str+='!@#$%^&*()_+=-{}[]?'
        for (let i = 0; i < length; i++) {
            pass+=str[Math.floor(Math.random()*str.length)]
        }
        return pass
    }
    pass1=passwordGenerator({length:10, numStatus:true,charStatus:true})
    
    
    return (
    <>
<div className='text-center text-white border border-white border-solid w-11/12 ml-8 bg-gray-900 m-0 rounded-2xl overflow-hidden h-56'>
        <br/>
        <h1 className='text-4xl'>Password Generator</h1>
        <br/>
        <span><input 
        type='text'
        className='w-4/6 h-12 text-black'
        value={pass1}></input>
        <button id="button" className='bg-orange-500 h-14 rounded-xl w-16'>Copy</button></span>
        <br/><br/>
        <label className='text-white ml-2'>Length<input value={length}className='ml-1'id="lengthPassword"type='range' min="0" max="100"/></label>
        <label className='text-white ml-2'><input value={numAllowed}id='numAllowed' type='checkbox'/>Numbers</label>
        <label className='text-white ml-1'><input value={charAllowed} id='charAllowed' type='checkbox'/>Characters</label>
        </div>
        </>
    )
}

export default Password