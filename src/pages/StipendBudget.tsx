import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function StipendBudget() {
  const [stipend, setStipend] = useState(4000);
  const [transport, setTransport] = useState(1000);
  const [rent, setRent] = useState(0);
  const [groceries, setGroceries] = useState(1500);
  const [dataAirtime, setDataAirtime] = useState(300);
  const [savings, setSavings] = useState(200);

  const totalExpenses = transport + rent + groceries + dataAirtime + savings;
  const balance = stipend - totalExpenses;

  return (
    <>
      <Helmet>
        <title>Learnership Stipend Budget Calculator | OpportunitiesZA</title>
        <meta name="description" content="Calculate and plan how to survive on a learnership or internship stipend in South Africa." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-block bg-blue-100 p-3 rounded-full border border-blue-200 mb-4">
            <span className="text-3xl">💰</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-sa-ink mb-4">Stipend Budget Calculator</h1>
          <p className="text-gray-600">
            Learnerships pay a stipend (usually R3000 to R6000). It's not a lot, so you need to budget carefully to survive the month. Use this tool to plan your expenses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white border text-left border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="font-heading font-bold text-xl mb-6">Your Income & Expenses</h2>
            
            <div className="space-y-6">
              <div className="pb-4 border-b border-gray-100">
                <label className="block text-sm font-semibold text-sa-ink mb-2">Monthly Stipend (After Tax/UIF)</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500 font-bold">R</span>
                  <input type="number" value={stipend} onChange={(e) => setStipend(Number(e.target.value))} className="w-full pl-8 border rounded-md px-4 py-2 bg-blue-50 focus:ring-sa-green focus:border-sa-green font-bold text-lg" min="0" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Learnership stipends are subject to 1% UIF deduction.</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex justify-between">
                  <span>Transport (Taxi / Bus / Train)</span>
                  <span className="text-sa-ink font-bold">R{transport}</span>
                </label>
                <input type="range" min="0" max="3000" step="50" value={transport} onChange={(e) => setTransport(Number(e.target.value))} className="w-full accent-sa-green" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex justify-between">
                  <span>Rent / Giving at Home</span>
                  <span className="text-sa-ink font-bold">R{rent}</span>
                </label>
                <input type="range" min="0" max="4000" step="50" value={rent} onChange={(e) => setRent(Number(e.target.value))} className="w-full accent-sa-green" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex justify-between">
                  <span>Groceries / Lunch</span>
                  <span className="text-sa-ink font-bold">R{groceries}</span>
                </label>
                <input type="range" min="0" max="3000" step="50" value={groceries} onChange={(e) => setGroceries(Number(e.target.value))} className="w-full accent-sa-green" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex justify-between">
                  <span>Data & Airtime</span>
                  <span className="text-sa-ink font-bold">R{dataAirtime}</span>
                </label>
                <input type="range" min="0" max="1500" step="10" value={dataAirtime} onChange={(e) => setDataAirtime(Number(e.target.value))} className="w-full accent-sa-green" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex justify-between">
                  <span>Savings / Emergency Fund</span>
                  <span className="text-sa-ink font-bold">R{savings}</span>
                </label>
                <input type="range" min="0" max="2000" step="50" value={savings} onChange={(e) => setSavings(Number(e.target.value))} className="w-full accent-sa-green" />
              </div>
            </div>
          </div>

          <div>
             <div className="bg-sa-ink text-white rounded-xl p-8 shadow-sm text-center mb-8">
               <h3 className="text-gray-300 font-semibold mb-2 uppercase tracking-widest text-sm">Remaining Balance</h3>
               <div className={`text-5xl font-heading font-extrabold mb-2 ${balance < 0 ? 'text-red-400' : 'text-sa-green'}`}>
                 {balance < 0 ? '-' : ''}R{Math.abs(balance)}
               </div>
               <p className="text-sm text-gray-400">
                 {balance < 0 ? "You are over budget! You need to reduce expenses." : "You have some money left over. Consider saving it!"}
               </p>
             </div>

             <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                <h3 className="font-heading font-bold text-amber-900 mb-3">Survival Tips</h3>
                <ul className="list-disc pl-5 text-amber-800 text-sm space-y-3">
                  <li><strong>Pack a Lunch:</strong> Buying food at the workplace cafeteria or local shops every day can easily drain R1000+ from your budget in a month.</li>
                  <li><strong>Manage black tax:</strong> Sit down with your family and explain that a stipend is a training allowance, not a full salary. Negotiate what you can realistically contribute.</li>
                  <li><strong>Travel costs:</strong> If possible, buy monthly taxi/bus tickets instead of paying daily to save money.</li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
