import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';

interface Props {
	isOpen: boolean;
	onClick: () => void;
}

export const ArrowButton = ({ isOpen, onClick }: Props) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, { [styles.container_open]: isOpen })}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
			/>
		</div>
	);
};
