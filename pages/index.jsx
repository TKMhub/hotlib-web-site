import Link from "next/link";
import Styles from "/public/page_styles/Top.module.scss";

export default function Home() {
  const myStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px',
  };
  return (
    <>
      <p className={Styles.main}>Toppage</p>
      <p>Toppage</p>
      <p>Toppage</p>
      <p>Toppage</p>
      <p>Toppage</p>
      <p>Toppage</p>
      <p>Toppage</p>
      <p>Toppage</p>
      <p>Toppage</p>
      <p>Toppage</p>
      <Link href={"./Contact"}>Contactpage</Link>
    </>
  );
}
