import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

// DTO is used for http post() method

export class UserAddCredDTO {
  @ApiProperty({
    name: 'username',
    description: "Enter's Username",
    type: String,
    example: 'enanisraq',
  })
  @IsString() // class-validator
  readonly username: string;

  @ApiProperty({
    name: 'email',
    description: "User's Email",
    type: String,
    example: 'enan@gmail.com',
  })
  @IsEmail() // class-validator
  readonly email: string;

  @ApiProperty({
    name: 'phone',
    description: "User's Phone Number",
    type: String,
    example: '01823247082',
  })
  @IsOptional() // class-validator
  readonly phone: string;
}
