interface ContainerProps {
    className? : string;
    children? : JSX.Element | JSX.Element[];
}

export const Container = ({ className = '', children } : ContainerProps) => {
    return (
        <div className={`container-cabinet ${className}`}>{children}</div>
    )
}
