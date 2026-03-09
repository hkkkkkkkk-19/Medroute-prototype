
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'Jan', savings: 4000 },
  { name: 'Feb', savings: 3000 },
  { name: 'Mar', savings: 2000 },
  { name: 'Apr', savings: 2780 },
  { name: 'May', savings: 1890 },
  { name: 'Jun', savings: 2390 },
];

const GovDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-black">Government Oversight Panel</h2>
        <p className="text-slate-500">State Pharmaceutical Waste & Redistribution Metrics</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Redistribution Efficiency Trend</h3>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                        <Line type="monotone" dataKey="savings" stroke="#4f46e5" strokeWidth={4} dot={{ fill: '#4f46e5', strokeWidth: 2 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-bold mb-2">Policy Impact</h3>
                <p className="text-indigo-100 text-sm">Target: Reduce medical waste by 30% by 2027.</p>
            </div>
            <div className="mt-8">
                <div className="text-5xl font-black mb-2">22.4%</div>
                <div className="text-sm font-bold opacity-75 uppercase tracking-wider">Current Progress</div>
                <div className="w-full h-3 bg-white/20 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[22.4%]"></div>
                </div>
            </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
            { label: "Registered NGOs", val: "152", icon: "🏢" },
            { label: "Waste Prevented", val: "₹1.4 Cr", icon: "💰" },
            { label: "Lives Impacted", val: "45k+", icon: "👨‍👩‍👧" },
            { label: "Cities Active", val: "12", icon: "📍" }
        ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                    <div className="text-sm font-bold text-slate-400 uppercase">{item.label}</div>
                    <div className="text-2xl font-black text-slate-900">{item.val}</div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default GovDashboard;
