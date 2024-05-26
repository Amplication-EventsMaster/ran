import { LikeCreateNestedManyWithoutCommentsInput } from "./LikeCreateNestedManyWithoutCommentsInput";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutCommentsInput;
  tweet?: TweetWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
