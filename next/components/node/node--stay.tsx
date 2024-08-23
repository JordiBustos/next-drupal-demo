import { StayType } from "@/types/graphql";

interface StayProps {
  stay: StayType;
}

export function NodeStay({ stay }: StayProps) {
  console.log("node:", stay);
  return <article>.</article>;
}
