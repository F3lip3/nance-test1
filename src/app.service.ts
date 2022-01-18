import { Injectable } from '@nestjs/common';

export type HelloResult = { message: string };

@Injectable()
export class AppService {
  getHello(): HelloResult {
    return { message: 'hello world' };
  }
}
