import BackButton from "./BackButton";

function TitleBar({ title, subText }) {
  return (
    <div className="pb-8">
      <BackButton text="אחורה" />
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{subText} </p>
    </div>
  );
}
export default TitleBar;
