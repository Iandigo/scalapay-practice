import { SetMetadata } from '@nestjs/common';
// import { Role } from '../../user/enums';

export const ROLES_KEY = 'roles';

const Roles = (...roles) => SetMetadata(ROLES_KEY, roles);

export default Roles;
