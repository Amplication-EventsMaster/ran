import { Comment } from "../comment/Comment";
import { Tweet } from "../tweet/Tweet";
import { User } from "../user/User";

export type Like = {
  comment?: Comment | null;
  createdAt: Date;
  id: string;
  tweet?: Tweet | null;
  updatedAt: Date;
  user?: User | null;
};
