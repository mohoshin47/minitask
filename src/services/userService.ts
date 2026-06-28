import axios from 'axios';

const API_URL = 'https://minitaskapi.onrender.com';
export const getUser = async (telegramId: number) => {
  const response = await axios.get(`${API_URL}/api/user/getuser/${telegramId}`);
  return response.data.data;
};

export const applyPromo = async (telegramId: number, code: string) => {
  const response = await axios.post(`${API_URL}/api/user/apply`, {
    telegramId,
    code,
  });

  console.log('test1 ', telegramId, ' ', code, ' ', response.data);
  return response.data;
};

export const getGlobalConfig = async () => {
  const response = await axios.get(`${API_URL}/api/globalconfig`);
  return response.data.data;
};

export const getMyReferrals = async (telegramId: number) => {
  const response = await axios.get(`${API_URL}/api/user/myreferrals/${telegramId}`);
  return response.data;
};

export const requestWithdraw = async (telegramId: number, amount: number, walletAddress: string) => {
  const response = await axios.post(`${API_URL}/api/withdrawal/request`, {
    telegramId,
    amount,
    walletAddress,
  });

  return response.data;
};

export const getWithdrawHistory = async (telegramId: number) => {
  const response = await axios.get(`${API_URL}/api/withdrawal/history/${telegramId}`);

  return response.data.data;
};

export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/api/task`);

  return response.data.data;
};

export async function getuserTasks(telegramId: number) {
  const { data } = await axios.get(`${API_URL}/api/task/available/${telegramId}`);
  return data;
}

export const claimDailyReward = async (telegramId: number) => {
  const { data } = await axios.post(`${API_URL}/api/user/dailyclaim`, {
    telegramId,
  });

  return data;
};
