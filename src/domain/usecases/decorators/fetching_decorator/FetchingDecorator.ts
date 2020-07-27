import {
  UseCase,
  UseCaseInputData,
  UseCaseOutputData,
  UseCaseCallbacks,
} from 'src/domain/usecases/base/UseCase';
import { FetchingController } from 'src/domain/usecases/decorators/fetching_decorator/FetchingController';
import { Dispatch } from 'src/ReduxTypes';

export interface DispatchInputData extends UseCaseInputData {
  dispatch: Dispatch;
}

export type InferableDispatchInputData<I> = I & DispatchInputData;

export type InferableInputData<I> = Omit<I, keyof DispatchInputData>;

export class FetchingDecorator<
  I extends UseCaseInputData,
  O extends UseCaseOutputData,
  E
> implements UseCase<InferableDispatchInputData<I>, O, E> {
  private useCase: UseCase<InferableInputData<I>, O, E>;
  private fetchingController: FetchingController;

  constructor(
    useCase: UseCase<InferableInputData<I>, O, E>,
    fetchingController: FetchingController,
  ) {
    this.useCase = useCase;
    this.fetchingController = fetchingController;
  }

  execute(
    inputData: InferableDispatchInputData<I>,
    callbacks: UseCaseCallbacks<O, E>,
  ) {
    const { dispatch, ...rest } = inputData;

    this.fetchingController.startFetching(dispatch);
    this.useCase.execute(rest, {
      onSuccess: output => {
        callbacks.onSuccess(output);
        this.fetchingController.resolveFetching(dispatch);
      },
      onError: e => {
        const error = e instanceof Error ? e : undefined;
        // this.fetchingController.rejectFetching(dispatch, error);

        callbacks.onError(e);
      },
    });
  }
}
