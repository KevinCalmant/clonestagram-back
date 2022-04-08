import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { PostDocument, PostModel } from "./post.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export default class PostService {
  constructor(@InjectModel(PostModel.name) private readonly _postModel: Model<PostDocument>) {
  }

  findAll(): Promise<PostModel[]> {
    return this._postModel.find().exec();
  }
}
