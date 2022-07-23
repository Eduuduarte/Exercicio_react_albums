import * as C from './style';

type Props = {
    titulo: string;
}

export const Title = ({titulo}: Props) => {
    return (
        <C.Container>
            {titulo}
        </C.Container>
    );
}