import './gallery.css'
import cat from '../img/cat.1.jpg'
import { useState } from 'react';
import Bordered from './Bordered'

const Gallery = () => {

    const [columns, setColumns] = useState(2);

    let columnsClass = 'gallery';
    if ( columns === 1) {
        columnsClass += ' one-column'
    } else if ( columns === 2) {
        columnsClass += ' two-columns';
    } else if ( columns === 3) {
        columnsClass += ' three-columns';
    }
    
    const selectedButtonStyle = {
        fontWeight: 'bold'
    }
    

    return (
        <div className={columnsClass}>

            <Bordered>
                <button onClick={() => setColumns(1) }
                 style={columns === 1 ? selectedButtonStyle : null}>One Columns</button>
                <button onClick={() => setColumns(2) }
                style={columns === 2 ? selectedButtonStyle : null}>Two Columns</button>
                <button onClick={() => setColumns(3) }
                style={columns === 3 ? selectedButtonStyle : null}>Three Columns</button>
            </Bordered>

            <img src={cat} alt="cat.1" />

            <img src="img/cat.2.jpg" alt="" />
            <img src="img/cat.3.jpg" alt="" />
            <img src="img/cat.4.jpg" alt="" />
            <img src="img/cat.5.jpg" alt="" />
            <img src="img/cat.6.jpg" alt="" />

        </div>
    )
}

export default Gallery;