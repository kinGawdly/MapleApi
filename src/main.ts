import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { BossesModule } from './bosses/bosses.module';
import { MapleEventsModule } from './maple_events/maple_events.module';
import { QuestsModule } from './quests/quests.module';
import { UsersModule } from './users/users.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const modules = [
    {
      title: 'Users',
      description: 'Api de users',
      version: '1.0',
      tag: 'users',
      route: 'api/users',
      module: UsersModule,
    },
    {
      title: 'Quests',
      description: 'Api de quests',
      version: '1.0',
      tag: 'users',
      route: 'api/quests',
      module: QuestsModule,
    },
    {
      title: 'Bosses',
      description: 'Api de bosses',
      version: '1.0',
      tag: 'users',
      route: 'api/bosses',
      module: BossesModule,
    },
    {
      title: 'MapleEvents',
      description: 'Api de maple_events',
      version: '1.0',
      tag: 'users',
      route: 'api/maple_events',
      module: MapleEventsModule,
    },
  ];
  for (const { title, description, version, tag, route, module } of modules) {
    const config = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version)
      .addTag(tag)
      .build();

    const document = SwaggerModule.createDocument(app, config, {
      include: [module],
    });
    SwaggerModule.setup(route, app, document);
  }

  await app.listen(3000);
}
bootstrap();
