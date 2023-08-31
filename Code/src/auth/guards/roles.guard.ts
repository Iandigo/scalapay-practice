import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { ROLES_KEY } from '../decorators/roles.decorator'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context)
    const { req } = ctx.getContext()
    const requiredRoles = this.reflector.getAllAndOverride<any[]>(ROLES_KEY, [
      ctx.getHandler(),
      ctx.getClass(),
    ])
    if (!requiredRoles) return true
    return requiredRoles.some((role) => req.user.roles?.includes(role))
  }
}

export default RolesGuard
