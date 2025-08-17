import MainLayout from "@/components/layouts/mainLayout/mainLayout";
import Catalog from "@/components/screens/catalog/catalog";
import { NextPage } from "next";

const Equipment: NextPage = () => {
   return (
      <MainLayout>
         <Catalog />
      </MainLayout>);
}

export default Equipment;