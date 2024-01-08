import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const FruitsComponent = () => {
  const [fruits, setFruits] = useState([]);
  const fruitCollectionRef = collection(db, 'fruits');

  const [fruitName, setFruitName] = useState('');
  const [fruitColor, setFruitColor] = useState('');

  useEffect(() => {
    const getFruits = async () => {
      const data = await getDocs(fruitCollectionRef);
      // console.log('check fruits data -- ', data);
      //console.log('check fruits data.docs -- ', data?.docs);
      setFruits(data?.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getFruits();
  }, []);

  const addFruits = async () => {
    await addDoc(fruitCollectionRef, { name: fruitName, color: fruitColor });
  };

  const updateFruit = async (id, weight) => {
    const fruitDoc = doc(db, 'fruits', id);

    let _weight = (weight || 0) + 1;
    await updateDoc(fruitDoc, { weight: Number.parseInt(_weight) });
    console.log('check done update ');
  };

  const deleteUser = async (id) => {
    const fruitDoc = doc(db, 'fruits', id);
    await deleteDoc(fruitDoc);
  };

  return (
    <div>
      <p>Fruits component</p>

      <div>
        Create Fruit
        <input
          placeholder="Name..."
          onChange={(event) => {
            setFruitName(event.target.value); //
          }}
        />
        <input
          placeholder="Color"
          onChange={(event) => {
            setFruitColor(event.target.value);
          }}
        />
        <button onClick={addFruits}>Create Fruit</button>
      </div>

      <ul>
        {fruits?.map((fruit) => (
          <li style={{ color: '#fff' }}>
            {fruit?.name} {fruit?.color} {fruit?.weight}{' '}
            <button
              onClick={() => {
                updateFruit(fruit?.id, fruit?.weight);
              }}
            >
              {' '}
              Update Weight
            </button>
            <button
              onClick={() => {
                deleteUser(fruit?.id);
              }}
            >
              {' '}
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsComponent;
