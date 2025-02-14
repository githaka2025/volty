import { DialogStyles } from '@layoutStyles';
import { Footer } from '@layoutComponents';
import { Icon } from '@sharedComponents';

export default function Dialog() {
  return (
    <dialog
      className={[DialogStyles.Dialog, 'layout'].join(' ')}
      open
    >
      <div className={DialogStyles.Head}>
        <Icon
          name='cancel.svg'
          alt=''
          width={24}
          height={24}
        />
      </div>
      <div className={DialogStyles.Body}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sed
          vitae quibusdam suscipit accusamus dicta! Ex, cupiditate, tempora,
          totam velit recusandae quam ut fugit autem perspiciatis repellendus
          quisquam quo? Excepturi.
        </p>
      </div>
      <Footer />
    </dialog>
  );
}
