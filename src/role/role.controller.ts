import { Controller } from '@nestjs/common';
import { UsePerms } from 'src/auth/use-perms.decorator';

@Controller('role')
@UsePerms()
export class RoleController {
  
}
