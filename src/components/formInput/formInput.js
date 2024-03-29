import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormInput.module.scss';

export default function FormInput(props) {
  const { helpMessage, id, labelText, onChange, placeholder, type, value } = props;

  return (
    <>
      <div className={`field ${styles.wrapper}`}>
        <label className="label" htmlFor={id}>
          {labelText}
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              id={id}
              name={id}
              placeholder={placeholder}
              onChange={onChange}
              required
              type={type}
              size="20"
              value={value}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </div>
        </label>
        <p className="help is-success">{helpMessage}</p>
      </div>
    </>
  );
}
FormInput.propTypes = {
  helpMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};
FormInput.defaultProps = {
  helpMessage: '',
  labelText: 'label !',
  placeholder: 'placeholder !',
  onChange: () => {
    /* noop */
  },
  type: 'text',
  value: '',
};
