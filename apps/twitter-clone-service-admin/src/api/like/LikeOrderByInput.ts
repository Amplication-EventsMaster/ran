import { SortOrder } from "../../util/SortOrder";

export type LikeOrderByInput = {
  commentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  tweetId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
