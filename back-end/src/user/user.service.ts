import { Injectable } from '@nestjs/common';
import { UserCredDTO } from './dto/user.dto';

// Contains all the business Logic of the application
// Controller gets data from Service
// Service initiates Data to Database

@Injectable()
export class UserService {
  // users object array
  private users = [
    { name: 'Abu Saleh', email: 'win@gmail.com', role: 'Student', age: 26 },
    { name: 'Enan Israq', email: 'enan@gmail.com', role: 'Student', age: 21 },
    {
      name: 'Shammi Afrin',
      email: 'shammi@gmail.com',
      role: 'Teacher',
      age: 28,
    },
  ];

  getUser(emailProvided: string) {
    return this.users.find((user) => user.email === emailProvided);
  }

  userAuth(userCreadential: UserCredDTO): boolean {
    if (
      userCreadential.email === 'win@gmail.com' &&
      userCreadential.password === '1234'
    ) {
      return true;
    } else {
      return false;
    }
  }
}
