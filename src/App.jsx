import { useState } from "react";

function App() {

  const[budget,setBudget] =useState(0);
  const[expense,setExpense]=useState("");
  const[amount,setAmount] =useState(0);
  const[list,setList]=useState([]);

  function clickbtn(){
    const newItem ={
      expense: expense,
      amount: amount
    };
    setList([...list,newItem]);
    console.log(list);

    //input clear karo 
    setExpense("");
    setAmount(0);
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center">
        Expense Tracker
      </h1>
      <div className="mx-auto mt-20 w-225">
      <h2 className="font-bold ">
        Balance:
      </h2>

      <div className="flex justify-between items-center mt-3">
        <h2>Expense:0</h2>
        <div className=" flex gap-2">
        <p>budget</p>
        <input value={budget} onChange={(e)=>setBudget(Number(e.target.value))} className="border px-2 py-1 w-50" type="number" placeholder="enter budget"/>
        </div>
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-2">
        <p>Add expense</p>
        <input value={expense} onChange={(e)=>setExpense(e.target.value)} className="border px-2 py-1 w-50" type="Text" placeholder="enter expense"/>
        </div>
        <div className="flex gap-2">
        <p>Amount</p>
        <input value={amount} onChange={(e)=>setAmount(Number(e.target.value))} className="border px-2 py-1 w-50" type="number" placeholder="enter Amount"/>
        </div>
      </div>

      <button onClick={clickbtn} className=" mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-20 rounded-2xl">Add</button>
      <div className="mt-10 ">
        <h1 className="font-bold">Transaction</h1>
        <input className="border px-2 py-1 w-100" type="text" placeholder="search expenses" />
      </div>

        {list.map((item,index)=>{
        <div key={index} className="flex justify-between mt-10">
        <p>item.birthday Part</p>
         <p>item.500</p>
         <button>delete</button>
        </div>
        })}

      </div>
      
    </div>
  );  
}

export default App;