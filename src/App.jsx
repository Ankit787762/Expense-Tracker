function App() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center">
        Expense Tracker
      </h1>
      <div className="ml-50 mt-20 ">
      <h2 className="font-bold ">
        Balance:
      </h2>
      <div className="flex gap-100 mt-3">
        <p>Expense <input type="number" placeholder="enter expense"/></p>
        <p>Budget <input type="number" placeholder="enter Budget"/></p>
      </div>
      <div className="mt-3">
        <h1 className="font-bold">Transaction</h1>
      </div>
      </div>
      
    </div>
  );  
}

export default App;