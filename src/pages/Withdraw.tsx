import Header from '../components/Header';
import { Wallet, Send } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { useGlobalConfig } from '../contexts/GlobalConfigContext';
import { toast } from 'react-hot-toast';
import { requestWithdraw } from '../services/userService';
import { useEffect, useState } from 'react';
import { getWithdrawHistory } from '../services/userService';

// Withdraw.tsx
export default function Withdraw() {
  const { user, setUser } = useUser();
  const [method, setMethod] = useState('trc20');
  const { config } = useGlobalConfig();
  const [amount, setAmount] = useState('');
  const balance = user?.balance?.toFixed(3) || 0;

  const [walletAddress, setWalletAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const data = await getWithdrawHistory(user?.telegramId || 0);

      setHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWithdraw = async () => {
    try {
      if (!walletAddress.trim()) {
        toast.error('Enter wallet address');
        return;
      }

      if (!amount) {
        toast.error('Enter amount');
        return;
      }
      setLoading(true);
      const result = await requestWithdraw(user?.telegramId || 0, Number(amount), walletAddress);

      toast.success(result.message);
      await loadHistory();
      setAmount('');
      setWalletAddress('');
      setUser({
        ...user!,
        balance: result.balance,
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Withdraw failed');
    } finally {
      setLoading(false);
    }
  };

  const shortAddress = (address: string) => {
    if (!address) return '';
    return `${address.slice(0, 4)}....${address.slice(-4)}`;
  };

  return (
    <div>
      <Header title="Withdraw" subtitle="Funds" />
      <div className="p-4">
        <div className="rounded-3xl border border-slate-800 bg-[#07111F] p-5">
          {/* Balance Card */}
          <div className=" rounded-2xl border border-slate-800 bg-[#0B1728] p-5">
            <div className=" flex items-center justify-between">
              <div className="flex flex-col items-start justify-start">
                <p className="text-gray-400 text-sm">Available Balance</p>

                <h2 className="mt-2 text-4xl font-bold !text-purple-500">
                  ${user?.balance?.toFixed(3) || 0}
                  <span className="text-lg ml-2 text-white">USDT</span>
                </h2>

                <p className="text-gray-500 text-sm mt-2">Minimum Withdraw: {config?.min_withdraw || 1} USDT</p>
              </div>

              <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
                <Wallet size={32} className="text-white" />
              </div>
            </div>
          </div>

          {/* Method */}
          <div className="mt-5">
            <h3 className="flex items-start justify-start text-white font-medium mb-3">Withdrawal Method</h3>
            <div className="space-y-3">
              {/* TON */}
              <label className="flex items-center justify-between rounded-xl border border-slate-800 bg-[#0B1728] p-4 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" checked={method === 'ton'} onChange={() => setMethod('ton')} />

                  <span className="text-white">TON USDT</span>
                </div>

                <img src="https://cryptologos.cc/logos/toncoin-ton-logo.png" className="w-8 h-8" />
              </label>
            </div>
          </div>

          {/* Wallet */}
          <div className="mt-5">
            <label className=" flex  text-white text-sm">Wallet Address</label>

            <input
              placeholder="Enter wallet address"
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full h-12 mt-2 rounded-xl border border-slate-800 bg-[#0B1728] px-4 text-white outline-none"
            />
          </div>

          {/* Amount */}
          <div className="mt-5">
            <label className=" flex  text-white text-sm">Amount (USDT)</label>

            <div className="flex gap-3 mt-2">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="flex-1 h-12 rounded-xl border border-slate-800 bg-[#0B1728] px-4 text-white outline-none"
              />

              <button
                onClick={() => setAmount(balance.toString())}
                className="px-5 rounded-xl bg-purple-900 text-purple-300 border border-purple-600"
              >
                Max
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleWithdraw}
            disabled={loading}
            className="w-full h-14 mt-6 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold flex items-center justify-center gap-2"
          >
            <Send size={18} />
            {loading ? 'Processing...' : 'Request Withdraw'}
          </button>
        </div>
      </div>

      {/* withdrowal histroy start */}
      <div className="p-4 pb-24  rounded-3xl border border-slate-800 bg-[#07111F] p-5 m-5">
        <h3 className="flex text-white text-lg font-semibold mb-3">Withdrawal History</h3>

        <div className="space-y-3">
          {history.length === 0 && (
            <div className="rounded-xl border border-slate-800 bg-[#07111F] p-4 text-center text-gray-400">
              No withdrawals found
            </div>
          )}

          {history.map((item) => (
            <div key={item._id} className="rounded-xl border border-slate-800 bg-[#07111F] p-4">
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start justify-start">
                  <p className="!text-white font-medium">Amount: ${item.amount}</p>

                  <p className="text-gray-400 text-sm">Wallet Address: {shortAddress(item.walletAddress)}</p>

                  <p className="text-gray-500 text-xs mt-1">Date : {new Date(item.createdAt).toLocaleString()}</p>
                </div>

                <div className="text-right">
                  <span
                    className={`text-sm font-medium ${
                      item.status === 'pending'
                        ? 'text-yellow-400'
                        : item.status === 'paid'
                          ? 'text-green-400'
                          : 'text-red-400'
                    }`}
                  >
                    {item.status}
                  </span>

                  <p className="text-gray-400 text-xs mt-1">Fee: ${item.fee}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
