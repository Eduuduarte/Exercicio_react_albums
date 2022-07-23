import { PostsAlbums } from "../../types/postAlbuns";
import * as C from './styles'

type Props = {
    data: PostsAlbums
}

export const GetItems = ({data}: Props) => {
    return (
        <C.Container>
            {data.title}
        </C.Container>
    );
}