import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function BookingForm({availableTimes,dispatch,submitAPI}){

    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState(0);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("")
    const navigate = useNavigate();
    const handleSelectDate = (e) => {
        setDate(e.target.value);
    }

    const handleSelectTime = (e) => {
        setTime(e.target.value);
        dispatch({ type: 'update-slots' })
    }
    const handleSubmit = (e) => {
       const response = submitAPI({
        occasion,
        guests,
        date,
        time
       })
       if(response)
        navigate('/confirmed');
        e.preventDefault();
    }

    const disabled = !occasion || !guests || !date || !time
    return (
    <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" required onChange={handleSelectDate} value={date}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " onChange={handleSelectTime} required value={time}>
        {availableTimes?.map(time =>
            <option key={time} value={time}>{time}</option>
            )}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e=> setGuests(e.target.value)}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e)=> {setOccasion(e.target.value)}} value={occasion} required>
            <option value={'birthday'}>Birthday</option>
            <option value={'anniversary'}>Anniversary</option>
        </select>
        <button disabled={disabled} className="submit" aria-label="On Click"  onClick={handleSubmit}>
                Make Your reservation
        </button>
    </form>)
}