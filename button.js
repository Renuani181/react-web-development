import react, {usestate} from 'react';

const ToggleButton = () => {
    const[isOn, setIsOn] = useState(false);
    const handleToggle = () =>{
        setIsOn(!isOn);

    };
    return(
        <div>
            <button onClick={handleToggle}>
                {
            isOn ? 'Turn Off' : 'turn on'
                }

                
            </button>
            <p>status: {isOn ? 'On' : 'off'}
            </p>
        </div>
    );
};