import React, { ChangeEvent, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { IRange } from '../../interfase';
import Loader from '../../controller/loader';

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
  return (
    <div className='multi-range-slider-container'>
    <b>{title}</b>
    <MultiRangeSlider
      min={0}
      max={1000}
      step={1}
      minValue={minValue}
      maxValue={maxValue}
      // onInput={(e: ChangeResult) => {
      //   setMinValue(e.minValue);
      //   setMaxValue(e.maxValue);
      //   // setSearchParams(loader.loadQuery('price', `${minValue}↕${maxValue}`, true));
      // }}
      onChange={(e: ChangeResult) => {
        // isChanged = true;
        setSearchParams(loader.loadQuery('price', `${e.minValue}↕${e.maxValue}`, true));
        setMinValue(e.minValue);
        setMaxValue(e.maxValue);
      }}
      label={false}
      ruler={false}
    ></MultiRangeSlider>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ margin: '10px' }}>{minValue}</div>
      <div style={{ margin: '10px' }}>{maxValue}</div>
    </div>
  </div>
  );
}
export default MyInputRange;
