import * as React from "react";
import "./app.scss";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <h1 className="lolo">
    Hi {props.userName} from Rt! Welcme to {props.lang}!
  </h1>
);