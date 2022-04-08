import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { PostModel, PostSchema } from "./post/post.schema";
import PostService from "./post/post.service";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/timeline'),
    MongooseModule.forFeature([{ name: PostModel.name, schema: PostSchema }])
  ],
  controllers: [AppController],
  providers: [PostService],
})
export class AppModule {}
