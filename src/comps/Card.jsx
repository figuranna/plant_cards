import { useState } from 'react';

const Card = ({card}) => {

    const [checked, setChecked] = useState(card.active);

    const handleChange = () => { 
        setChecked(!checked); 
    }; 

    return(
            <div key={card.id} className="rounded-md p-2 m-2 border shadow-md bg-white">
        
                    <div className={!checked ? 'grayscale' : 'grayscale-0'}>
                        <img className="h-62 w-36 rounded-lg"src={card.pic}></img>
                    </div>

                    <h4 className="text-lg m-2">{card.title}</h4>
        
                    <div>
                        <label className="text-lg m-2 inline-block hover:cursor-pointer">Aktív:</label>
                        <input type="checkbox" value="" id="checkboxDefault" checked={checked} onChange={handleChange}/>
                    </div>
            </div>
            )
}
    
export default Card

