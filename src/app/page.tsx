import Container from "@/components/Container";
import Header from "@/components/Header";
import HomeMenu from "@/components/HomeMenu";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="bg-background overflow-y-scroll scrollbar-hide">
      <Header/>
      <HomeMenu />
    </Container>
  );
}
