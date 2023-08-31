import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {
    console.log(process.env.AUTH0_ISSUER_URL || '');
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH0_ISSUER_URL}.well-known/jwks.json`,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: process.env.AUTH0_AUDIENCE,
      issuer: process.env.AUTH0_ISSUER_URL,
      algorithms: ['RS256'],
    });
  }

  async validate(payload: {
    sub: string;
    permissions: string[];
  }): Promise<any> {
    await this.authService.checkAddCustomer(
      payload[`${process.env.AUTH0_AUDIENCE}/email`],
      payload[`${process.env.AUTH0_AUDIENCE}/family_name`],
      payload[`${process.env.AUTH0_AUDIENCE}/given_name`],
    );
    return {
      auth0Id: payload.sub,
      email: payload[`${process.env.AUTH0_AUDIENCE}/email`],
      permissions: payload.permissions,
      roles: payload[`${process.env.AUTH0_AUDIENCE}/roles`],
    };
  }
}
