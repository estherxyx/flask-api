import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as cdk from '@aws-cdk/core';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DevStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'DevQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const table = new dynamodb.Table(this, id, {
      tableName: "Movies",
      billingMode: dynamodb.BillingMode.PROVISI ONED,
      readCapacity: 1,
      writeCapacity: 1,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      partitionKey: {name: 'year', type: dynamodb.AttributeType.NUMBER},
      sortKey: {name: 'title', type: dynamodb.AttributeType.STRING},
      pointInTimeRecovery: true,
    });
  }
}
