import BookingForm from "./BookingForm"
export default function BookingPage({availableTimes,dispatch,submitAPI}){
    return (
    <div className="booking-wrapper">
        <label className="booking-label">Book Now</label>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitAPI={submitAPI}/>
    </div>)
}