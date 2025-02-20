import Header from '../Header';
import Footer from '../Footer';
import AboutPage from './AboutPage';
import { AboutusPages } from '../Data';

function AboutusHistory() {
  const HistoryContent = AboutusPages.filter(item => item.MainCat === "HISTORY" && item.id === "1")[0].Paragraph;

  return (
    <>
      <Header />
              <AboutPage title="History" content={HistoryContent} />
      <Footer />
    </>
  );
}

export default AboutusHistory;