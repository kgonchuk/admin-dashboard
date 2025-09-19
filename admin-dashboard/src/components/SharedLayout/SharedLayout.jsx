import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, ContainerLayout, MainContainer, Wrapper } from "../SharedLayout/SharedLayout.styled";
import Header from "../Header/Header";
import { SideBar } from "../SideBar/SideBar";



const SharedLayout = () => {

  return (
   <Container>
    <Header />

    <Wrapper>
<SideBar />

   <MainContainer>
    <Outlet />
   </MainContainer>
   
   </Wrapper>

   </Container>
  );
};

export default SharedLayout;