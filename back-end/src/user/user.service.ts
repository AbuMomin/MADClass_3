import { UserCredDTO } from './dto/user.dto';
import { UserAddCredDTO } from './dto/userAdd.dto';
import { User } from 'models/users.model';
// What are these ????
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Contains all the business Logic of the application
// Controller gets data from Service
// Service initiates Data to Database

@Injectable()
export class UserService {
  // InjectRepository refers/matches the model with the Database Table
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

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

  async addUser(userAddCredential: UserAddCredDTO): Promise<User> {
    const newUser = this.userRepository.create(userAddCredential);
    return this.userRepository.save(newUser);
  }
}
