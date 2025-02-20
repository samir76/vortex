import Header from '../Header';
import Footer from '../Footer';
import AboutPage from './AboutPage';
import { AboutusPages } from '../Data';

function AboutusBreeding() {
  const BreedingContent = AboutusPages.filter(item => item.MainCat === "BREEDING" && item.id === "4")[0].Paragraph;

  return (
    <>
      <Header />
              <AboutPage title="Health" content={BreedingContent} />
      <Footer />
    </>
  );
}

export default AboutusBreeding;