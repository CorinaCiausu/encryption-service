import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    const result= await axios.get("http://10.146.1.17:3000");
    return result.data;
  }
}
