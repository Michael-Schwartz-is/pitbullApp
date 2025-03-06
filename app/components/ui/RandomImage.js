import fs from "fs";
import path from "path";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserPlus2Icon } from "lucide-react";

// Get a random image from the `/public/images` folder
export async function getRandomImage() {
  const imageDir = path.join(process.cwd(), "public/random");
  const files = fs.readdirSync(imageDir);

  if (files.length === 0) return null; // No images found

  const randomImage = files[Math.floor(Math.random() * files.length)];
  return `/random/${randomImage}`; // Return image path
}

export default async function RandomImage({ update, width, height }) {
  const imageUrl = await getRandomImage(); // Get random image before rendering

  if (!imageUrl) {
    return <p>No images available</p>;
  }

  return (
    <div className="flex flex-col relative w-[7rem] mx-auto justify-center items-center space-y-4">
      <Image
        src={imageUrl}
        width={width || 80}
        height={height || 64}
        alt="image"
        className="rounded-full overflow-clip aspect-square"
      />

      {update && (
        <Button
          size="icon"
          className="absolute bottom-0  bg-orange-200 rounded-full aspect-square left-0"
          variant="ghost"
          // onClick={() => handleEditImage()}
        >
          <UserPlus2Icon />
        </Button>
      )}
    </div>
  );
}
