
'use client'

import Register from "./register/page";

export default function Home() {

  const createUser=(e: { preventDefault: () => void; })=>{
    e.preventDefault();
  }
  return (
    <Register/>
  );
}
