"use client";
import { useCountdown } from "@/utils/useCountdown";

interface CountdownProps {
  targetDate: number;
}

interface CounterProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface DateTimeDisplayProps {
  value: number;
  type: string;
  isDanger?: boolean;
}

const DateTimeDisplay = ({ value, type, isDanger }: DateTimeDisplayProps) => {
  return (
    <div
      className={`${
        isDanger ? "text-red-500" : "text-slate-900"
      } flex flex-col items-center`}
    >
      <p className="text-6xl font-bold drop-shadow-md">{value}</p>
      <span>{type}</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }: CounterProps) => {
  return (
    <div className="flex items-center gap-6">
      <DateTimeDisplay value={days} type="Day" isDanger={days <= 3} />
      <p className="text-3xl font-bold">:</p>
      <DateTimeDisplay value={hours} type="Hours" />
      <p className="text-3xl font-bold">:</p>
      <DateTimeDisplay value={minutes} type="Minutes" />
      <p className="text-3xl font-bold">:</p>
      <DateTimeDisplay value={seconds} type="Seconds" />
    </div>
  );
};

const ExpiredNotice = () => {
  return (
    <>
      <div className="flex items-center gap-6">
        <DateTimeDisplay value={0} type="Day" />
        <p className="text-3xl font-bold">:</p>
        <DateTimeDisplay value={0} type="Hours" />
        <p className="text-3xl font-bold">:</p>
        <DateTimeDisplay value={0} type="Minutes" />
        <p className="text-3xl font-bold">:</p>
        <DateTimeDisplay value={0} type="Seconds" />
      </div>
      <p className="mt-6 text-center text-2xl font-bold text-slate-900">
        Competition is now open!
      </p>
    </>
  );
};

function Countdown({ targetDate }: CountdownProps) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  }
  return (
    <div>
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
}

export default Countdown;
