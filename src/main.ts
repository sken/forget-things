import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {FastifyAdapter, NestFastifyApplication} from "@nestjs/platform-fastify";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

    const config = new DocumentBuilder()
        .setTitle('Forget Things')
        .setDescription('The forget things API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);


    await app.listen(3000);
}

bootstrap();
