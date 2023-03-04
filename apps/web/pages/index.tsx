import Navigation from "@components/Navigation";
import { styled } from "@styles/stiches.config";

const Button = styled("button", {
  background: "$pink6",
  textDecoration: "none",
  display: "block",
});

export default function IndexPage() {
  return (
    <div>
      <Navigation />
      <h1>Hello World heyyeyyeyey</h1>
      <Button>Hello world</Button>
    </div>
  );
}
