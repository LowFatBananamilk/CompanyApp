import React from 'react';
import '../Font&Color.css';
import '../thumbnail&details.css';
import '../divs.css';
import { Map } from '../../components'


export default function 관계사() {
  return (
    <>
      <p>관계사</p>
      <br />
      <Map latitude={35.693212283910405} longitude={129.31246033663027} zoom={8} />
    </>
  );
}
