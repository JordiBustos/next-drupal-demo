import { StayType } from "@/types/graphql";
import Image from "next/image";

interface StayProps {
  stay: StayType;
}

export function NodeStay({ stay }: StayProps) {
  console.log("node:", stay);
  return <div>
      <h1>{stay.title}</h1>
      <div>
        {stay.images && stay.images.map((image) =>
           <Image
            key={image.mediaImage.url} 
            src={image.mediaImage.url}
            width={image.mediaImage.width}
            height={image.mediaImage.height}
            alt={image.mediaImage.alt}
            className="max-w-full object-cover"
            />
        )}
      </div>
      <section>
        <p>{stay.body.value}</p>
        <div>
            <h3>What you'll do</h3>
            <p>{stay.activities}</p>
        </div>
        <div>
          <h3>Others things to note</h3>
          <p>{stay.extraInformation}</p>
        </div>
      </section>
  </div>;
}
