import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { mintToken } from '../dto/mintToken.dto';
import { TokenService } from '../services/token.service';

@Controller('api/tokens')
@UseGuards(AuthGuard())
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get()
  getAll(): object {
    return {};
  }

  @Get(':token_id')
  getItem(@Param('token_id') token_id: number, @Res() res: Response): object {
    return this.tokenService.getTokenData(token_id, res);
  }

  @Post('mint')
  mint(@Body() body: mintToken, @Res() res: Response): object {
    return this.tokenService.mintToken(body, res);
  }
}
