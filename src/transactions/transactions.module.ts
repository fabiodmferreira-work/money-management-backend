import { Module } from '@nestjs/common';
import { CqrsModule } from "@nestjs/cqrs";

import { TransactionCreatedEvent } from './events/impl/transaction-created.event';
import { TransactionsService } from './transactions.service';
import { TransactionRepository } from './transaction.repository';
import { TransactionsSagas } from './sagas/transactions.saga';
import { TransactionsController } from './transactions.controller';
import { CreateTransactionHandler } from './commands/handlers/create-transaction.handler';

export const CommandHandlers = [CreateTransactionHandler];
export const EventHandlers = [TransactionCreatedEvent];

@Module({
  imports: [CqrsModule],
  controllers: [TransactionsController],
  providers: [
    TransactionsService,
    TransactionsSagas,
    ...CommandHandlers,
    ...EventHandlers,
    TransactionRepository
  ]
})
export class TransactionsModule { }
