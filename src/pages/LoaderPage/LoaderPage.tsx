import cls from "./LoaderPage.module.scss";
import Loader from "components/Shared/Loader/Loader";

interface LoaderPageProps {
}

const LoaderPage = ({}: LoaderPageProps) => {
    return (
        <div className={cls.LoaderPage} >
            <Loader/>
        </div>
    );
};

export default LoaderPage;