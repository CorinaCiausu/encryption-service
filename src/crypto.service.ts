import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CryptoService {

  async getHello(): Promise<any> {
    const result = await axios.get("http://10.146.1.17:3000");
    return result.data;
  }

  public actualage(age: string): string {
    let x = +age;
    x = x * 5;
    return x.toString();
  }
}
