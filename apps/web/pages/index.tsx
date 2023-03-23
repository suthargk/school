import Header from "@components/Home/Header";
import News from "@components/Home/News";
import Navigation from "@components/Navigation";

export default function IndexPage() {
  return (
    <div>
      <Navigation />
      <Header />
      <News />
    </div>
  );
}
