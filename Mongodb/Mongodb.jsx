import React, { useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';

const MongoDBComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const client = new MongoClient('mongodb+srv://harendra5464:O4Wheanx3N09ce2q@cluster0.fcfljwj.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      try {
        await client.connect();
        const database = client.db('Study_App');
        const collection = database.collection('Study_App');
        const result = await collection.find().toArray();
        setData(result);
      } finally {
        await client.close();
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>MongoDB Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MongoDBComponent;
