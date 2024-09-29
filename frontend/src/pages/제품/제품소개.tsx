import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


export default function 제품소개() {
  // Set tabIndex to 1 by default to show the first tab on load
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '제품1', value: '1', style: { backgroundColor: 'blue' } },
    { name: '제품2', value: '2', style: { backgroundColor: 'teal' } },
    { name: '제품3', value: '3', style: { backgroundColor: 'aqua' } },
  ];


  return (
    <>
      <ButtonGroup className='button-group'>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          // style={radio.style}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      {
        radioValue === '1' && (
          <>
            <h3>1st Content</h3>
          </>
        )
      }
      {
        radioValue === '2' && (
          <>
            <h3>2nd Content</h3>
          </>
        )
      }
      {
        radioValue === '3' && (
          <>
            <h3>3rd Content</h3>
          </>
        )
      }
    </>
  );
}
