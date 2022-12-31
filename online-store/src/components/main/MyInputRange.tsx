import React, { ChangeEvent, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { TRange } from '../../interfase';
import Loader from '../../controller/loader';
import ReactSlider from 'react-slider';
import './rangeCss.scss';

function MyInputRange ({ title, rangeData, loadQuery }: TRange): JSX.Element {
  // const loader = new Loader();
  // const [value, setValue] = useState([50, 500]);
  // console.log(value);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ height: 50 }}>
      <b>{title}</b>
      <ReactSlider
        min={rangeData.startMin}
        max={rangeData.startMax}
        value={[rangeData.min, rangeData.max]}
        // onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
        onAfterChange={(value, index) => {
          // console.log(`onAfterChange: ${JSON.stringify({ value, index })}`);
          setSearchParams(loadQuery(title.toLocaleLowerCase(), `${value[0]}↕${value[1]}`, true));
          // setValue([value[0], value[1]]);
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
