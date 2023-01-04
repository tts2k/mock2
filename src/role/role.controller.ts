import { Controller } from '@nestjs/common';
import { UseAuth } from 'src/auth/auth.decorators';

@Controller('role')
@UseAuth()
export class RoleController {
  
}
