import { Injectable, Inject } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CryptoService {

  @Inject()
  private jwtService: JwtService;

  getHello(): any {
    return 'test';
  }

  encryptPassword(password: string): string {
    const hash = bcrypt.hashSync(password, 10);
    return hash;
  }

  checkPassword(hash: string, password: string): boolean {
    const isValid = bcrypt.compareSync(password, hash);
    return isValid;
  }

  createToken(payload: {userId : string}): string {
    const token = this.jwtService.sign(payload);
    return token;
  };

  decodeToken(payload: {token: string}):any {
    const decodedToken = this.jwtService.decode(payload.token);
    return decodedToken;
  }
}
