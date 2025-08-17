import { NextPage } from "next";
import Home from "@/components/screens/home/home";
import MainLayout from "@/components/layouts/mainLayout/mainLayout";

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>);
}

export default HomePage;