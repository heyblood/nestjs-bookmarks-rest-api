import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(): string {
    return 'login';
  }
  signup(): string {
    return 'singup';
  }
}
