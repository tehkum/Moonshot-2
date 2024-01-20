import axios from "axios";
import { PropTypes } from "prop-types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selected, setSelected] = useState(null);
  const [fullDate, setFullDate] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://app.appointo.me/scripttag/mock_timeslots?start_date=2024-01-20&end_date=2024-01-30"
        );
        console.log(res);
        setData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();

    return () => {};
  }, []);

  const filterData = useMemo(() => {
    if (!selectedDate) return null;
    console.log(data.filter((item) => item.date === selectedDate));
    return data.find((item) => item.date === selectedDate);
  }, [selectedDate, data]);

  return (
    <DataContext.Provider
      value={{
        data,
        setSelectedDate,
        selectedDate,
        filterData,
        selected,
        fullDate,
        setFullDate,
        setSelected,
        setLoading,
        loading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const UseData = () => useContext(DataContext);

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
