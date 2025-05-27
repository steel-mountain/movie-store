import { Link } from "react-router-dom";
import Wrapper from "../wrapper/Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <Link
        to="/"
        className="text-[#535353] hover:text-default font-bold text-3xl dark:text-[#FBFDFC]"
      >
        Movie-store
      </Link>
      <p className="mt-[10px] text-xl text-[#373737] dark:text-white">
        2024 ООО "Movie-store". Все права защищены. 12+
      </p>
    </Wrapper>
  );
};

export default Footer;
