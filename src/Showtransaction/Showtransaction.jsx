import React from 'react'

function Showtransaction({item:{items,amount,type}}) {
    console.log(items,amount,type)
    

    return (
        
           
            <div className= 'flex justify-between w-[380px] p-[10px] bg-[#ffffff] shadow-lg border-[2px] border-[solid] border-[#ffffff] rounded-md mt-[10px]'>
                <div >
                    <h3 className={`${type === 'Income' ? 'text-[#676b18] font-bold text-[20px]' : 'text-[red] font-bold text-[20px]'} `}>{items}</h3>
                </div>
                <div>
                    <h3 className={`${type === 'Income' ? 'text-[#676b18] font-bold text-[20px]' : 'text-[red] font-bold text-[20px]'}`}>{amount}</h3>
                </div>
            </div>
            
        
    )
}

export default Showtransaction
