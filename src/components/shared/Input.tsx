import { workSans } from '@dynamicFonts';
import { InputStyles } from '@sharedStyles';
import { Components } from '@types';

export default function Input({
  id,
  label,
  type,
  placeholder,
  value,
}: Components.Shared.Input.Props) {
  return (
    <div className={InputStyles.Input}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        className={workSans.className}
      />
    </div>
  );
}
