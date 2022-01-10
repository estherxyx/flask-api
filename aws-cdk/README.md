## install procedure
```sh
brew install node
npm i -g aws-cdk
cdk
# https://aws.amazon.com/cli/
aws
```
## create new user on aws 
### new user credentials
User name,Password,Access key ID,Secret access key,Console login link
dev-xyx-01,,XXXXXX,YYYYY,https://440599750945.signin.aws.amazon.com/console
```sh
aws configure 
```
```shell
cd aws-cdk
mkdir dev
cd dev
cdk init app --language typescript
cdk diff
cdk bootstrap
cdk deploy
```
## create table in dynamodb
[dynamodb construct-props](https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-dynamodb.Table.html#construct-props)
```typescript
// create ddb
const table = new dynamodb.Table(this, id, {
    //...
}
```

