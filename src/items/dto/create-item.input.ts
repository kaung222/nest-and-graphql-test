import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
  // @Field(() => ID)
  // id: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  price: string;
}
