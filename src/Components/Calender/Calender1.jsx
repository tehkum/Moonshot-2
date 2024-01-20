import { useMemo, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import "./calendar.css";
import { convertDateString } from "../../utils";
import { UseData } from "../../context/context";
import moment from "moment";

export default function CalendarArea() {
  const [value, onChange] = useState(new Date());
  const { setSelectedDate, setSelected, setFullDate, data, setLoading } =
    UseData();

  const handleDateChange = (date) => {
    setSelectedDate(convertDateString(date));
    setLoading(true);
    setTimeout(() => {
      return setLoading(false);
    }, 1100);
    onChange(date);
    setSelected(null);
    setFullDate(date);
  };

  const mark = useMemo(() => {
    if (data) {
      return data.map((item) => item.date);
    }
  }, [data]);

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={value}
        tileClassName={({ date }) => {
          if (!mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return "highlight";
          }
        }}
      />
    </div>
  );
}
