import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";

import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export class CdkTypescriptSampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    const stackProps: StackProps = {
      description: "This is the first stack.",
    };

    super(scope, id, stackProps);

    const table = new dynamodb.Table(this, "MyTable", {
      partitionKey: {
        name: "Id",
        type: dynamodb.AttributeType.STRING,
      },
      tableName: "MyTable",
      removalPolicy: RemovalPolicy.DESTROY,
    });

    table.addGlobalSecondaryIndex({
      indexName: "userIdIndex",
      partitionKey: { name: "userId", type: dynamodb.AttributeType.STRING },
      sortKey: { name: "status", type: dynamodb.AttributeType.STRING },
      readCapacity: 1,
      writeCapacity: 1,
      projectionType: dynamodb.ProjectionType.ALL,
    });
  }
}
