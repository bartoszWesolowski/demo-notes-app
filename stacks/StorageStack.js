import { Bucket, Table } from "@serverless-stack/resources";
import { RemovalPolicy } from "aws-cdk-lib";

export function StorageStack({ stack, app }) {
  // Create the DynamoDB table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  const bucket = new Bucket(stack, "Uploads", {
    cdk: {
      bucket: {
        removalPolicy: RemovalPolicy.DESTROY,
      },
    },
    cors: [
      {
        maxAge: "1 day",
        allowedOrigins: ["*"],
        allowedHeaders: ["*"],
        allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
      },
    ],
  });

  return {
    table,
    bucket,
  };
}
