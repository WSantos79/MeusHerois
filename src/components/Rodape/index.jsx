import React from "react";
import { Rodape, P, Link, Social, Span } from "./styles";
import GitHub from "../../assets/images/github.svg"
import Linkedin from "../../assets/images/linkedinDark.svg"
import Email from "../../assets/images/gmailDark.svg"

export default () => {
  return (
    <>
      <Rodape>
        <p>©2022 | Desenvolvido com <Span>&#10084;</Span> por Wellington Santos</p>

        <Link href="https://www.linkedin.com/in/wellingtonsantos79/" rel="author" target="_blank"><Social src={Linkedin}/></Link>        
        
        <Link href="https://github.com/WSantos79" rel="author" target="_blank"><Social src={GitHub}/></Link>

        <Link href="mailto:wellingtonsantos7799@gmail.com" rel="author" target="_blank"><Social src={Email}/></Link>

      </Rodape>
    </>
  );
};


