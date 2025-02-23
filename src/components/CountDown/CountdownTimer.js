import React from 'react';
import { useCountdown } from '../../context/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Kết Thúc!!!</span>
      <p>Xin vui lòng quay lại lần sau.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="text">GIẢM GIÁ 50%</div>
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={'Ngày'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Giờ'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Phút'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Giây'} isDanger={false} />
      </div>
      <a href="/sukienuudai" className="button--link button--flex">
        Mua Ngay <i className="ri-arrow-right-down-line button__icon" />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
  }
};

export default CountdownTimer;
