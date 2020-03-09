import uuidv1 from "uuid/v1"
import { Injectable } from "@nestjs/common";

import CreateTransactionDto from "./dtos/create-transaction.dto";
import { Transaction } from "./transaction.model";

@Injectable()
export class TransactionRepository {
  create(createTransactionDto: CreateTransactionDto) {
    return new Transaction(uuidv1());
  }
}
