import PropTypes from "prop-types";
import cn from 'classnames';

import s from './Button.module.scss'

const Button = ({
  value,
  onClick,
  color,
}) => {

  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button
      className={cn(s.root, s[color])}
      onClick={handleClick}
    >
      <span>{value}</span>
    </button>
  )
}

Button.defaultProps = {
  color: 'default',
}

Button.propTypes = {
  value: PropTypes.node,
  color: PropTypes.oneOf(['default', 'black', 'pink']),
  onClick: PropTypes.func,
}


export default Button;