import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQoutes } from '../app-redux/quotesSlice';

const QoutesComponent = () => {
  const dispatch = useDispatch();
  const { status, error, qoutesData } = useSelector((state) => state.qoutesManager);

  const handleButtonClick = () => {
    dispatch(fetchQoutes());
  };

  useEffect(() => {
    console.log('check qoutesData -- ', qoutesData);
  }, [qoutesData]);

  return (
    <div>
      <button onClick={handleButtonClick} disabled={status === 'loading'}>
        {status === 'loading' ? 'Loading...' : 'Fetch Quotes'}
      </button>
      <p>Qoutes Length : {qoutesData?.quotes?.length}</p>
      <p>Qoutes Limit : {qoutesData?.limit}</p>

      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' && (
        <ul>
          {qoutesData?.quotes?.map((qoute) => (
            <li key={qoute.id} style={{ color: '#fff' }}>
              {qoute.quote}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QoutesComponent;
