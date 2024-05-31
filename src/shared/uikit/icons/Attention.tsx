import { FC } from "react";
import Styles from "./Icon.module.scss";

const Attention: FC = () => {
  return (
    <div className={Styles.attention}>
      <div style={{ position: "absolute" }}>
        <svg viewBox='0 0 45 44' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M22.8093 42C25.4153 42.0034 27.9962 41.4876 30.4038 40.4823C32.8114 39.477 34.9982 38.002 36.8385 36.142C38.6836 34.2869 40.1469 32.0826 41.1442 29.6556C42.1415 27.2287 42.6532 24.627 42.6498 22C42.6531 19.3731 42.1414 16.7714 41.1441 14.3444C40.1468 11.9175 38.6836 9.71312 36.8385 7.85802C34.9982 5.99804 32.8114 4.52302 30.4038 3.5177C27.9962 2.51239 25.4153 1.99661 22.8093 2.00002C20.2033 1.99667 17.6224 2.51247 15.2148 3.51778C12.8072 4.52309 10.6204 5.99809 8.78005 7.85802C6.93496 9.71312 5.47172 11.9175 4.47443 14.3444C3.47713 16.7714 2.96544 19.3731 2.96877 22C2.96539 24.627 3.47705 27.2287 4.47435 29.6556C5.47165 32.0826 6.93491 34.2869 8.78005 36.142C10.6204 38.0019 12.8072 39.4769 15.2148 40.4823C17.6224 41.4876 20.2033 42.0034 22.8093 42Z'
            stroke='#4B4B4B'
            strokeWidth='4'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      <div className={Styles.attention1}>
        <svg width='6' height='5' viewBox='0 0 6 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.80819 5C3.46594 5 4.09676 4.73661 4.56186 4.26777C5.02696 3.79893 5.28825 3.16304 5.28825 2.5C5.28825 1.83696 5.02696 1.20107 4.56186 0.732231C4.09676 0.26339 3.46594 0 2.80819 0C2.15044 0 1.51962 0.26339 1.05452 0.732231C0.589417 1.20107 0.328125 1.83696 0.328125 2.5C0.328125 3.16304 0.589417 3.79893 1.05452 4.26777C1.51962 4.73661 2.15044 5 2.80819 5Z'
            fill='#4B4B4B'
          />
        </svg>
      </div>

      <div className={Styles.attention2}>
        <svg width='5' height='20' viewBox='0 0 5 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M2.80859 2V18' stroke='#4B4B4B' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </div>
    </div>
  );
};

export default Attention;
