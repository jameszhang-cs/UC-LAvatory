import React from 'react';

const BoelterHall = () => {
    const [value, setValue] = React.useState("floor1")
    const handleChange = (event) => (
        setValue(event.target.value)
    );
    return (
        <div>
            <h1>Boelter Hall Data</h1>
            <label>
                Please select floor.
                <select value={value} onChange={handleChange}>
                    <option value = "floor1">Floor 1</option>
                    <option value = "floor2">Floor 2</option>
                    <option value = "floor3">Floor 3</option>
                    <option value = "floor4">Floor 4</option>
                    <option value = "floor5">Floor 5</option>
                    <option value = "floor6">Floor 6</option>
                    <option value = "floor7">Floor 7</option>
                    <option value = "floor8">Floor 8</option>
                    <option value = "floor9">Floor 9</option>
                </select>
            </label>
            <p>Will display data for {value} when this is finished.</p>
        </div>
    );
}

export default BoelterHall;