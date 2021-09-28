import React from 'react';
import Select from 'react-select';
import { appColors } from '../appStyleInfo';
const primary = appColors.primary;
const neutrals = appColors.neutrals;
const errorColor = appColors.error;
const darkerror = appColors.darkerror;
const info = appColors.info;
const getCustomStyles = (darkMode, error) => {
  return {
    option: (provided, state) => {
      return {
        ...provided,
        cursor: 'pointer',
        color: state.isFocused
          ? darkMode
            ? primary[100]
            : info[50]
          : darkMode
          ? primary[800]
          : neutrals[700],
        backgroundColor: state.isFocused
          ? darkMode
            ? primary[600]
            : info[500]
          : darkMode
          ? primary[200]
          : '#fff',
      };
    },
    menu: (provided) => {
      return {
        ...provided,
        backgroundColor: darkMode ? primary[200] : '#fff',
      };
    },
    singleValue: (provided) => {
      return {
        ...provided,
        color: error
          ? darkMode
            ? darkerror[800]
            : errorColor[800]
          : darkMode
          ? primary[500]
          : info[500],
        fontWeight: 'bold',
      };
    },
    indicatorSeparator: (provided, state) => {
      return {
        ...provided,
        backgroundColor: error
          ? darkMode
            ? darkerror[800]
            : errorColor[800]
          : state.hasValue
          ? darkMode
            ? primary[700]
            : info[500]
          : darkMode
          ? primary[400]
          : neutrals[200],
      };
    },
    dropdownIndicator: (provided, state) => {
      return {
        ...provided,
        color: error
          ? darkMode
            ? darkerror[800]
            : errorColor[800]
          : state.hasValue
          ? darkMode
            ? primary[700]
            : info[500]
          : darkMode
          ? primary[400]
          : neutrals[200],
      };
    },
    placeholder: (provided) => {
      return {
        ...provided,
        color: error
          ? darkMode
            ? darkerror[800]
            : errorColor[800]
          : darkMode
          ? primary[500]
          : neutrals[500],
        fontWeight: 'bold',
      };
    },
    control: (provided, state) => {
      return {
        ...provided,
        backgroundColor: error
          ? darkMode
            ? darkerror[300]
            : errorColor[100]
          : darkMode
          ? primary[200]
          : '#fff',
        border: `1px solid ${
          error
            ? darkMode
              ? darkerror[300]
              : errorColor[100]
            : darkMode
            ? primary[200]
            : neutrals[100]
        } !important`,
        borderRadius: 10,
        padding: '0.75rem 1rem',
        outline: 'none',
        boxShadow: 'none',
        cursor: 'pointer',
      };
    },
  };
};

const SelectStyled = ({ label, error, value, ...rest }) => {
  const darkMode = false;
  const colors = error
    ? 'bg-error-50 dark:bg-darkerror-300 text-darkerror-300 font-bold'
    : 'bg-white dark:bg-primary-200 text-neutrals-500 dark:text-darkprimary-700 border-1 border border-neutrals-100 font-bold dark:border-primary-300 dark:border-opacity-50';
  return (
    <div className="relative">
      <Select
        styles={getCustomStyles(darkMode, error)}
        value={value}
        {...rest}
      />
      {label && value && (
        <label
          className={
            'absolute -top-3 -translate-y-1/2 transition duration-150 pointer-events-none py-0.5 mb-0 rounded-md left-4 px-2 text-xs ' +
            colors
          }>
          {label}
        </label>
      )}
      {error && (
        <span className="absolute bottom-1 text-xs text-error-300 dark:text-error-50 left-7">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default SelectStyled;
