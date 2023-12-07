import { ApiProperty } from '@nestjs/swagger';

// What is DTO? & Why?
// DTO is used for http post() method

export class UserCredDTO {
  @ApiProperty({
    name: 'email',
    description: "User's Email",
    type: String,
    example: 'win@gmail.com',
  })
  readonly email: string;

  @ApiProperty({
    name: 'password',
    description: "User's Password",
    type: String,
    example: '1234',
  })
  readonly password: string;
}
