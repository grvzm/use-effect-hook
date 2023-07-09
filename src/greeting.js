import { useEffect, useState } from "react";

function Greeting() {
    const [randomNumber,setRandomNumber] = useState(
        Math.floor(Math.random()*5 +1)
    );
    useEffect(()=>{
        console.log('Random Greeting')
    },[]);

    return (
        <div className="greeting">
            <h1>Random Greeting</h1>
            {randomNumber === 1 ? (
                <h2 className="message">Hello</h2>
            ) : randomNumber===2 ? (
                <h2 className="message">Howdy</h2>
            ) : randomNumber===3? (
                <h2 className="message">Hi</h2>
            ) : randomNumber===4 ? (
                <h2 className="message">Hey</h2>
            ) : randomNumber===5 ? (
                <h2 className="message">yo</h2>
            )  : (
                <h2 className="message">Salutation</h2>
            )}
        </div>
    );
};

export default Greeting;