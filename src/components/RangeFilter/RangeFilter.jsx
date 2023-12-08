import React, { useState } from 'react'

function RangeForm() {
    const [calories, setCalories] = useState(300)
    const [time, setTime] = useState(20)

    return (
        <form>
            <div>
                <label>
                    Calories: {calories}
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Time (min): {time}
                    <input
                        type="range"
                        min="0"
                        max="120"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </label>
            </div>
        </form>
    )
}

export default RangeForm