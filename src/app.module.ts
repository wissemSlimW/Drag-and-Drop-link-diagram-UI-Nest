import { Module } from '@nestjs/common';
import { ArrowsModule } from './arrows/arrows.module';
import { PagesModule } from './pages/pages.module';
import { ConfigurationsModule } from './configurations/configurations.module';


@Module({
  imports: [ConfigurationsModule,ArrowsModule,PagesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
