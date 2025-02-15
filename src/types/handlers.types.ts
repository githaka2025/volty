export namespace Handlers {
  export interface Response {
    success: boolean;
    error?: {
      origin: string;
      message: string;
    };
  }

  export interface LoginFields {
    email: string;
    password: string;
  }
}
