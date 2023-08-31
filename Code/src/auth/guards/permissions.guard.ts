import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context)
    const { req } = ctx.getContext()
    const requiredPermissions = this.reflector.getAllAndOverride<any[]>(
      PERMISSIONS_KEY,
      [ctx.getHandler(), ctx.getClass()],
    )
    if (!requiredPermissions) return true
    return requiredPermissions.every((permission) =>
      req.user.permissions?.includes(permission),
    )
  }
}

export default PermissionsGuard
