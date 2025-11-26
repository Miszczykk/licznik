import { useState, useEffect } from 'react';

const dataStartowa = new Date('2024-11-25T17:48:00');

function App() {
    const [roznica, setRoznica] = useState(new Date() - dataStartowa);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const teraz = new Date();
            setRoznica(teraz - dataStartowa);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const sekundy = Math.floor((roznica / 1000) % 60);
    const minuty = Math.floor((roznica / (1000 * 60)) % 60);
    const godziny = Math.floor((roznica / (1000 * 60 * 60)) % 24);
    const dni = Math.floor(roznica / (1000 * 60 * 60 * 24));

    const formatTime = (time) => String(time).padStart(2, '0');

    return (
        <>
            <h1>Razem od</h1>
            <div className="timer">
                <div>
                    <span>{dni}</span>
                    <span>DNI</span>
                </div>
                <div>
                    <span>{formatTime(godziny)}</span>
                    <span>GODZ</span>
                </div>
                <div>
                    <span>{formatTime(minuty)}</span>
                    <span>MIN</span>
                </div>
                <div>
                    <span>{formatTime(sekundy)}</span>
                    <span>SEK</span>
                </div>
            </div>
        </>
    );
}

export default App;