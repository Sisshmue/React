import { Header } from "../components/Header";
import './NotFoundPage.css'

export function NotFoundPage() {
  return (
    <>
      <title>Page Not Found</title>
      <Header></Header>
      <div className="not-found-page">
        <p>Page Not Found!</p>
      </div>
    </>
  );
}
