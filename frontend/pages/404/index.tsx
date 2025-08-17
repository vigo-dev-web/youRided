import { NextPage } from "next";
import Link from "next/link";

const ErrorPage: NextPage = () => {
   return (
      <div>
         <h1>Ошибка 404</h1>
         <p>Страница не найдена</p>
         <Link href={'/'}>Пожалуйста перейдите на главную!</Link>
      </div>
   )
}

export default ErrorPage;