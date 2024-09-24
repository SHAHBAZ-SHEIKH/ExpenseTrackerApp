import React, { useEffect, useState } from 'react'
import './App.css'
import Showtransaction from './Showtransaction/Showtransaction'
import Addtransaction from './Addtransaction/Addtransaction'




function App() {
  const [show, setShow] = useState(false)
  const [transaction,setTransaction] = useState([])
  const [income,setIncome] = useState(0)
  const [expense,setExpense] = useState(0)
  const [Balance,setBalance] = useState(0)

  console.log(transaction)

  const calculation = ()=>{
    let income = 0
    let expense = 0
    transaction.reduce(function (acc, curr) {

      if (curr.type === "Income") {
        income += parseInt(curr.amount)
      } else {
        expense += parseInt(curr.amount)
      }

      setBalance(income - expense)

      setIncome(income)
      setExpense(expense)

    },0)
  }

  

    useEffect(()=>{
      calculation()
    },[transaction])

    useEffect(()=>{
      const data = JSON.parse(localStorage.getItem('transaction'))
      if(data && data.length>0){
        setTransaction(data)
      }
    },[])

    useEffect(()=>{
      localStorage.setItem('transaction',JSON.stringify(transaction))
    },[transaction])




  return (
    <div className='max-w-[1170px] mx-auto flex justify-center items-center flex-col mt-[30px] '>
      <div className='flex justify-between w-[370px]'>
        <div>
          <h3 className='text-[25px]  text-[#ffffff]'>Balance:{Balance}</h3>
        </div>
        <div className='w-[70px]'>
          <button onClick={() => setShow(!show)} className='text-[#ffffff] w-[100%] bg-[#676b18] p-[8px_12px] rounded-md cursor-pointer'>Add</button>
        </div>
      </div>


      {
        show && <Addtransaction setTransaction={setTransaction} transaction={transaction} />
      }

      <div className='flex justify-between w-[370px] '>
        <div className='bg-[#fff] p-[10px] w-[150px] mt-[10px]'>
          <span className='text-[#000000] font-bold'>Income</span>
          <h4 className='text-[green] font-bold'>{income}</h4>
        </div>

        <div className='bg-[#fff] p-[10px] w-[150px] mt-[10px]'>
          <span className='text-[#000000] font-bold'>Expense</span>
          <h4 className='text-[red] font-bold'>{expense}</h4>
        </div>
        
      </div>

      <div className='flex flex-wrap flex-col bg-[#1d2506]  w-[400px] p-[10px] mt-[20px] ]'>
      {
        transaction.map((item)=>{
          return <Showtransaction item={item} />
        })
      }

      </div>
      
    </div>
  )
}

export default App
