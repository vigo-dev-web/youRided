import Link from "next/link";
import Image from "next/image";
import logoImg from "@/../public/images/Logo_500x250.png";
import { FC } from "react";

interface ILogoProps {
   size: number
}


const Logo: FC<ILogoProps> = ({size}: ILogoProps) => {
   return (
      <Link href={'/'}>
         <Image src={logoImg} width={size} priority={true} alt="Логотип"/>
      </Link>
    );
}

export default Logo;