import React, { ReactNode } from "react";
import Container from 'react-bootstrap/Container';
import "./styles.scss";

type Props = {
  header?: string | JSX.Element;
  content?: string | JSX.Element;
}

function Layout(props: Props): JSX.Element {
  return (
    <div className="layout">
      <header className="header">
        <Container fluid>
          {props.header}
        </Container>
      </header>
      <main className="layout__main-content">
        <Container fluid>
          {props.content}
        </Container>
      </main>
    </div>
  )
}
export default Layout;