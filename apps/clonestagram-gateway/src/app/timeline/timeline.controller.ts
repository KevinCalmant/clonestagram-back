import { Controller, Get } from "@nestjs/common";
import PostDto from "./model/post.dto";
import { Observable } from "rxjs";
import TimelineService from "./timeline.service";

@Controller('timeline')
export default class TimelineController {
  constructor(private readonly _timelineService: TimelineService) {}

  @Get('posts')
  findAll(): Observable<PostDto> {
    return this._timelineService.findAllPosts();
  }
}
