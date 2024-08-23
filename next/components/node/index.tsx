import { NodeArticle } from "@/components/node/node--article";
import { NodeFrontpage } from "@/components/node/node--frontpage";
import { NodePage } from "@/components/node/node--page";
import { NodeStay } from "@/components/node/node--stay";
import { TypedRouteEntity } from "@/types/graphql";

export function Node({ node }: { node: TypedRouteEntity }) {
  if (!node) return null;

  switch (node.__typename) {
    case "NodeFrontpage": {
      return <NodeFrontpage page={node} />;
    }
    case "NodePage": {
      return <NodePage page={node} />;
    }
    case "NodeArticle": {
      return <NodeArticle article={node} />;
    }
    case "NodeStay": {
      return <NodeStay stay={node} />;
    }
    default: {
      console.log(`components/node.tsx: Node type not yet implemented`);
      return null;
    }
  }
}
