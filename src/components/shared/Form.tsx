import { FormStyles } from '@sharedStyles';
import { Components } from '@types';

export default function Form({ children }: Components.Shared.Form.Props) {
  return <form className={FormStyles.Form}>{children}</form>;
}
