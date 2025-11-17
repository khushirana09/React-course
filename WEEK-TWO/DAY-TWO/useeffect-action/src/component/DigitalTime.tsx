import React, { useEffect, useState } from 'react'

const DigitalTime: React.FC = () => {
    //  const [time, setTime] = useState<string>("");
    //  const [date, setDate] = useState<string>("");
    const [nowdate, setNowDate] = useState<string>("");


    useEffect(() => {
        //start interval

        const timer = setInterval(() => {
            const now = new Date();

            //     const formattedTime = now.toLocaleTimeString();   //HH:MM:SS
            //   const formattedDate = now.toLocaleDateString();   //DD/MM/YY
            const fullDate = now.toLocaleString();

            //  setTime(formattedTime);
            //   setDate(formattedDate);

            setNowDate(fullDate);

        }, 1000);





        return () => {
            clearInterval(timer);
            console.log("timer cleared");

        };

    }, []);
    return (
        <>
            <div>DigitalTime</div>
            <h3>current : {nowdate}</h3>
            {/* <h3>current date : {date}</h3>
            <h2>current time: {time}:</h2> */}

        </>
    );
};

export default DigitalTime