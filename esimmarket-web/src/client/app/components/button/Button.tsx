import { IButtonProps } from './IButton';
import Link from 'next/link';
import s from './Button.module.scss';
import cn from 'classnames';

export const Button = ({
                           color = 'primary',
                           size = 'medium',
                           children,
                           className,
                           href,
                           ...props
                       }: IButtonProps): JSX.Element => {
    if (href && href.length > 0) {
        return (
            <Link href={href}>
                <a
                    className={cn(s.btn, className, {
                        [s.primary]: color == 'primary',
                        [s.secondary]: color == 'secondary',
                        [s.light]: color == 'light',
                        [s.dark]: color == 'dark',
                        [s.link]: color == 'link',
                        [s.medium]: size == 'medium',
                        [s.small]: size == 'small',
                    })
                    }
                >
                    {children}
                </a>
            </Link>
        );
    } else {
        return (
            <button
                className={cn(s.btn, className, {
                    [s.primary]: color == 'primary',
                    [s.secondary]: color == 'secondary',
                    [s.light]: color == 'light',
                    [s.dark]: color == 'dark',
                    [s.link]: color == 'link',
                    [s.medium]: size == 'medium',
                    [s.small]: size == 'small',
                    [s.tiny]: size == 'tiny',
                })}
                type='button'
                {...props}
            >
                {children}
            </button>
        );
    }
};
