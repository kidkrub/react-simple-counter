import React, { FC } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IButtonProps {
  onClick: VoidFunction;
  btnType: string;
  btnIcon: string;
}
const Button: FC<IButtonProps> = props => (
  <button className={`btn w-100 ${props.btnType}`} onClick={props.onClick}>
    <FontAwesomeIcon icon={props.btnIcon as IconName} />
  </button>
);

export default Button;

Button.defaultProps = {
    onClick: () => alert('I need Function'),
    btnType: ''
}