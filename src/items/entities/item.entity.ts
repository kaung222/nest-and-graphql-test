import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field(() => ID, { nullable: false, defaultValue: '1' })
  id: string;
  @Field()
  name: string;
  @Field()
  price: string;
}
