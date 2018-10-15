import { createCache } from 'react-cache';

export let cache;
// 캐시 초기화
function initCache() {
  cache = createCache(initCache);
}

initCache();
