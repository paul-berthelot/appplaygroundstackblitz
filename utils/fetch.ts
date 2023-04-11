export async function fetch(url: string, params?: any) {
  return await global.fetch('http://localhost:3000' + url, params);
}
