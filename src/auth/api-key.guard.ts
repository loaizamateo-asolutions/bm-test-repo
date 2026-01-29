import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private readonly logger = new Logger(ApiKeyGuard.name);

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];

    if (!apiKey) {
      this.logger.warn('Request without API key');
      throw new UnauthorizedException('API key is required');
    }

    // Validate API key against database/cache
    const isValid = this.validateApiKey(apiKey);
    if (!isValid) {
      this.logger.warn('Invalid API key attempt');
      throw new UnauthorizedException('Invalid API key');
    }

    return true;
  }

  private validateApiKey(apiKey: string): boolean {
    // In production, this validates against the database
    return apiKey.length > 0;
  }
}
