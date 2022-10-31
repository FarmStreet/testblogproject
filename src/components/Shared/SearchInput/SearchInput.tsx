import cls from "./SearchInput.module.scss";
import classNames from "classnames";
import Search from "assets/svg/search.svg";
import Input from "components/Shared/Input/Input";
import {debounce} from "actions/debounce";
import {useState} from "react";

interface SearchInputProps {
    className?: string;
    onClick: (value: string) => void;
}

const DEBOUNCE_TIMER_MS = 250;

const SearchInput = ({className, onClick}: SearchInputProps) => {

    const [searchInputValue, setInputSearchValue] = useState<string>('');

    const debouncedHandle = debounce((value) => onClick(value), DEBOUNCE_TIMER_MS)

    return (<div className={className}>
            <label className={cls.Label}><Input onKeyUp={(e) => e.which === 13 ? onClick(searchInputValue) : {}}
                placeholder="Поиск по статьям"
                value={searchInputValue}
                onChange={(e) => {
                    setInputSearchValue(e.target.value);
                    debouncedHandle(e.target.value);
                }}
                className={classNames(cls.SearchInput)}/>
                <Search onClick={() => onClick(searchInputValue)} className={cls.Icon}/>
            </label>
    </div>
    );
};

export default SearchInput;