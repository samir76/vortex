import Header from '../Header';
import Footer from '../Footer';
import AboutPage from './AboutPage';
import { AboutusPages } from '../Data';

function AboutusHealth() {
  const healthContent = AboutusPages.filter(item => item.MainCat === "HEALTH" && item.id === "2")[0].Paragraph;

  return (
    <>
      <Header />
      <AboutPage title="Health" content={healthContent} />
      <Footer />
    </>
  );
}

export default AboutusHealth;