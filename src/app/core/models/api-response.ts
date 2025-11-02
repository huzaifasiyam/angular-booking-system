export class ApiResponse<T> {
  data: {
    succeeded: boolean;
    message: string;
    errors: any[];
    data?: T;
  };
}
