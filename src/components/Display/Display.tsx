import React, { FC } from 'react';

interface IDisplay {count: number}

const Display:FC<IDisplay> = props => (
  <div className="d-flex align-items-center bg-light text-secondary">
    <div className="mx-auto display-1">{props.count}</div>
  </div>
);

export default Display