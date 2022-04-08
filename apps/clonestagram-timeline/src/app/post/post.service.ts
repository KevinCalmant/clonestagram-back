import { Model } from 'mongoose';
import { Injectable, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import { PostDocument, PostModel, PostSchema } from "./post.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export default class PostService {
  private _logger = new Logger(PostService.name);

  constructor(@InjectModel(PostModel.name) private readonly _postModel: Model<PostDocument>) {
  }

  findAll(): Promise<PostModel[]> {
    return this._postModel.find().exec();
  }
}
