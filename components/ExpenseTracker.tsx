import React, { useState, useMemo } from 'react';
import { Expense } from '../types';
import { Plus, Trash2, Divide, Calculator, CreditCard, DollarSign } from 'lucide-react';

const ExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  
  // New entry state
  const [splits, setSplits] = useState({ dad: 0, mom: 0, heng: 0, yan: 0 });

  const handleSplitEvenly = () => {
    const val = parseFloat(amount);
    if (isNaN(val)) return;
    const share = Math.round((val / 4) * 100) / 100; // Round to 2 decimals
    setSplits({ dad: share, mom: share, heng: share, yan: share });
  };

  const handleAddExpense = () => {
    if (!title || !amount) return;
    
    const newExpense: Expense = {
      id: Date.now().toString(),
      item: title,
      total: parseFloat(amount),
      payer: 'Main', 
      splits: { ...splits },
      paymentMethod: paymentMethod || 'Cash'
    };

    setExpenses([...expenses, newExpense]);
    // Reset
    setTitle('');
    setAmount('');
    setPaymentMethod('');
    setSplits({ dad: 0, mom: 0, heng: 0, yan: 0 });
  };

  const handleDelete = (id: string) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  // Summaries
  const totalSpent = useMemo(() => expenses.reduce((acc, curr) => acc + curr.total, 0), [expenses]);
  
  const totalPerPerson = useMemo(() => {
    return expenses.reduce((acc, curr) => ({
      dad: acc.dad + curr.splits.dad,
      mom: acc.mom + curr.splits.mom,
      heng: acc.heng + curr.splits.heng,
      yan: acc.yan + curr.splits.yan,
    }), { dad: 0, mom: 0, heng: 0, yan: 0 });
  }, [expenses]);

  const methodSummary = useMemo(() => {
    const methods: Record<string, number> = {};
    expenses.forEach(e => {
      const m = e.paymentMethod.toUpperCase();
      methods[m] = (methods[m] || 0) + e.total;
    });
    return methods;
  }, [expenses]);

  return (
    <div className="pb-24">
      {/* Input Section */}
      <div className="bg-white rounded-2xl p-5 shadow-sm mb-6 border border-stone-100">
        <h2 className="text-lg font-bold text-stone-700 mb-4 flex items-center gap-2">
          <Plus className="w-5 h-5 text-hokkaido-accent" /> 新增記帳
        </h2>
        
        <div className="space-y-3">
          <input 
            type="text" 
            placeholder="項目名稱 (e.g. 晚餐)" 
            className="w-full p-3 bg-stone-50 rounded-xl border-none focus:ring-2 focus:ring-hokkaido-blue outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex gap-2">
            <input 
              type="number" 
              placeholder="總金額 ¥" 
              className="flex-1 p-3 bg-stone-50 rounded-xl border-none focus:ring-2 focus:ring-hokkaido-blue outline-none"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="付款方式 (Cash/Card)" 
              className="flex-1 p-3 bg-stone-50 rounded-xl border-none focus:ring-2 focus:ring-hokkaido-blue outline-none"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>

          <button 
            onClick={handleSplitEvenly}
            className="w-full py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors"
          >
            <Divide size={16} /> 自動平分 (÷4)
          </button>

          <div className="grid grid-cols-4 gap-2 text-center text-sm">
            {['爸', '媽', '恆', '殷'].map((name, idx) => {
              const keys: (keyof typeof splits)[] = ['dad', 'mom', 'heng', 'yan'];
              const key = keys[idx];
              return (
                <div key={key}>
                  <label className="block text-gray-500 text-xs mb-1">{name}</label>
                  <input 
                    type="number" 
                    className="w-full p-2 text-center bg-stone-50 rounded-lg text-xs"
                    value={splits[key] || ''}
                    onChange={(e) => setSplits({...splits, [key]: parseFloat(e.target.value) || 0})}
                  />
                </div>
              )
            })}
          </div>

          <button 
            onClick={handleAddExpense}
            className="w-full py-3 bg-hokkaido-text text-white rounded-xl font-bold shadow-md active:scale-95 transition-transform"
          >
            加入清單
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-indigo-50 to-white p-4 rounded-xl shadow-sm border border-indigo-100">
          <h3 className="text-xs text-indigo-400 font-bold mb-1 uppercase tracking-wider">總支出</h3>
          <p className="text-2xl font-display font-bold text-indigo-900">¥{totalSpent.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
          <h3 className="text-xs text-stone-400 font-bold mb-2 uppercase tracking-wider">個人應付</h3>
          <div className="space-y-1 text-xs text-stone-600">
            <div className="flex justify-between"><span>爸:</span> <span>¥{totalPerPerson.dad.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>媽:</span> <span>¥{totalPerPerson.mom.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>恆:</span> <span>¥{totalPerPerson.heng.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>殷:</span> <span>¥{totalPerPerson.yan.toLocaleString()}</span></div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 mb-6">
        <h3 className="text-xs text-stone-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-1">
          <CreditCard size={12} /> 付款方式匯總
        </h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(methodSummary).map(([method, amt]) => (
            <span key={method} className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
              {method}: ¥{amt.toLocaleString()}
            </span>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="space-y-3">
        {expenses.map((expense) => (
          <div key={expense.id} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center border border-stone-50">
            <div>
              <h4 className="font-bold text-stone-800">{expense.item}</h4>
              <p className="text-xs text-stone-500 mt-1 bg-stone-100 inline-block px-2 py-0.5 rounded">
                {expense.paymentMethod}
              </p>
            </div>
            <div className="text-right">
              <div className="font-display font-bold text-stone-800">¥{expense.total.toLocaleString()}</div>
              <button 
                onClick={() => handleDelete(expense.id)}
                className="text-red-400 p-2 -mr-2 hover:bg-red-50 rounded-full transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
        {expenses.length === 0 && (
          <div className="text-center text-stone-400 py-10">
            <Calculator className="w-12 h-12 mx-auto mb-2 opacity-20" />
            <p className="text-sm">尚未有記帳資料</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseTracker;