import { format } from "date-fns";
import { useState, useEffect } from "react"; 
import "./App.css";



function App() {

const [time,setTime] = useState(format(new Date(), "hh:mm a"));
const [date, setDate] = useState(format(new Date(), "PPPP"));
useEffect(() => {
  // start timer
  const timer = setInterval(() => {
    // update time here
    setTime(format(new Date(), "hh:mm a"));
    setDate(format(new Date(), "PPPP"));
  }, 1000);
  



  // cleanup
  return () => clearInterval(timer);
}, []);

return (
  <div className="clock-container">
    <p className="date">{date}</p>
    <p className="time">{time}</p>
  </div>
);

}
export default App;









