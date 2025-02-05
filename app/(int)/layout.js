import Header from "../components/ui/NavBar";

export const metadata = {
  title: "Pitbull Scheduling",
  description: "this is cool",
};

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
