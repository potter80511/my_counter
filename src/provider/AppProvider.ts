import Fetcher, { IFetcher } from 'src/api/Fetcher';
import { UseCaseHandler } from 'src/domain/usecases/base/UseCaseHandler';

class AppProvider {
  public readonly fetcher: IFetcher;
  public readonly useCaseHandler: UseCaseHandler;

  constructor() {
    this.fetcher = Fetcher.instance();
    this.useCaseHandler = UseCaseHandler.INSTANCE;
  }
}

const appProvider = new AppProvider();
export default appProvider;
