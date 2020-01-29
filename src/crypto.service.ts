import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class CryptoService {

  async getHello(): Promise<any> {
    const result = await axios.get("http://10.146.1.17:3000");
    return result.data;
  }

  encryptPassword(password: string): string {
    const hash = bcrypt.hashSync(password, 10);
    return hash;
  }

  checkPassword(hash: string, password: string): boolean {
    const isValid = bcrypt.compareSync(password, hash);
    return isValid;
  }
}
