import React, { useState, useEffect } from "react";

export const TimeZoneClock = ({ timeZone, setFusoHorario }) => {
    const [time, setTime] = useState("");

    useEffect(() => {

        const intervalId = setInterval(() => {
            const date = new Date();
           
            const options = {
                timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            };

            const timeString = date.toLocaleTimeString("pt-BR", options);
            setTime(timeString);
        }, 1000)

               
        return () => clearInterval(intervalId);

    }, [timeZone]);


    return (
        <div className="TimeZoneClock" onClick={() => {
            setFusoHorario(timeZone);
        }}>
            <h2>{timeZone}</h2>
            <h3>{time}</h3>
        </div>
    )
}
