import { LikeUpdateManyWithoutCommentsInput } from "./LikeUpdateManyWithoutCommentsInput";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  likes?: LikeUpdateManyWithoutCommentsInput;
  tweet?: TweetWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
