import { baseRequest } from '@/service/index';
import type { IAccount } from '@/types';

// 账号登录
export function accountLoginRequest(account: IAccount) {
  return baseRequest.post({ url: '/login', data: account });
}
