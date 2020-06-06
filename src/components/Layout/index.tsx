import React ,{ReactNode}from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./styles.scss";

type Props = {
  header?:string | JSX.Element;
  content?: string | JSX.Element;
}

function Layout(props:Props):JSX.Element{
  //header
  //main
  return (
    <div className="layout">
      <header className="header">
        <h1>FilmSearch</h1>
        {/* <Logo/>
        <search/> */}
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