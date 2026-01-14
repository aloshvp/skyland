
import { websiteName } from "@utils/CommonData"
const WelcomePage = () => {
  return (
    <div className="welcomeMessage">
        <h2>Welcome Back, User!</h2>
        <div className="card">
          <p>This is your dedicated control center for managing the core content and user interactions on the {websiteName} website.</p>
          <p>Our goal is to keep this panel light, fast, and focused on the tasks you perform most often.</p>
        </div>
    </div>
  )
}

export default WelcomePage