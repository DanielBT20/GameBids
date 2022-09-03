import { useState } from 'react';
import './AuctionTable.css';

const AuctionTable = () => {
  const [auction, setAuction] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });
  const [baseValue, setBaseValue] = useState(100);
  // const [input1, setInput1] = useState(0);
  // const [input2, setInput2] = useState(0);
  // const [input3, setInput3] = useState(0);
  // const [input4, setInput4] = useState(0);
  const { input1, input2, input3, input4 } = auction;
  const changeHandler = (e) => {
    setAuction({ ...auction, [e.target.name]: e.target.value });
  };
  //   setInput1(e.target.value);
  //   setInput2(e.target.value);
  //   setInput3(e.target.value);
  //   setInput4(e.target.value);
  // };

  let value1, value2, value3, value4;
  const submitHandler1 = () => {
    value1 = parseInt(input1);
    console.log(value1);
    console.log(typeof value1);
    console.log(isNaN(value1));
  };
  const submitHandler2 = () => {
    value2 = parseInt(input2);
    console.log(typeof value2);
  };
  const submitHandler3 = () => {
    value3 = parseInt(input3);
  };
  const submitHandler4 = () => {
    value4 = parseInt(input4);
  };

  const checkWinner = (e) => {
    console.log('click');
    e.preventDefault();
    let maxi1 = Math.max(value1, value2);
    console.log(maxi1);
    const maxi2 = Math.max(value3, value4);
    console.log(maxi2);
    const maxi = Math.max(maxi1, maxi2);
    console.log(maxi);
    window.alert(`Highest bid on this player is ${maxi}. SOLD!!!!`);
  };

  const players = [
    {
      id: 1,
      name: 'Virat Kohli',
      base: 145,
    },
    {
      id: 2,
      name: 'Rohit Sharma',
      base: 150,
    },
    {
      id: 3,
      name: 'Hardik Pandya',
      base: 140,
    },
    {
      id: 4,
      name: 'Jasprit Bumrah',
      base: 135,
    },
  ];

  // const selectPlayer = (e) => {
  //   const value = e.target.value;
  //   const filteredBase = players.filter((p) => p.name === value);

  //   setBaseValue(filteredBase);
  // };

  return (
    <div>
      <div>
        <select name='players' id='players'>
          {players.map((player) => (
            <>
              <option key={player.id} value={player.name}>
                {player.name}
              </option>
            </>
          ))}
        </select>
        {/* {baseValue.map((b) => (
          <div>{b.base}</div>
        ))} */}

        <h2>Hardik Pandya</h2>
        <p>Base Prize : 100</p>
      </div>
      <div className='tables'>
        <div className='table'>
          <p>Table 1</p>
          <input
            id='input1'
            type='number'
            name='input1'
            value={input1}
            onChange={changeHandler}
          />
          <button onClick={submitHandler1}>Send</button>
        </div>
        <div className='table'>
          <p>Table 2</p>
          <input
            id='input2'
            type='number'
            name='input2'
            value={input2}
            onChange={changeHandler}
          />
          <button onClick={submitHandler2}>Send</button>
        </div>
        <div className='table'>
          <p>Table 3</p>
          <input
            id='input3'
            type='number'
            name='input3'
            value={input3}
            onChange={changeHandler}
          />
          <button onClick={submitHandler3}>Send</button>
        </div>
        <div className='table'>
          <p>Table 4</p>
          <input
            id='input4'
            type='number'
            name='input4'
            value={input4}
            onChange={changeHandler}
          />
          <button onClick={submitHandler4}>Send</button>
        </div>
      </div>
      <button onClick={checkWinner}>Winner</button>
      <h2>Sold to </h2>
    </div>
  );
};

export default AuctionTable;
