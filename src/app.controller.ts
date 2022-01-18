import { Controller, Get } from '@nestjs/common';
import { AppService, HelloResult } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): HelloResult {
    return this.appService.getHello();
  }
}
