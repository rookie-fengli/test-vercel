'use client';
import { useState } from 'react';
export default function AboutIndex() {
  let [useData, setUseData] = useState(null);
  const createDatabase = async () => {
    console.log('data data.json() start');
    const data = await fetch('http://127.0.0.1:1000/api/queryEdgeDataBase', { method: 'GET' });
    const insideUseData = await data.clone().json();
    setUseData(insideUseData);
    console.log('data data.json()', await data.clone().json());
  };
  return (
    <div>
      <h1>测试页面</h1>
      <button onClick={createDatabase}>查询接口</button>
      {JSON.stringify(useData)}
    </div>
  );
}
