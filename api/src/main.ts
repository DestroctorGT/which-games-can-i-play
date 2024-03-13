import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('API Which Games Can I Play')
    .setDescription('Platform where users can search for video games compatible with their system.')
    .setVersion('1.0.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api/docs', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true
    }
  })
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen(4000)
}
bootstrap()
