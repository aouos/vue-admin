import { LOGIN, LOGIN_TOKEN } from '@/global/constants';
import { accountLoginRequest } from '@/service/modules/login';
import type { IAccount, ILoginStore } from '@/types';
import { localCache } from '@/utils/cache';
import { defineStore } from 'pinia';
import router from '@/router';

const useLoginStore = defineStore(LOGIN, {
  state: (): ILoginStore => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: ''
  }),
  actions: {
    async loginStoreAction(account: IAccount) {
      const res = await accountLoginRequest(account);
      this.token = res.data.token;

      localCache.setCache(LOGIN_TOKEN, this.token);
      router.push('/main');
    }
  }
});

export default useLoginStore;
