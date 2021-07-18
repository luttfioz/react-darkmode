import React from 'react';
import Switch from 'react-switch';

export default function DarkModeDemo(props) {
  function handleChange() {
    props.onChecked(!props.checked);
  }
  return (
    <div>
      <div className={'Switch'}>
        <Switch
          checked={props.checked}
          onChange={handleChange}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
      </div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
