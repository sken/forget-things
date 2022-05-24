import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {FastifyAdapter, NestFastifyApplication} from "@nestjs/platform-fastify";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
    app.enableCors({origin: 'http://localhost:3001'});

    const config = new DocumentBuilder()
        .setTitle('Forget Things')
        .setDescription('The forget things API description')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);


    await app.listen(3000);
}

bootstrap();
