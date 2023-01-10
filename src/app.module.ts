import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { GooglemapModule } from './googlemap/googlemap.module';

@Module({
  imports: [ProductsModule, GooglemapModule],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
