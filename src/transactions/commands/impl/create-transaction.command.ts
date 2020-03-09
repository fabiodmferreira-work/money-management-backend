import CreateTransactionDto from "../../dtos/create-transaction.dto";
import { ICommand } from "@nestjs/cqrs";

export class CreateTransactionCommand implements ICommand {
  constructor(
    public readonly createTransactionDto: CreateTransactionDto,
  ) {}
}
