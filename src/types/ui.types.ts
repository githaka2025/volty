import { ReactNode } from 'react';

export namespace UI {
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

    // NavigationItem
    export namespace Button {
      export interface Props {
        href: string;
        name: string;
      }
    }
  }

  namespace Views {}
}
