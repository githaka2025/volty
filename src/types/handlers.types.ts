export namespace Handlers {
  export interface Response {
    success: boolean;
    error?: {
      type: 'handlers';
      origin: string;
      message: string;
    };
  }

  export interface LoginFields {
    email: string;
    password: string;
  }

  export interface RegisterFields extends LoginFields {
    confirmPassword: string;
  }
}
