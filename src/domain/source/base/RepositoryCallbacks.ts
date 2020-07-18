export interface ErrorCallback {
  onError: (e: Error) => void;
}

export interface SuccessCallback<T> {
  onSuccess: (result: T) => void;
}
