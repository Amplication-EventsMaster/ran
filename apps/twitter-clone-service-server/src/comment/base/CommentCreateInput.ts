/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { LikeCreateNestedManyWithoutCommentsInput } from "./LikeCreateNestedManyWithoutCommentsInput";
import { Type } from "class-transformer";
import { TweetWhereUniqueInput } from "../../tweet/base/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class CommentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => LikeCreateNestedManyWithoutCommentsInput,
  })
  @ValidateNested()
  @Type(() => LikeCreateNestedManyWithoutCommentsInput)
  @IsOptional()
  @Field(() => LikeCreateNestedManyWithoutCommentsInput, {
    nullable: true,
  })
  likes?: LikeCreateNestedManyWithoutCommentsInput;

  @ApiProperty({
    required: false,
    type: () => TweetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TweetWhereUniqueInput)
  @IsOptional()
  @Field(() => TweetWhereUniqueInput, {
    nullable: true,
  })
  tweet?: TweetWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { CommentCreateInput as CommentCreateInput };
