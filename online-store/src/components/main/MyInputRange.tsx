import React, { ChangeEvent, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TRange } from '../../interfase';
import ReactSlider from 'react-slider';

function MyInputRange ({ title, rangeData, getQueryParams }: TRange): JSX.Element {
  const [value, setValue] = useState([rangeData.min, rangeData.max]);
  const setSearchParams = useSearchParams()[1];
  useEffect(() => { setValue([rangeData.min, rangeData.max]); }, [rangeData.min, rangeData.max]);

  return (
    <div style={{ height: 50 }}>
      <b>{title}</b>
      <ReactSlider
        min={rangeData.startMin}
        max={rangeData.startMax}
        value={value}
        // onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
        onAfterChange={(value, index) => {
          // console.log(`onAfterChange: ${JSON.stringify({ value, index })}`);
          setValue([value[0], value[1]]);
          setSearchParams(getQueryParams(title.toLocaleLowerCase(), `${value[0]}↕${value[1]}`, true));
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
