import { ReactNode } from 'react';

export namespace Components {
  export namespace Layout {
    // Navigation
    export namespace Navigation {
      export interface Props {
        children: ReactNode;
      }
    }

    // Header
    export namespace Header {
      export interface Props {
        children: ReactNode;
      }
    }

    // View
    export namespace View {
      export interface Props {
        children: ReactNode;
        id: string;
        styles?: string;
      }
    }

    // Main
    export namespace Main {
      export interface Props {
        children: ReactNode;
      }
    }

    // Container
    export namespace Container {
      export interface Props {
        children: ReactNode;
      }
    }
  }

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

    // NavigationItem
    export namespace NavigationItem {
      export interface Props {
        href: string;
        name: string;
        active?: boolean;
      }
    }

    // Button
    export namespace Button {
      export interface Props {
        href: string;
        name: string;
        method?: () => void;
      }
    }

    // Input
    export namespace Input {
      export interface Props {
        id?: string;
        label?: string;
        type: string;
        placeholder?: string;
        value?: string;
        method?: (event: React.FormEvent) => void;
      }
    }

    // Form
    export namespace Form {
      export interface Props {
        children: ReactNode;
        method?: (event: React.FormEvent) => void;
      }
    }

    // Message
    export namespace Message {
      export interface Props {
        message: string;
      }
    }
  }

  export namespace Views {
    // Authentication
    export namespace Authentication {
      export interface Props {
        type: 'Login' | 'Register' | 'Reset';
      }
    }
  }
}
