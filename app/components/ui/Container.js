export default function Container({ children }) {
  return (
    <div className="max-w-[30rem] relative w-full min-h-[100svh] mx-auto px-4 pt-[4rem] pb-[8rem]">
      {children}
    </div>
  );
}
