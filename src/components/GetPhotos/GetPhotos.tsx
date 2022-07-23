import * as C from './style'
import {PostsPhotos} from '../../types/postPhotos'

type Props = {
    data: PostsPhotos;
}

export const GetPhotos = ({data}: Props) => {
    return (
        <C.Container>
            <C.Imagem src={data.thumbnailUrl} alt={data.title} />
        </C.Container>
    );
}