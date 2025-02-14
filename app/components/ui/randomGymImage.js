import fs from "fs";
import path from "path";

const getRandomIndices = (arr) => {
  const idx = Array.from({ length: arr.length }, (_, i) => i).sort(() => Math.random() - 0.5);
  return idx.length >= 7
    ? idx.slice(0, 7)
    : [
        ...idx,
        ...Array.from(
          { length: 7 - idx.length },
          () => idx[Math.floor(Math.random() * idx.length)]
        ),
      ];
};

export default async function RandomGymImage() {
  const imageDir = path.join(process.cwd(), "public/bjj_img");
  const files = fs.readdirSync(imageDir);

  if (files.length === 0) return null;

  const imageList = files
    .map((file) => `/bjj_img/${file}`)
    .filter((i) => i.includes("jpeg" ?? "png" ?? "webp" ?? "jpg" ?? "avif"));

  // generate a random list of 7 images from the imageList using the getRandomIndices function

  const randomList = getRandomIndices(imageList);

  return randomList.map((i) => imageList[i]);
}
