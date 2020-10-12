export interface UseCaseInputData {}

export interface UseCaseOutputData {}

export interface UseCaseCallbacks<R, E = Error> {
  onSuccess: (result: R) => void;
  onError: (e: E) => void;
}

export abstract class UseCase<
  I extends UseCaseInputData,
  O extends UseCaseOutputData,
  E = Error
> {
  abstract execute(inputData: I, callbacks: UseCaseCallbacks<O, E>): void;
}

export interface UseCase2<
  I extends UseCaseInputData,
  O extends UseCaseOutputData,
  E = Error
> {
  execute(inputData: I, callbacks: UseCaseCallbacks<O, E>): void;
}
