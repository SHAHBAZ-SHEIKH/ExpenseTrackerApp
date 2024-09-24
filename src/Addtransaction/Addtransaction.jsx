import React, { useState } from 'react'

function Addtransaction({setTransaction,transaction}) {
    const [items,setItems] = useState("")
    const [amount,setAmount] = useState(0)
    const [type,setType] = useState("Income")

    const addHandler =()=>{
        const newTransaction = [...transaction]
        newTransaction.push({items,amount,type})
        setTransaction(newTransaction)
        setItems("")
        setAmount(0)
    }
    

    return (
        <div className='bg-[#1d2506] w-[400px] p-[10px] shadow-2xl '>
            
            <div className='flex items-center flex-col p-[20px] gap-[10px] bg-[#3f450f] mt-[10px] shadow-2xl rounded-md'>
                <div className='w-[300px]'>
                    <input onChange={(e)=>setItems(e.target.value)} value={items} className='w-[100%] p-[8px_10px] outline-none' type="text" placeholder='Enter Items' />
                </div>
                <div className='w-[300px]'>
                    <input onChange={(e)=>setAmount(e.target.value)} value={amount} className='w-[100%] p-[8px_10px] outline-none' type="number" placeholder='Enter Amount' />
                </div>
                <div className='w-[300px]'>
                    <select onChange={(e)=>setType(e.target.value)} className='w-[100%] p-[8px_10px]'>
                        <option >Income</option>
                        <option >Expense</option>
                    </select>
                </div>

                <div>
                    <button onClick={addHandler} className='text-[#ffffff] w-[100%] bg-[#676b18] p-[8px_12px] rounded-md cursor-pointer'>Add Transaction</button>
                </div>
            </div>

            

        </div>
    )
}

export default Addtransaction
