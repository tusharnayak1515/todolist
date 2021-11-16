import React from 'react';
// import DatePicker from 'react-date-picker/dist/entry.nostyle';
import TodoList from './components/TodoList';

import './App.css';
import './components/datePicker.css';
import './components/calender.css';

function App() {

  // const [day, setDay] = useState(new Date());
  // let [formattedDate, setFormattedDate] = useState({ date: "", month: "", year: "" })

  // useEffect(() => {
  //   setFormattedDate({
  //     date: day.getDate(),
  //     month: day.getMonth(),
  //     year: day.getFullYear(),
  //   })
  // }, [day])

  return (
    <>
      {/* <div className="date">
        <DatePicker
          onChange={setDay}
          value={day}
          format="dd-MM-y"
          dayPlaceholder="dd"
          monthPlaceholder="mm"
          yearPlaceholder="yyyy"
        />
      </div> */}
      <div className='todo-app'>
        {/* <h1>{`${formattedDate.date}-${formattedDate.month}-${formattedDate.year}`}</h1> */}
        <TodoList />
      </div>
    </>
  );
}

export default App;
