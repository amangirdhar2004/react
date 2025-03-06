import {React} from "react";
function Card({text, title}){
    let arr=["aman", "reya", "CGC", "React", "Tailwind"]

    arr.map((ele)=>{
        
    })
        return(
            <div id="card">
                <div className="p-1 m-3 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
          <div className=" bg-black sm:p-10 p-6 rounded-xl">
            <div className="">
              <h5 className="text-xl font-bold text-gray-200">{title}</h5>
    
              <p className="mt-2 text-sm text-gray-400">
                {text}
              </p>
            </div>
          </div>
        </div>
            </div>
        )
}

export default Card;