export default async function AboutIndex() {
  const createDatabase = async () => {
    console.log('data data.json() start');
    const data = await fetch('http://127.0.0.1:1000/api/queryEdgeDataBase', { method: 'GET' });
    const useData = await data.clone().json();
    console.log('data data.json()', await data.clone().json());
  };
  console.log('data data.json() start');
  const data = await fetch('http://127.0.0.1:1000/api/queryEdgeDataBase', { method: 'GET' });
  const useData = await data.clone().json();
  console.log('data data.json()', await data.clone().json());
  createDatabase();
  return (
    <div>
      <h1>测试页面</h1>
      <button>新增数据库</button>
      {JSON.stringify(useData)}
    </div>
  );
}
