function App() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center">
        Expense Tracker
      </h1>
      <div className="mx-auto mt-20 w-50">
      <h2 className="font-bold ">
        Balance:
      </h2>
      <div className="flex gap-100 mt-3">
        <div className="flex gap-2">
        <p>Expense</p>
        <input className="border px-2 py-1 w-50" type="number" placeholder="enter expense"/>
        </div>
        <div className="flex gap-2">
        <p>Expense</p>
        <input className="border px-2 py-1 w-50" type="number" placeholder="enter expense"/>
        </div>
      </div>
      <div className="mt-3 ">
        <h1 className="font-bold">Transaction</h1>
        <input className="border px-2 py-1 w-full" type="text" placeholder="search expenses" />
      </div>
      </div>
      
    </div>
  );  
}

export default App;