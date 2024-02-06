import React, { useState, useEffect } from 'react';
import '../../stylesheet/Home-Counter.css';

const zerofill = (value) => (value < 10 && value > -1 ? '0' : '') + value;

const Tracker = ({ property, time }) => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (time[property] === undefined) {
      setShow(false);
      return;
    }

    const val = time[property];
    setShow(true);

    if (val !== current) {
      setPrevious(current);
      setCurrent(val);
    }
  }, [property, time, current]);

  return (
   
    <span style={{ display: show ? 'inline-block' : 'none' }} className="flip-clock__piece">
      <span className={`flip-clock__card flip-card ${show ? 'flip' : ''}`}>
        <b className="flip-card__top">{zerofill(current)}</b>
        <b className="flip-card__bottom" data-value={zerofill(current)}></b>
        <b className="flip-card__back" data-value={zerofill(previous)}></b>
        <b className="flip-card__back-bottom" data-value={zerofill(previous)}></b>
      </span>
      <span className="flip-clock__slot text-[18px]">{property}</span>
    </span>

  );
};

const Countdown = ({ date, callback }) => {
  const [time, setTime] = useState({});
  let frame;

  const setCountdown = (countdownDate) => {
    if (countdownDate) {
      const countdown = new Date(countdownDate);
      setTime({
        Days: Math.floor(countdown / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((countdown / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((countdown / 1000 / 60) % 60),
        Seconds: Math.floor((countdown / 1000) % 60),
        Total: countdown,
      });
    }
  };

  const update = () => {
    frame = requestAnimationFrame(update);
    if (frame % 10 !== 0) return;

    const currentTime = new Date();
    let t;

    if (date) {
      const countdown = new Date(date);
      t = countdown - currentTime;
      setTime({
        Days: Math.floor(t / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((t / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((t / 1000 / 60) % 60),
        Seconds: Math.floor((t / 1000) % 60),
        Total: t,
      });
    } else {
      const initialTime = new Date();
      initialTime.setDate(initialTime.getDate() + 2);
      initialTime.setHours(initialTime.getHours() + 11);
      setTime({
        Days: 2,
        Hours: 11,
        Minutes: initialTime.getMinutes(),
        Seconds: initialTime.getSeconds(),
      });
    }

    callback && callback(time);
  };

  useEffect(() => {
    if (window.requestAnimationFrame) {
      setCountdown(date);
      callback = callback || function () {};
      update();
    }

    return () => {
      if (window.cancelAnimationFrame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [date, callback]);

  return (
    <div className="flip-clock md:w-92 md:h-48  sm:left-0 sm:h-[100px] md:flex md:ml-[15%]  md:w-[100%] sm:w-[100%] sm:flex sm:justify-center sm:gap-[3rem] sm:items-center" data-date={date} onClick={update} >
  {['Days', 'Hours', 'Minutes', 'Seconds'].map((tracker) => (
    <Tracker key={tracker} property={tracker} time={time} className='border' />
  ))}
</div>

  );
};

export default Countdown;
