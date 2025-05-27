import { FC, ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const Wrapper: FC<PropsType> = ({ children }) => {
  return (
    <section className="l:container w-full mx-auto py-6 px-4 ">
      {children}
    </section>
  );
};

export default Wrapper;
