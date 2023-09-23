import React from 'react';
import s from './MyInput.module.scss';

type MyInputProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeInput: () => void;
}

const MyInput: React.FC<MyInputProps> = ({ value, onChange, removeInput }) => {

  return (
    <form className={s.form}>
      <input className={s.input} value={value} type="text" placeholder="Искать здесь..." onChange={onChange} />
      <button type="submit"></button>
      <div className={s.icon}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            className="logo"
            stroke-linecap="round"
            stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              opacity="0.1"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 3C4.5885 3 3 4.5885 3 12C3 19.4115 4.5885 21 12 21C19.4115 21 21 19.4115 21 12C21 4.5885 19.4115 3 12 3ZM11.5 7.75C9.42893 7.75 7.75 9.42893 7.75 11.5C7.75 13.5711 9.42893 15.25 11.5 15.25C13.5711 15.25 15.25 13.5711 15.25 11.5C15.25 9.42893 13.5711 7.75 11.5 7.75Z"
              fill="#323232"></path>{' '}
            <path
              d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
              stroke="#323232"
              stroke-width="2"></path>{' '}
            <path
              d="M14 14L16 16"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"></path>{' '}
            <path
              d="M15 11.5C15 13.433 13.433 15 11.5 15C9.567 15 8 13.433 8 11.5C8 9.567 9.567 8 11.5 8C13.433 8 15 9.567 15 11.5Z"
              stroke="#323232"
              stroke-width="2"></path>{' '}
          </g>
        </svg>
      </div>
      <div className={value ? s.clear : s.none} onClick={removeInput}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 9L15 15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 9L9 15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12" r="9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> </g></svg>
      </div>

    </form>
  );
};

export default MyInput;
