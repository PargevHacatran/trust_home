
import { AboutMain } from "../components/about/AboutMain";
import { HowItWork } from "../components/about/HowItWork";
import { MarketProblems } from "../components/about/MarketProblems";
import { OurMission } from "../components/about/OurMission";
import { OurStats } from "../components/about/OurStats";
import styles from "../styles/about.module.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <>
    <Navbar />
    <div className={styles.about_wrapper}>
      <AboutMain />
      <OurMission />
      <MarketProblems />
      <HowItWork />
      <OurStats />
    </div>
    <Footer/>
</>
  );
}
export default About;