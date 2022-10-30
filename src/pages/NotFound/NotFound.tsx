import cls from "./NotFound.module.scss";
import BlockHeader from "components/Block/BlockHeader/BlockHeader";
import {Link} from "react-router-dom";

interface NotFoundProps {
}

const NotFound = ({}: NotFoundProps) => {
    return (
        <BlockHeader className={cls.NotFound}>
            <span>Страница не найдена</span>
            <span><Link to={'/'}>На главную</Link></span>
        </BlockHeader>
    );
};

export default NotFound;