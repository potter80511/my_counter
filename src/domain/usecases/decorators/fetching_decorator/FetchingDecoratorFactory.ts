import { UseCase } from 'src/domain/usecases/base/UseCase';
import {
  FetchingDecorator,
  InferableDispatchInputData,
} from 'src/domain/usecases/decorators/fetching_decorator/FetchingDecorator';
import { Controller as FetchingController } from 'src/domain/usecases/decorators/fetching_decorator/FetchingController';

export class FetchingDecoratorFactory {
  static decorateUseCase<I, O, E>(
    useCase: UseCase<I, O, E>,
  ): UseCase<InferableDispatchInputData<I>, O, E> {
    const fetchingController = FetchingController.INSTANCE;
    return new FetchingDecorator(useCase, fetchingController);
  }
}
