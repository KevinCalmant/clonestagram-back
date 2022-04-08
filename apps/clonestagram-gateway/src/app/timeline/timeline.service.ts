import { Inject, Injectable, Logger } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Observable } from "rxjs";
import PostDto from "./model/post.dto";

@Injectable()
export default class TimelineService {
  private _logger = new Logger(TimelineService.name);

  constructor(@Inject('TIMELINE_SERVICE') private readonly _timelineClient: ClientProxy) {}

  findAllPosts(): Observable<PostDto> {
    this._logger.log('Sending event - GET_POSTS');
    return this._timelineClient.send<PostDto>('GET_POSTS', {});
  }
}
