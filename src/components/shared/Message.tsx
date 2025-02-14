import { MessageStyles } from '@sharedStyles';
import { Components } from '@types';

export default function Message({ message }: Components.Shared.Message.Props) {
  return (
    <div className={MessageStyles.Message}>
      <p>{message}</p>
    </div>
  );
}
