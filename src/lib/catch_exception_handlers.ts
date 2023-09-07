import {
  HttpException
} from '@nestjs/common';

export const CatchExceptionHandler = (error: any) => {
  if (error instanceof HttpException)
    throw new HttpException(error.message, error.getStatus());

  throw new HttpException(error.message, error.status);
};