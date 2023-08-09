export default async function AboutIndex() {
  const data = await fetch('http://127.0.0.1:1000/api/test', { method: 'get' });
  console.log('data data.json()', await data.clone().json());
  return (
    <div>
      <h1>测试页面</h1>
    </div>
  );
}
