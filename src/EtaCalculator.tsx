import React, { useState } from "react";

const EtaCalculator: React.FC = () => {
    const [distance, setDistance] = useState<number>(0);
    const [speed, setSpeed] = useState<number>(0);
    const [time, setTime] = useState<string>("0h 0m");

    const etaCalculator = () => {
        if (speed > 0) {
            const totalTimeInHours = distance / speed;
            const hours = Math.floor(totalTimeInHours);
            const minutes = Math.floor((totalTimeInHours - hours) * 60);
            setTime(`${hours}h ${minutes}m`);
        } else {
            setTime("0h 0m");
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        etaCalculator();
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="distance">Distance:
                        <input
                            type="number"
                            id="distance"
                            value={distance}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setDistance(e.target.valueAsNumber)}
                        />
                    </label>
                </div>
                <div>
                    <label>Speed:
                        <input
                            type="number"
                            id="speed"
                            value={speed}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setSpeed(e.target.valueAsNumber)}
                        />
                    </label>
                </div>

                <button type="submit">Calculate</button>
                <div>
                    <label>Your estimated time of travel is: {time}</label>
                </div>
            </form>
        </section>
    );
};

export default EtaCalculator;
