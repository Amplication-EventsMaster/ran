/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CommentService } from "../comment.service";
import { CommentCreateInput } from "./CommentCreateInput";
import { Comment } from "./Comment";
import { CommentFindManyArgs } from "./CommentFindManyArgs";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { CommentUpdateInput } from "./CommentUpdateInput";
import { LikeFindManyArgs } from "../../like/base/LikeFindManyArgs";
import { Like } from "../../like/base/Like";
import { LikeWhereUniqueInput } from "../../like/base/LikeWhereUniqueInput";

export class CommentControllerBase {
  constructor(protected readonly service: CommentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Comment })
  async createComment(
    @common.Body() data: CommentCreateInput
  ): Promise<Comment> {
    return await this.service.createComment({
      data: {
        ...data,

        tweet: data.tweet
          ? {
              connect: data.tweet,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        content: true,
        createdAt: true,
        id: true,

        tweet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Comment] })
  @ApiNestedQuery(CommentFindManyArgs)
  async comments(@common.Req() request: Request): Promise<Comment[]> {
    const args = plainToClass(CommentFindManyArgs, request.query);
    return this.service.comments({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,

        tweet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async comment(
    @common.Param() params: CommentWhereUniqueInput
  ): Promise<Comment | null> {
    const result = await this.service.comment({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,

        tweet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateComment(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body() data: CommentUpdateInput
  ): Promise<Comment | null> {
    try {
      return await this.service.updateComment({
        where: params,
        data: {
          ...data,

          tweet: data.tweet
            ? {
                connect: data.tweet,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          content: true,
          createdAt: true,
          id: true,

          tweet: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteComment(
    @common.Param() params: CommentWhereUniqueInput
  ): Promise<Comment | null> {
    try {
      return await this.service.deleteComment({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,

          tweet: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/likes")
  @ApiNestedQuery(LikeFindManyArgs)
  async findLikes(
    @common.Req() request: Request,
    @common.Param() params: CommentWhereUniqueInput
  ): Promise<Like[]> {
    const query = plainToClass(LikeFindManyArgs, request.query);
    const results = await this.service.findLikes(params.id, {
      ...query,
      select: {
        comment: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        tweet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/likes")
  async connectLikes(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        connect: body,
      },
    };
    await this.service.updateComment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/likes")
  async updateLikes(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        set: body,
      },
    };
    await this.service.updateComment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/likes")
  async disconnectLikes(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        disconnect: body,
      },
    };
    await this.service.updateComment({
      where: params,
      data,
      select: { id: true },
    });
  }
}
