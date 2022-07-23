import { useNavigate } from 'react-router-dom';
import * as C from './style'
import voltar from '../../svgs/IconVoltar.svg'

export const Buttton = () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate(-1);
    }

    return (
        <C.Container onClick={handleClickButton}>
            <C.Icon src={voltar}/> <C.Text>Voltar</C.Text>
        </C.Container>
    );
}