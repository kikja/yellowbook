import ResponsiveAppBar from "./components/Appbar/ResponsiveAppBar";
import SearchBox from "./components/SearchBox/SearchBox";
import './App.css'
import EmergencyNumber from "./components/EmergencyNumber/EmergencyNumber";
function App() {


  return (
    <div>
      <ResponsiveAppBar/>
      <SearchBox/>
      <EmergencyNumber/> 
    </div>
  );
}

export default App;
