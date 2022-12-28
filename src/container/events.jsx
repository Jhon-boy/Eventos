
import React , { useState}  from 'react';
import '../App.css'

const Events = () => {
    const [color, setColor] = useState('#000000');
    const [tiempo, setTiempo] = useState(0);

    const Color = () => Math.floor(Math.random() * 256);
    
    const Colores = (x1, x2, x3) => {
        return (
          '#' +
          [x1, x2, x3]
            .map((c) => {
              const hex = c.toString(16);
              return hex.lenght === 1 ? '0' + hex : hex;
            })
            .join('')
        );
      };
      
    const generateHex = () => {
        const rgb = {
          r: Color(),
          g: Color(),
          b: Color(),
        };
        return setColor(Colores(rgb.r, rgb.g, rgb.b));
      };
      
    const Encima= () => {
        return setTiempo(setInterval(generateHex, 500));
      };

      const Parar = () => {
        return clearInterval(tiempo);
      };
      const dobleClick = () => {
        return clearInterval(tiempo);
      };








    return (
        <div>
        <button id='botons' onMouseOver={Encima}
          onMouseLeave={Parar}
          onDoubleClick={dobleClick}
          style={{ width: '255px', height: '255px', backgroundColor: color, margin: 'auto' }}
          > Don´t touch ME</button>
            
        </div>
    );
}

export default Events;
