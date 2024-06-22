import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('SecretKey'),
        signOptions: { expiresIn: '100s' },
      }),
    }),
  ],
  providers: [AuthService],
  exports:[AuthService]
})
export class AuthModule {}

