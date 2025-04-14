import React from "react";
import './Button.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Renders a customizable button component with optional styling and icon.
 *
 * @param {Object} props - The props object.
 * @param {string} props.variant - The style variant of the button (e.g., "success", "danger" "info").
 * @param {boolean} props.rounded - Determines if the button should have rounded corners.
 * @param {string} props.label - The text label displayed inside the button.
 * @param {object} [props.icon] - Optional FontAwesome icon to display inside the button.
 * @param {string} [props.size="normal"] - The size of the button (e.g., "small", "normal", "large").
 * @param {functon} [props.onClick=undefined] - onClick fn.
 *
 * @returns {JSX.Element} The rendered button element.
 */
function Button({ variant, rounded, label, icon, size = "normal", onClick, outlined = false }) {
  return (
    <button
      className={`
          Button 
          Button__${variant} 
          Button__${rounded ? "rounded" : ""} 
          Button__${outlined ? "outlined" : ""} 
          Button__${size}`
      }
      onClick={onClick || null}
    >
      {label}
      <span className='Button__icon'>
        {
          icon ? <FontAwesomeIcon icon={icon} /> : null
        }
      </span>
    </button>
  )
}

export default Button;
