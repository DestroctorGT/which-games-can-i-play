import { Module } from '@nestjs/common'
import { AuthService } from './auth/auth.service'
import { AuthController } from './auth/auth.controller'
import { VideoGamesService } from './video-games/video-games.service'
import { VideoGamesController } from './video-games/video-games.controller'

@Module({
  imports: [],
  controllers: [AuthController, VideoGamesController],
  providers: [AuthService, VideoGamesService]
})
export class AppModule {}
