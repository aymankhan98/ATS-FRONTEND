// pages/index.js
import WelcomeBanner from "../common/welcomeBanner";

export default function DbWelcomeBanner() {
  return (
    <div className="  flex ">
      <WelcomeBanner
        name="Edward Brown"
        greeting="Hi"
        message="Welcome back! Here's an overview of your recent activity and key insights to keep you on track today."
      />
    </div>
  );
}
