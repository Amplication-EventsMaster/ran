/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Like as PrismaLike,
  Comment as PrismaComment,
  Tweet as PrismaTweet,
  User as PrismaUser,
} from "@prisma/client";

export class LikeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LikeCountArgs, "select">): Promise<number> {
    return this.prisma.like.count(args);
  }

  async likes<T extends Prisma.LikeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LikeFindManyArgs>
  ): Promise<PrismaLike[]> {
    return this.prisma.like.findMany<Prisma.LikeFindManyArgs>(args);
  }
  async like<T extends Prisma.LikeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LikeFindUniqueArgs>
  ): Promise<PrismaLike | null> {
    return this.prisma.like.findUnique(args);
  }
  async createLike<T extends Prisma.LikeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LikeCreateArgs>
  ): Promise<PrismaLike> {
    return this.prisma.like.create<T>(args);
  }
  async updateLike<T extends Prisma.LikeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LikeUpdateArgs>
  ): Promise<PrismaLike> {
    return this.prisma.like.update<T>(args);
  }
  async deleteLike<T extends Prisma.LikeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LikeDeleteArgs>
  ): Promise<PrismaLike> {
    return this.prisma.like.delete(args);
  }

  async getComment(parentId: string): Promise<PrismaComment | null> {
    return this.prisma.like
      .findUnique({
        where: { id: parentId },
      })
      .comment();
  }

  async getTweet(parentId: string): Promise<PrismaTweet | null> {
    return this.prisma.like
      .findUnique({
        where: { id: parentId },
      })
      .tweet();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.like
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
