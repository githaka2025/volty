import { Interface } from 'node:readline';

export namespace UI {
  export namespace Layout {}

  export namespace Shared {
    // Icon
    export namespace Icon {
      export interface Props {
        name: string;
        alt: string;
        width: number;
        height: number;
        styles?: string;
      }
    }

    // Brand
    export namespace Brand {
      export interface Props {
        name: string;
      }
    }
  }

  namespace Views {}
}
