import "./App.css";
import Header from "./Components/Header/Header";
import MapLayout from "./Components/map-layout/MapLayout";
import Sidelines, {
  SidelineB,
  SidelineC,
  SidelineD,
  SidelineE,
} from "./Components/sidelines/Sideline1";

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
          zIndex: "100",
        }}
      >
        <MapLayout />
      </div>
      <Sidelines />
      <SidelineB />
      <SidelineC />
      <SidelineD />
      <SidelineE />
    </>
  );
}

export default App;
