export namespace Middleware {
  // Response
  export interface Response {
    success: boolean;
    error?: {
      type?: string;
      origin: string;
      message: string;
    };
  }
}
