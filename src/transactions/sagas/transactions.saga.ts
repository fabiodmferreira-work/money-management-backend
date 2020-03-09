import { Saga, ofType } from '@nestjs/cqrs';
import { TransactionCreatedEvent } from '../events/impl/transaction-created.event';
import { Injectable, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class TransactionsSagas {
  @Saga()
  transactionCreated = (events$: Observable<any>): Observable<void> => {
    return events$.pipe(
      ofType(TransactionCreatedEvent),
      map((event) => {
        Logger.log('Transaction created');
      }),
    );
  }
}
