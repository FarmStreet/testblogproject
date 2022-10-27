import cls from "./SearchInput.module.scss";
import classNames from "classnames";
import Search from "assets/svg/search.svg";

interface SearchInputProps {
    className?: string;
    onClick: (value: string) => void;
    value: string;
    setValue: (value: string) => void;
}

const SearchInput = ({className, onClick, value, setValue}: SearchInputProps) => {

    return (<div className={className}>
            <label className={cls.Label}><input onKeyUp={(e) => e.which === 13 ? onClick(value) : {}}
                placeholder="Поиск по статьям"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={classNames(cls.SearchInput)}/>
                <Search onClick={() => onClick(value)} className={cls.Icon}/>
            </label>
    </div>
    );
};

export default SearchInput;