import Header from "./Header";
import { Container } from "./Container";
import { Outlet } from "react-router-dom";
import { SearchForm } from "./SearchForm";
import { ButtonToTopAnchor } from "./ButtonToTopAnchor";

export const Layout = () => {
  return (
    <>
      <Header children={<SearchForm />} />

      <Container>
        <Outlet />
        <ButtonToTopAnchor />
      </Container>
    </>
  );
};
