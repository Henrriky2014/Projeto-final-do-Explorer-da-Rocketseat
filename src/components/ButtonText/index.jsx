import { Container } from './styles';

export function ButtonText({icon: Icon,title, ...rest}) {
    return (
        <Container
            type='button'
            {...rest}
        >
            <Icon size={22} />
            {title}
        </Container>
    );
}