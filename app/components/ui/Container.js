export default function Container({ children, ...props }) {
  const { width } = props;
  const max = { 
    s: "20rem", 
    m: "30rem", 
    l: "60rem", 
    xl: "80rem" };
  return (
    <div
      className={`max-w-[${
        max[width] ?? "30rem"
      }] relative w-full min-h-[100svh] mx-auto px-4 pt-[4rem] pb-[8rem] flex flex-col items-center`}
    >
      {children}
    </div>
  );
}
