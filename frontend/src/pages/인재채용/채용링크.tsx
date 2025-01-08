import React, { useEffect } from "react";
import '../Font&Color.css';
import '../thumbnail&details.css';
import '../divs.css';


export default function 채용링크() {
  useEffect(() => {
    window.location.href = "https://hanjinpl.career.rivers.co.kr/";
  });

  return <h5>Redirecting...</h5>;
}
