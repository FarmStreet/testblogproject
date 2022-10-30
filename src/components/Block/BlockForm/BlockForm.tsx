import cls from "./BlockForm.module.scss";
import classNames from "classnames";
import Button from "components/Shared/Button/Button";
import {ReactNode, useEffect} from "react";

interface BlockFormProps {
    className?: string;
    children: ReactNode;
    onSubmit: () => void;
    error: string;
    success?: string;
    buttonName: string;
}

const BlockForm = (props: BlockFormProps) => {

    const {
        className,
        children,
        onSubmit,
        error,
        success = '',
        buttonName
    } = props;

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.which === 13) onSubmit()
    };

    useEffect(() => {

        window.addEventListener("keyup", handleKeyPress);

        return () => window.removeEventListener("keyup", handleKeyPress);
    }, [handleKeyPress])

    return (
        <form className={classNames(cls.BlockForm, className)}>
            {children}
            <div className={cls.Submit}>
                <Button type="button"
                        onClick={onSubmit}>{buttonName}</Button>
                {error
                    ? <div className={cls.Error}>{error}</div>
                    : <div className={cls.Success}>{success}</div>}
            </div>
        </form>
    );
};

export default BlockForm;