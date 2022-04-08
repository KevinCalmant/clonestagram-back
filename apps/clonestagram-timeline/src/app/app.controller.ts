import { Controller, Logger } from '@nestjs/common';

import PostService from "./post/post.service";
import { EventPattern } from "@nestjs/microservices";
import { PostModel } from "./post/post.schema";

@Controller()
export class AppController {
  private _logger = new Logger(AppController.name);

  constructor(private readonly _postService: PostService) {}

  @EventPattern('GET_POSTS')
  getPosts(): Promise<PostModel[]> {
    this._logger.log('Handling Event - GET_POSTS');
    return this._postService.findAll();
  }
}
