import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { InpContext } from "../store/input-context";


let ctx = {
  investment: 500,
  roi : 1,
  tp : 1,
}
export default function Parameters({ children, min, max, unit, step, onUpdate }) {
  const inpCtx = useContext(InpContext);
  
  //const [data, setData] = useState(min);
  const [data, setData] = useState(min);

  
  function handleChange(e, elem) {
    setData(+e.target.value);    
    if (elem === "investment") {
      ctx={...ctx, investment : +e.target.value};
    } else if (elem === "roi") {
      ctx={...ctx, roi : +e.target.value};
    } else if (elem === "tp") {
      ctx={...ctx, tp : +e.target.value};
    }
    onUpdate(ctx);
    //console.log(data);
    setTimeout(() => {
      if (e.target.value <= min) {
        setData(min);
      }
      if (e.target.value > max) {
        setData(max);
      }

      if (e.target.value <= max && e.target.value >= min) {
        if (elem === "investment") {
          inpCtx.investment = e.target.value;
        } else if (elem === "roi") {
          inpCtx.roi = e.target.value;
        } else if (elem === "tp") {
          inpCtx.tp = e.target.value;
        }
      }
      //console.log(inpCtx);
    }, 1000);

    
  }

  let minString = `Minimum value allowed is ${min}`;
  let element = "investment";
  if (children === "Rate of Interest(% p.a)") {
    element = "roi";
  } else if (children === "Time period") {
    element = "tp";
  } else {
    element = "investment";
  }
  return (
    <>
      <div id="top">
        <h2>{children}</h2>
        <FontAwesomeIcon
          className="styleicon"
          title={minString}
          icon={faCircleInfo}
        />
      </div>
      <div className="box">
        <div className="slider">
          <input
            type="range"
            min={min}
            max={max}
            value={data}
            step={step}
            onChange={(e) => handleChange(e, element)}
          />
        </div>
        <div className="flex">
          <input
            type="number"
            className="value"
            min={min}
            max={max}
            step={step}
            value={data}
            onChange={(e) => handleChange(e, element)}
          />
          <span className="unit">{unit}</span>
        </div>
      </div>
    </>
  );
}
