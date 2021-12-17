#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkTypescriptSampleStack } from '../lib/cdk-typescript-sample-stack';

const app = new cdk.App();
new CdkTypescriptSampleStack(app, 'CdkTypescriptSampleStack');
