import Header from '../Header';
import Footer from '../Footer';
import AboutPage from './AboutPage';
import { AboutusPages } from '../Data';

function AboutusVacc() {
  const VaccContent = AboutusPages.filter(item => item.MainCat === "VACCINATION" && item.id === "3")[0].Paragraph;

  return (
    <>
      <Header />
      <AboutPage title="Vacc" content={VaccContent} />
      <Footer />
    </>
  );
}

export default AboutusVacc;