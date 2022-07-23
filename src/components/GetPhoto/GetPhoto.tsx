import { Photo } from '../../types/postPhoto';
import * as C from './style';

type Props = {
    data: Photo;
}

export const GetPhoto = ({data}: Props) => {
    return (
        <C.Container>
            <C.Title>
                {data.title}
            </C.Title>
            <C.Image src={data.thumbnailUrl} alt={data.title}/>
        </C.Container>
    );
}