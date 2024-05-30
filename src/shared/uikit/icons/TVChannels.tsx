import { FC } from "react";

const TVChannels: FC = () => {
  return (
    <div style={{ position: "relative", width: "24px", height: "24px" }}>
      <div style={{ position: "absolute" }}>
        <svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M2.75 19.1001L18.75 19.1001C19.853 19.1001 20.75 18.2031 20.75 17.1001V6.1001C20.75 4.9971 19.853 4.1001 18.75 4.1001H14.75L16.55 1.7001L14.95 0.500097L12.25 4.1001H9.25L6.55 0.500097L4.95 1.7001L6.75 4.1001H2.75C1.647 4.1001 0.75 4.9971 0.75 6.1001V17.1001C0.75 18.2031 1.647 19.1001 2.75 19.1001ZM18.75 6.1001V17.1001L2.75 17.1001L2.749 6.1001L18.75 6.1001Z' />
        </svg>
      </div>

      <div style={{ position: "absolute", left: "4px", top: "2px" }}>
        <svg width='5' height='3' viewBox='0 0 5 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M0.75 0.5H4.75V2.5H0.75V0.5Z' />
        </svg>
      </div>
    </div>
  );
};

export default TVChannels;
