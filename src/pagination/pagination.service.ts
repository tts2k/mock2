import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaginationFindParams } from './pagination.interface';

@Injectable()
export class PaginationService {
  private readonly itemPerPage: number;

  constructor(configService: ConfigService) {
    this.itemPerPage = configService.get<number>('PAGINATION_ITEM_NUM');
  }

  getPaginationParams(page: number): PaginationFindParams {
    return {
      take: this.itemPerPage,
      skip: (page - 1) * this.itemPerPage
    }
  }
}
