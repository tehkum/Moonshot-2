import { UseData } from "../../context/context";
import { formatToCustomString, getReadableTime } from "../../utils";
import CalendarArea from "../Calender/Calender1";
import "./layout.css";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import loader from "../../assets/loading.svg";

export default function MapLayout() {
  const { filterData, setSelected, selected, fullDate, loading } = UseData();

  return (
    <div className="cal-container">
      <div className="cal-upper">
        <div className="section-calendar">
          <div className="section-details">
            <h3>Test Service</h3>
            <p>
              <b>Timezone:</b> Asia/Calcutta
            </p>
          </div>
          <CalendarArea />
        </div>
        <div className="section-show">
          <div className="section-show-base">
            <label>
              <p>SELECT FROM VARIANT</p>
              <select>
                <option>30 min</option>
                <option>60 min</option>
              </select>
            </label>
            <hr></hr>
            <p className="date-desc">
              {formatToCustomString(fullDate)} available slots
            </p>
            {loading ? (
              <div className="loading">
                <img src={loader} alt="loading" />
              </div>
            ) : (
              <div className="time-stamps">
                {filterData ? (
                  filterData?.slots?.map((slot, index) => (
                    <div
                      key={index}
                      className={
                        index === selected ? "slot-chip-active" : "slot-chip"
                      }
                      onClick={() => setSelected(index)}
                    >
                      {getReadableTime(slot?.start_time)} -{" "}
                      {getReadableTime(slot?.end_time)}
                      {index === selected && <CheckCircleOutlineOutlinedIcon />}
                    </div>
                  ))
                ) : (
                  <div className="slot-chip-notavailable">
                    No slots available
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="cal-bottom">
        <p>POWERED BY TEHKUM</p>
        <button>Next &gt;</button>
      </div>
    </div>
  );
}
