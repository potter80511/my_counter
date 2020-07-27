import { Nullable } from 'src/types/BaseTypes';
import {
  UseCase,
  UseCaseCallbacks,
  UseCaseInputData,
  UseCaseOutputData,
} from 'src/domain/usecases/base/UseCase';

export class UseCaseHandler {
  static _INSTANCE: Nullable<UseCaseHandler> = null;

  static get INSTANCE(): UseCaseHandler {
    if (!this._INSTANCE) {
      this._INSTANCE = new UseCaseHandler();
    }
    return this._INSTANCE;
  }

  execute<
    UI extends UseCaseInputData,
    UO extends UseCaseOutputData,
    I extends UI,
    UE
  >(
    useCase: UseCase<UI, UO, UE>,
    inputData: I,
    useCaseCallbacks: UseCaseCallbacks<UO, UE>,
  ): void {
    useCase.execute(inputData, useCaseCallbacks);
  }
}
