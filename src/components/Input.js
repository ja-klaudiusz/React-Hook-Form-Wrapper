import React from 'react';

const Input = ({
  adornment,
  variant = 'solid',
  size = null,
  type = 'text',
  focusColor = 'secondary',
  placeholder,
  disabled,
  error,
  ...rest
}) => {
  const darkMode = false;
  const labelColors = error
    ? 'bg-red-50 dark:bg-red-300 text-red-300 font-bold'
    : 'bg-white dark:bg-blue-200 text-coolGray-500 dark:text-blue-700 border-1 border border-coolGray-100 font-bold dark:border-blue-300 dark:border-opacity-50';

  const inputBoxColors = error
    ? darkMode
      ? 'dark:bg-red-300 dark:border-red-300'
      : 'bg-red-100 border-red-100'
    : darkMode
    ? 'dark:bg-blue-200 dark:border-blue-200'
    : 'bg-white border-coolGray-100';

  const inputColors = error
    ? darkMode
      ? 'dark:placeholder-red-800 dark:focus:placeholder-red-300'
      : 'placeholder-red-800 focus:placeholder-red-100'
    : darkMode
    ? 'dark:placeholder-blue-500 dark:focus:placeholder-blue-200'
    : 'placeholder-coolGray-300 focus:placeholder-white';

  return (
    <div
      className={
        'relative border border-1  label-floating rounded-lg ' + inputBoxColors
      }>
      <input
        {...rest}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={
          'w-full px-7 py-5 bg-transparent font-bold dark:text-blue-800 text-coolGray-700 outline-none ' +
          inputColors
        }
      />
      {placeholder && (
        <label
          className={
            'input-label hidden absolute -top-3 pointer-events-none py-0.5 mb-0 rounded-md left-4 px-2 text-xs ' +
            labelColors
          }>
          {placeholder}
        </label>
      )}

      {adornment && (
        <div
          className={
            'absolute transform -translate-y-1/2 right-6 text-sm top-1/2 pointer-events-none rounded-md px-2 ' +
            (error
              ? 'bg-red-50 dark:bg-red-400 font-bold'
              : 'dark:bg-blue-600 bg-blue-300 text-white dark:text-blue-200 font-bold') +
            (disabled ? ' opacity-50' : '')
          }>
          {adornment}
        </div>
      )}
      {error && (
        <span className="absolute bottom-1 text-xs text-red-300 dark:text-red-50 left-7">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default Input;
