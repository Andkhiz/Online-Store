import React, { ChangeEvent, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { IRange } from '../../interfase';
import Loader from '../../controller/loader';
import ReactSlider from 'react-slider';

// import './rangeCss.scss' as style;
// сделала для проверки потом перенесем в интерфейсы

function MyInputRange ({ title }: IRange): JSX.Element {
  const loader = new Loader();
  const [minValue, setMinValue] = useState(50);
  const [maxValue, setMaxValue] = useState(550);
  console.log(minValue, maxValue);
  const [searchParams, setSearchParams] = useSearchParams();
  // let isChanged = false;
  // function handleChange (): void {
  //   console.log('changed');
  //   setSearchParams(loader.loadQuery('price', `${minValue}↕${maxValue}`, true));
  //   isChanged = false;
  // }
  const [value, setValue] = useState([25, 50]);

  return (
    <div style={{ height: 50 }}>
      <b>{title}</b>
      <ReactSlider
        value={value}
        onBeforeChange={(value, index) =>
          console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
        }
        onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
        onAfterChange={(value, index) => {
          console.log(`onAfterChange: ${JSON.stringify({ value, index })}`);
          setSearchParams(loader.loadQuery(title, `${value[0]}↕${value[1]}`, true));
          setValue([value[0], value[1]]);
        }}
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </div>
  );
}
export default MyInputRange;
