import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PostDocument = PostModel & Document;

@Schema()
export class PostModel {
  @Prop()
  username: string;

  @Prop()
  caption: string;

  @Prop()
  imageUrl: string;
}

export const PostSchema = SchemaFactory.createForClass(PostModel);
