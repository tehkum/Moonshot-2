import "./App.css";
import Header from "./Components/Header/Header";
import MapLayout from "./Components/map-layout/MapLayout";

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100% - 61px)",
          width: "100%",
        }}
      >
        <MapLayout />
      </div>
    </>
  );
}

export default App;
