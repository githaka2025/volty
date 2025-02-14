import { FormStyles } from '@sharedStyles';
import { Components } from '@types';

export default function Form({
  children,
  method,
}: Components.Shared.Form.Props) {
  return (
    <form
      className={FormStyles.Form}
      onSubmit={method}
    >
      {children}
    </form>
  );
}
