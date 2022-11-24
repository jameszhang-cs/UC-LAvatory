import React from 'react';

const SchoenbergHall = () => {
    const [value, setValue] = React.useState("floor1")
    const handleChange = (event) => (
        setValue(event.target.value)
    );
    return (
        <div>
            <h1>Schoenberg Hall Data</h1>
            <label>
                Please select floor.
                <select value={value} onChange={handleChange}>
                    <option value = "floor1">Floor 1</option>
                    <option value = "floor2">Floor 2</option>
                </select>
            </label>
            <p>Will display data for {value} when this is finished.</p>
        </div>
    );
}

export default SchoenbergHall;