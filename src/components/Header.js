import React from "react";
import {Link} from 'react-router-dom';
import {Head} from './styles';

export default function Header() {
  return (
    <Head className="ui centered">
      <h1 className="ui center"><Link to= '/'>Rick &amp; Morty Fan Page</Link></h1>
    </Head>
  );
}
