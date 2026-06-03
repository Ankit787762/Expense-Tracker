import { useState } from "react";

function App() {

  const[budget,setBudget] =useState("");
  const[expense,setExpense]=useState("");
  const[amount,setAmount] =useState("");
  const[list,setList]=useState([]);

  function clickbtn(){
    if(expense!==""&&amount!==""){
    const newItem ={
      expense: expense,
      amount: amount
    };
    setList([...list,newItem]);
    console.log(newItem);

    //input clear karo 
    setExpense("");
    setAmount("");
  }
  }

function deletebtn(index) {
  const updatedItems = list.filter((_, i) => i !== index);
  setList(updatedItems);
}

const total = list.reduce((sum, item) => sum + item.amount, 0);
const remaining = total? Number(budget)- total:0;


  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center">
        Expense Tracker
      </h1>
      <div className="mx-auto mt-20 w-225">
      <h2 className="font-bold ">
        Balance: {remaining}
      </h2>

      <div className="flex justify-between items-center mt-3">
        <h2>Expense: {total}</h2>
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
       return (
       <table key={index} className="w-full mt-5">
      <tr className="grid grid-cols-3 items-center border-b pb-2">
        <td className="text-left">{item.expense}</td>

        <td className="text-center">{item.amount}</td>

        <td className="text-right">
          <button onClick={() => deletebtn(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-20 rounded-2xl">delete</button>
        </td>
      </tr>
    </table>
  )
})}

      </div>
      
    </div>
  );  
}

export default App;