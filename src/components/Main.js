import {Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { useReducer } from "react";
import ConfirmedBooking from './ConfirmedBooking';

export default function Main(){
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };
    const updateTimes= (state, action) => {
        if(action==="update-slots")
         return {availableTimes: fetchAPI(new Date())}
        return state;
    }

    const initializeTimes = {availableTimes: fetchAPI(new Date())}
    const [state,dispatch] = useReducer(updateTimes,initializeTimes);
    return(
            <Routes> 
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage dispatch={dispatch} submitAPI={submitAPI} availableTimes={state.availableTimes} />}></Route>
                <Route path='/confirmed' element={<ConfirmedBooking/>}></Route>
            </Routes>
    )
}