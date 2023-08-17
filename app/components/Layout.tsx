import Header from "./Header";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
