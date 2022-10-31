import React, {Component, ReactElement} from "react";
import {useAppSelector} from "hooks/redux";

interface withConditionalAuthProps {
    isNotAuth: ReactElement;
}

const withConditionalAuth =
    (feedbackProps: withConditionalAuthProps)  => (Component: React.FunctionComponent) => (props: any) => {

        const {user} = useAppSelector(state => state.userReducer);

        if (!user)
            return feedbackProps.isNotAuth;

        return (
            <Component {...props} />
        );
    };

export default withConditionalAuth;