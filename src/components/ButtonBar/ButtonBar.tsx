import React, { FC } from 'react';
import Button from '../Button';

interface IButtonBar {
  addFunc: VoidFunction;
  resetFunc: VoidFunction;
  removeFunc: VoidFunction;
}

const ButtonBar: FC<IButtonBar> = props => (
  <div className="d-flex flex-row">
    <Button
      btnType="btn-success"
      btnIcon="plus"
      onClick={props.addFunc}
    />
    <Button
      btnType="btn-warning"
      btnIcon="sync"
      onClick={props.resetFunc}
    />
    <Button
      btnType="btn-danger"
      btnIcon="minus"
      onClick={props.removeFunc}
    />
  </div>
);

export default ButtonBar
