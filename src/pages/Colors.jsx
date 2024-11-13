import React from 'react';
import './Colors.scss';

const yellow = '#f8ec06'
const red = '#e91812'
const white = '#ffffff'
const black = '#000000'
const green = '#1c9540'
const blue = '#316dbc'


const colors = [
    {
      color1: yellow,
      color1Prop: 9,
      color2: red,
      color2Prop: 1,
      color3: false,
      color3Prop: false,
      result: '#f7b235'
    },
    {
      color1: yellow,
      color1Prop: 8,
      color2: red,
      color2Prop: 2,
      color3: false,
      color3Prop: false,
      result: '#ef7102'
    },
    {
      color1: yellow,
      color1Prop: 5,
      color2: red,
      color2Prop: 5,
      color3: false,
      color3Prop: false,
      result: '#eb4d1d'
    },
    {
      color1: white,
      color1Prop: 9,
      color2: red,
      color2Prop: 1,
      color3: false,
      color3Prop: false,
      result: '#f8bddb'
    },
    {
      color1: white,
      color1Prop: 7,
      color2: red,
      color2Prop: 3,
      color3: false,
      color3Prop: false,
      result: '#ec4c98'
    },
    {
      color1: black,
      color1Prop: 3,
      color2: '#ef7102',
      color2Prop: 7,
      color3: false,
      color3Prop: false,
      result: '#8e3128'
    },
    {
      color1: black,
      color1Prop: 1,
      color2: yellow,
      color2Prop: 9,
      color3: false,
      color3Prop: false,
      result: '#c2b335'
    },
    {
      color1: yellow,
      color1Prop: 9,
      color2: green,
      color2Prop: 1,
      color3: false,
      color3Prop: false,
      result: '#dfdb00'
    },
    {
      color1: yellow,
      color1Prop: 8,
      color2: green,
      color2Prop: 2,
      color3: false,
      color3Prop: false,
      result: '#96c01f'
    },
    {
      color1: green,
      color1Prop: 7,
      color2: blue,
      color2Prop: 3,
      color3: false,
      color3Prop: false,
      result: '#2c81a1'
    },
    {
      color1: white,
      color1Prop: '',
      color2: blue,
      color2Prop: '',
      color3: false,
      color3Prop: false,
      result: '#9cd9f9'
    },
    {
      color1: black,
      color1Prop: '',
      color2: blue,
      color2Prop: '',
      color3: false,
      color3Prop: false,
      result: '#293275'
    },
    {
      color1: white,
      color1Prop: 9,
      color2: black,
      color2Prop: 1,
      color3: false,
      color3Prop: false,
      result: '#9e9c9f'
    },
    {
      color1: yellow,
      color1Prop: 7,
      color2: red,
      color2Prop: 2,
      color3: black,
      color3Prop: 1,
      result: '#7f4e25'
    },
    {
      color1: white,
      color1Prop: 8,
      color2: blue,
      color2Prop: 1,
      color3: black,
      color3Prop: 1,
      result: '#658ca2'
    },
] 



const Colors = () => {
  return (
    <div className='colors'>
      <h1>Combina colores y crea nuevos!</h1>
      <div className='container'>
        {colors.map(color => {
          const hasColor3 = Boolean(color.color3);
          const circleStyle = {
            width: hasColor3 ? '70px' : '100px',
            height: hasColor3 ? '70px' : '100px',
          };

          return (
            <div className='colors-container' key={color.color1 + color.color2 + (color.color3 || '')}>
              <div className='circle' style={{ ...circleStyle, backgroundColor: color.color1 }}>
                {color.color1Prop}
              </div>
              +
              <div className='circle' style={{ ...circleStyle, backgroundColor: color.color2 }}>
                {color.color2Prop}
              </div>
              {hasColor3 && (
                <>
                  + <div className='circle' style={{ ...circleStyle, backgroundColor: color.color3 }}>
                    {color.color3Prop}
                  </div>
                </>
              )}
              =
              <div className='circle' style={{ ...circleStyle, backgroundColor: color.result }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Colors;