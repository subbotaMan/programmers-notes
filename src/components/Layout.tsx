import Header from "./Header";
import { Container } from "./Container";
import { Outlet } from "react-router-dom";
import { SearchForm } from "./SearchForm";
import { ButtonToTopAnchor } from "./ButtonToTopAnchor";
import { Footer } from "./Footer";
import { ButtonToLinkMotivationPage } from "./ButtonToLinkMotivationPage";

export const Layout = () => {
  return (
    <>
      <Header children={<SearchForm />} />

      <Container>
        <Outlet />
        <ButtonToTopAnchor />
        <ButtonToLinkMotivationPage />
        <Footer />
      </Container>
    </>
  );
};
