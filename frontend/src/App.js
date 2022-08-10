<<<<<<< Updated upstream
import OtherLayout from "./layouts/OtherLayout.js";
import MobileLayout from "./layouts/MobileLayout.js";
import StepScreen from "./screens/StepScreen.js";
=======
import OtherLayout from './layouts/OtherLayout.js'
import MobileLayout from './layouts/MobileLayout.js'
import CustomerProfileScreen from './screens/CustomerProfileScreen.js';
>>>>>>> Stashed changes

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#5E17EB", height: "100vh" }}
    >
      <MobileLayout>
<<<<<<< Updated upstream
        <StepScreen />
=======
        <CustomerProfileScreen/>
>>>>>>> Stashed changes
      </MobileLayout>
      <OtherLayout>Please use your phone to use the app</OtherLayout>
    </div>
  );
}

export default App;
