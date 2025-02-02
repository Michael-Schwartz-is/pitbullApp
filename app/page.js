// import Image from "next/image";
// import trainImage from "./assets/train.jpg";
// import Link from "next/link";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function homepage() {
//   return (
//     <>
//       <main>
//         <div className="  pt-8 max-w-[30rem] mx-auto">
//           <h1 className="text-2xl font-bold">Trainings</h1>
//         </div>

//         <div id="wrapper_day_card" className="p-8">
//           <div className="max-w-[30rem] w-full mx-auto grid grid-cols-2 gap-3">
//             {daysOfWeek.map((day) => {
//               return (
//                 <Link
//                   id="day_card"
//                   className="rounded-md basis-1/2 overflow-clip border bg-white border-cyan-50 md:hover:bg-orange-200 transition-colors"
//                   href={`/schedule/${day}`}
//                 >
//                   <Image src={trainImage} className="" width={300} height={100} alt="thing" />
//                   <div className="p-2">
//                     <p className="font-bold text-xs uppercase">{day}</p>
//                     <p>date of next training</p>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
// export default homepage;

export default async function page() {
  const session = await auth();

  const target = session ? "/int/schedule" : "/login";
  redirect(target);

  return <div>page</div>;
}
