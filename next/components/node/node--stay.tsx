import Image from "next/image";

import { StayType } from "@/types/graphql";

interface StayProps {
  stay: StayType;
}

export function NodeStay({ stay }: StayProps) {
  console.log("node:", stay);
  const activities = stay.activities.split("•");
  const activitiesText = activities[0];
  const activitiesList = activities.slice(1);

  return (
    <div>
      <h1 className="text-heading-md md:text-heading-sm font-bold text-gray-900 leading-tight tracking-tight mb-4">
        {stay.title}
      </h1>
      <div className="min-h-96 grid grid-cols-4 grid-rows-2 gap-2 my-4">
        {stay.images &&
          stay.images.map((image, index) => (
            <Image
              key={image.mediaImage.url}
              src={image.mediaImage.url}
              width={image.mediaImage.width}
              height={image.mediaImage.height}
              alt={image.mediaImage.alt}
              className={`object-cover w-full h-full rounded-lg ${
                index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
            />
          ))}
      </div>
      <div className="my-4">
        <h2 className="text-heading-sm md:text-heading-xs font-bold text-gray-900 leading-tight tracking-tight mb-2">
          {stay.location.country.name}, {stay.location.locality}
        </h2>
        <div>
          <p>
            Hosted by {stay.location.givenName} {stay.location.familyName}
          </p>
        </div>
      </div>
      <section>
        <p>{stay.bodyText}</p>
        <div className="my-4">
          <h3 className="text-heading-sm md:text-heading-xs font-bold text-gray-900 leading-tight tracking-tight mb-2">
            What you will do
          </h3>
          <p>
              {activitiesText}
          </p>
            {activitiesList.length > 0 && (
            <ul className="my-1">
              {activitiesList.map((activity) => (
                <li className="list-disc my-1 mx-4" key={activity}>{activity}</li>
              ))}
            </ul>
            )}
        </div>
        <div className="my-4">
          <h3 className="text-heading-sm md:text-heading-xs font-bold text-gray-900 leading-tight tracking-tight mb-2">
            Others things to note
          </h3>
          <p>{stay.extraInformation}</p>
        </div>
      </section>
      <section>
        <h2 className="text-heading-sm md:text-heading-xs font-bold text-gray-900 leading-tight tracking-tight mb-2">
          Neighborhood highlights
        </h2>
        <p>{stay.neighborhoodHighlights}</p>
      </section>
    </div>
  );
}
