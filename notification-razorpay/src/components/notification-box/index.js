import { useEffect, useRef, useState } from "react";
import "./styles.css";

export const NotificationBox = ({
  type,
  title,
  delay,
  removeNotification,
  id,
}) => {
  const [timeRemain, setTimeRemain] = useState(delay);
  const timeoutId = useRef(null);
  const intervalId = useRef(null);

  const onHandleMouseEnter = () => {
    clearTimeout(timeoutId.current);
    clearInterval(intervalId.current);
  };

  const onHandleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      removeNotification(id);
    }, timeRemain);
    
    intervalId.current = setInterval(() => {
      setTimeRemain((val) => {
        return val - 10;
      });
    }, 10);
  };

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      removeNotification(id);
    }, delay ?? 5000);

    intervalId.current = setInterval(() => {
      setTimeRemain((val) => {
        return val - 10;
      });
    }, 10);

    return () => {
      clearTimeout(timeoutId.current);
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <div
      className="notification__box__container"
      onMouseEnter={onHandleMouseEnter}
      onMouseLeave={onHandleMouseLeave}
    >
      <div className={`notification__box`}>
        {title}
        <div className="progress__container"></div>
      </div>
      <div
        className={`progress ${type}`}
        style={{ width: `${(timeRemain / delay) * 100}%` }}
      />
    </div>
  );
};
