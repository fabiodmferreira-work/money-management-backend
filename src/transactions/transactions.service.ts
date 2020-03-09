import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { CreateTransactionCommand } from "./commands/impl/create-transaction.command";
import CreateTransactionDto from "./dtos/create-transaction.dto";

@Injectable()
export class TransactionsService {
  constructor(private readonly commandBus: CommandBus) { }

  async createTransaction(createTransactionDto: CreateTransactionDto) {
    return this.commandBus.execute(
      new CreateTransactionCommand(createTransactionDto)
    );
  }
}
