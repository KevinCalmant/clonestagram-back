import { Module } from '@nestjs/common';
import TimelineService from "./timeline/timeline.service";
import TimelineController from "./timeline/timeline.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      { name: 'TIMELINE_SERVICE', transport: Transport.TCP }
    ])
  ],
  controllers: [TimelineController],
  providers: [TimelineService],
})
export class AppModule {}
