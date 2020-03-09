import { CommandHandler, ICommandHandler, EventPublisher } from "@nestjs/cqrs";
import { CreateTransactionCommand } from "../impl/create-transaction.command";
import { TransactionRepository } from "../../transaction.repository";
import { Logger } from "@nestjs/common";

@CommandHandler(CreateTransactionCommand)
export class CreateTransactionHandler implements ICommandHandler<CreateTransactionCommand> {
  constructor(
    private readonly repository: TransactionRepository,
    private readonly publisher: EventPublisher,
  ) { }

  async execute(command: CreateTransactionCommand) {
    const { createTransactionDto } = command;

    const transaction = this.publisher.mergeObjectContext(
      await this.repository.create(createTransactionDto)
    )

    transaction.create(createTransactionDto);
    transaction.commit();
    return transaction;
  }
}
