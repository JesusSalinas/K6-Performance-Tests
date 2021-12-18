import http from 'k6/http';
import { check, sleep } from 'k6';
import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';

export default function() {
  let url;
  const params = { headers: { 'Authorization': `Bearer ${__ENV.K6_TDO_TOKEN}` } };
  url = new URL('https://api.todoist.com/rest/v1/projects');
  const res = http.get(url.toString(), params);
  check(res, { 'Status Response was 200': (r) => r.status == 200 });
  console.log('[Projects] Response time was ' + String(res.timings.duration) + ' ms');
  sleep(1);
}

export function handleSummary(data) {
    console.log('Preparing the tests summary...');
    return {
        './reports/report.json': JSON.stringify(data)
    };
}

