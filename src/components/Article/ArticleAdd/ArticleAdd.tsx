import cls from "./ArticleAdd.module.scss";
import classNames from "classnames";
import BlockItem from "components/Block/BlockItem/BlockItem";
import Input from "components/Shared/Input/Input";
import React, {useState} from "react";
import {submitForm} from "actions/validate";
import BlockForm from "components/Block/BlockForm/BlockForm";
import {articleAPI} from "store/services/ArticleService";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {setError} from "store/slices/User/UserSlice";

interface ArticleAddProps {
    className?: string;
}

const ArticleAdd = ({className}: ArticleAddProps) => {

    const dispatch = useAppDispatch();
    const {error} = useAppSelector(state => state.userReducer);
    const [createArticle, {}] = articleAPI.useCreateMutation()

    const [success, setSuccess] = useState('');
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [text, setText] = useState('');

    const submitArticle = (): void => {

        submitForm(
            [
                {
                    value: title,
                    setValue: (msg) => setTitle(msg),
                    minValue: 5,
                    maxValue: 150,
                    name: 'Название'
                },
                {
                    value: tag,
                    setValue: (msg) => setTag(msg),
                    minValue: 5,
                    maxValue: 150,
                    name: 'Рубрика'
                },
                {
                    value: text,
                    setValue: (msg) => setText(msg),
                    minValue: 10,
                    maxValue: 10000,
                    name: 'Текст'
                },
            ],
            (msg) => dispatch(setError(msg)),
            () => {
                createArticle(({
                    title: title.trim(),
                    tag: tag.trim(),
                    text: text.trim(),
                }));
                setText('');
                setTag('');
                setTitle('');
                setSuccess('Статья успешно добавлена')
            }
        )
    }

    return (
        <BlockItem className={classNames(cls.ArticleAdd, className)}>
            <div>Добавить статью:</div>
            <BlockForm onSubmit={submitArticle} error={error} success={success} buttonName="Добавить статью">
                <Input placeholder="Название статьи"
                       required value={title} onChange={(e) => setTitle(e.target.value)} />
                <Input placeholder="Рубрика статьи"
                       required value={tag} onChange={(e) => setTag(e.target.value)} />
                <textarea placeholder="Текст статьи" onKeyDown={(e) => (e.which === 13) && e.preventDefault()}
                          required value={text} onChange={(e) => setText(e.target.value)}  />
            </BlockForm>
        </BlockItem>
    );
};

export default ArticleAdd;