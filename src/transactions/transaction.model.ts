import { AggregateRoot } from "@nestjs/cqrs";

import { TransactionCreatedEvent } from "./events/impl/transaction-created.event";
import CreateTransactionDto from "./dtos/create-transaction.dto";


export class Transaction extends AggregateRoot {
  constructor(private readonly id: string | undefined) {
    super();
  }

  create(createTransactionDto: CreateTransactionDto) {
    // logic
    this.apply(new TransactionCreatedEvent(this.id));
  }
}
