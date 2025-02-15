export namespace Hooks {
  // Response
  export interface Response {
    success: boolean;
    error?: {
      origin: string;
      message: string;
    };
  }

  // useAuth
  export namespace useAuth {
    export interface Fields {
      email?: string;
      password?: string;
      confirmPassword?: string;
    }
  }
}
