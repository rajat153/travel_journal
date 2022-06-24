import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Data from "./data";

export default function App() {
  let travel = Data.map((item) => {
    //console.log(item)
    return (
      <Main
        key={item.id} //anytime when using map we need key
        item={item}
      />
    );
  });
  return (
    <>
      <Header />
      {travel}
    </>
  );
}
