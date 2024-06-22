import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength ,IsOptional, IsEnum, IsNumber} from 'class-validator';
import { BeforeInsert } from 'typeorm';
// import { PartialType } from '@nestjs/mapped-types';
export enum userRole{
  Admin ="admin",
  CheifEditor="cheifeditor",
  Editor="editor",
  User="user"

}


export class CreateUserDtos{
  @IsNumber()
  id:number
    @IsNotEmpty()
    @IsString()
    readonly name: string;
  
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
  
    @IsNotEmpty()
    @IsString()
    readonly username: string;
  
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @Exclude()
   password: string;

   @IsOptional()
   @IsEnum(userRole)
   readonly role?: userRole;  }



  export class UpdateUserDto {
    @IsOptional()
    @IsString()
    readonly name?: string;
  
    @IsOptional()
    @IsEmail()
    readonly email?: string;
  
    @IsOptional()
    @IsString()
    readonly username?: string;
  
    @IsOptional()
    @IsString()
    @MinLength(6)
    readonly password?: string;
  }
