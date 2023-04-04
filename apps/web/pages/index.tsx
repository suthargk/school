import FrequentlyAskedQuestions from "@components/Home/FrequentlyAskedQuestions";
import Header from "@components/Home/Header";
import News from "@components/Home/News";
import Pictures from "@components/Home/Pictures";
import Testinomials from "@components/Home/Testinomials";
import Navigation from "@components/Navigation";

export default function IndexPage() {
  return (
    <div>
      <Navigation />
      <Header />
      <News />
      <Testinomials />
      <FrequentlyAskedQuestions />
      <Pictures />
    </div>
  );
}
