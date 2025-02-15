import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  comment?: CommentWhereUniqueInput;
  id?: StringFilter;
  tweet?: TweetWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
