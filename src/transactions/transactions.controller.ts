import { Transaction } from './transaction.model';
import { TransactionsService } from './transactions.service';
import { Controller, Get, Post, Param, Body, Delete, Put, Logger } from '@nestjs/common';
import { ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import CreateTransactionDto from './dtos/create-transaction.dto';

@Controller('transactions')
@ApiUseTags('Transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) { }

  /* Create User */
  /*--------------------------------------------*/
  @ApiOperation({ title: 'Create Transaction' })
  @ApiResponse({ status: 200, description: 'Create Transaction.' })
  @Post()
  async createUser(@Body() createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionsService.createTransaction(createTransactionDto);
  }

}
