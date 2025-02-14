import { MessageStyles } from '@sharedStyles';
import { Components } from '@types';

export default function Message({
  message,
  type,
}: Components.Shared.Message.Props) {
  return (
    <div className={MessageStyles.Message}>
      <h1>{type}</h1>
      <p>{message}</p>
    </div>
  );
}
