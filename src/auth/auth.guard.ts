import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token = request.header('Authorization');
    if (!token) {
      return false;
    } else {
      return await this.validateToken(token);
    }
  }

  private async validateToken(token: string): Promise<boolean> {
    return await this.userService.getOneByToken(token.replace('Apikey ', '')).then(u => !!u, e => false);
  }
}
