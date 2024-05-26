import { Like } from "../like/Like";
import { Tweet } from "../tweet/Tweet";
import { User } from "../user/User";

export type Comment = {
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  tweet?: Tweet | null;
  updatedAt: Date;
  user?: User | null;
};
