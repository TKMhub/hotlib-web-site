import { useState, useEffect } from "react";
import styles from "/public/page_styles/Home.module.scss";

// 文字エフェクト用
const TextEffect = ({ title, className, id }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  const [titleText, setTitleText] = useState(title);

  useEffect(() => {
    const h1 = document.querySelector(`#${id}`);
    let interval = null;

    function onMouseOver(event) {
      let iteration = 0;
      clearInterval(interval);
      
      const datasetValue = event.target.dataset.value;
      if (datasetValue) {
        const dataValueLength = datasetValue.length;
        
        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return datasetValue[index];
              }
    
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
    
          if (iteration >= dataValueLength) {
            clearInterval(interval);
          }
    
          iteration += 1 / 3;
          //時間指定
        }, 1);
      }
    }
    

    if (h1) {
      h1.addEventListener("mouseover", onMouseOver);

      return () => {
        h1.removeEventListener("mouseover", onMouseOver);
      };
    }
  }, [id]);

  return (
    <h1 id={id} className={className} data-value={titleText}>
      {title}
    </h1>
  );
};

export default TextEffect;