import { useEffect, useState } from "react";

function Greeting() {
    // eslint-disable-next-line no-unused-vars
    const [randomNumber,setRandomNumber] = useState(
        Math.floor(Math.random()*5 +1)
    );
    const [greeting,setGreeting] = useState('')
    useEffect(()=>{
        // eslint-disable-next-line default-case
        switch(randomNumber) {
            case 1:
                setGreeting('Hello');
                break;
            case 2:
                setGreeting('Bonjour');
                break;
            case 3:
                setGreeting('Hola');
                break;
            case 4:
                setGreeting('Guten Tag');
                break;
            case 5:
                setGreeting('Ciao');
                break;
            default:
                setGreeting('Hello');
                break;
        }
    },[randomNumber])

    return (
        <div className="greeting">
            <h1>Random Greeting</h1>
            <h2 className="message">{greeting}</h2>
        </div>
    );
};

export default Greeting;