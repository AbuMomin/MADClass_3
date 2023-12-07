import { Body, Controller, Post } from '@nestjs/common';
import { UserCredDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { UserAddCredDTO } from './dto/userAdd.dto';
import { User } from 'models/users.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  userLogin(@Body() userCreadential: UserCredDTO): any {
    return this.userService.userAuth(userCreadential);
  }

  @Post('add')
  async userAdd(@Body() userAddCredential: UserAddCredDTO): Promise<User> {
    return this.userService.addUser(userAddCredential);
  }
}
