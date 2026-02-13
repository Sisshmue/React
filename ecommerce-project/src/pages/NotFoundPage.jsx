import { Header } from "../components/Header";
import './NotFoundPage.css'

export function NotFoundPage({cart}) {
  return (
    <>
      <title>Page Not Found</title>
      <Header cart={cart}></Header>
      <div className="not-found-page">
        <p>Page Not Found!</p>
      </div>
    </>
  );
}
