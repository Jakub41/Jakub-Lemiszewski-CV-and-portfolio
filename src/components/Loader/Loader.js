import React from "react";
import { LoaderMain, Load, Hands, Body, Head, Eye } from "./styles";

const Loader = () => {
  return (
    <>
      <LoaderMain>
        <Load>Loading . . .</Load>
        <Hands />
        <Body />
        <Head>
          <Eye />
        </Head>
      </LoaderMain>
    </>
  );
};

export default Loader;
