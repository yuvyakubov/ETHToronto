import OtherLayout from "./layouts/OtherLayout.js";
import MobileLayout from "./layouts/MobileLayout.js";
import StepScreen from "./screens/StepScreen.js";
import CustomerProfileScreen from './screens/CustomerProfileScreen.js';

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#5E17EB", height: "100vh" }}
    >
      <MobileLayout>
        <StepScreen />
        <CustomerProfileScreen/>
      </MobileLayout>
      <OtherLayout>Please use your phone to use the app</OtherLayout>
    </div>
  );
}

export default App;
