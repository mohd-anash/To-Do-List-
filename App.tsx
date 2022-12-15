import * as React from 'react';
import './style.css';

export default function App() {
  const [data, setDta] = React.useState({ name: '', age: '' });
  const [records, setRecords] = React.useState([]);
  const [btn, setBtn] = React.useState('Add');
  const [ind, setInde] = React.useState(0);

  const handleChange = (evt) => {
    let nameData = evt.target.name;
    let valueData = evt.target.value;
    setDta({ ...data, [nameData]: valueData });
  };

  const handleClick = () => {
    if (btn == 'Add') {
      const rcds = [...records];
      rcds.push(data);
      setRecords(rcds);
      setDta({ name: '', age: '' });
    } else {
      records[ind].name = data.name;
      records[ind].age = data.age;
      setRecords([...records]);
    }
  };

  const handleDelete = (i) => {
    const delRcds = [...records];
    delRcds.splice(i, 1);
    setRecords(delRcds);
  };

  const updateClick = (i) => {
    setDta({ name: records[i].name, age: records[i].age });
    setBtn('Update');
    setInde(i);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        value={data.age}
        onChange={handleChange}
      />
      <input type="button" value={btn} onClick={handleClick} />

      <div className="wrap">
        {records.map((row, i) => {
          return (
            <div className="box" key={i}>
              <h3>{row.name}</h3>
              <p>{row.age}</p>
              <input
                type="button"
                value="Close"
                onClick={() => handleDelete(i)}
              />
              <input
                type="button"
                value="Edit"
                onClick={() => updateClick(i)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
