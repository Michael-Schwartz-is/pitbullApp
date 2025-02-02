import fs from "fs";
import path from "path";

export default async function RandomGymImage() {
  const imageDir = path.join(process.cwd(), "public/bjj_img");
  const files = fs.readdirSync(imageDir);

  if (files.length === 0) return null;

  //   const randomImage = files[Math.floor(Math.random() * files.length)];
  //   return `/bjj_img/${randomImage}`;

  const imageList = files.map((file) => `/bjj_img/${file}`);

  return imageList;
}
