import React, {Component, ReactElement} from "react";

interface withConditionalDataProps {
    loadingElement: ReactElement;
    errorFeedback: ReactElement;
    dataEmptyFeedback: ReactElement;
}

const withConditionalData =
    (feedbackProps: withConditionalDataProps)  => (Component: React.FunctionComponent) => (props: any) => {

    if (props?.isLoading)
        return feedbackProps.loadingElement;

    if (props?.error)
        return feedbackProps.errorFeedback;

    if (!props?.data)
        return feedbackProps.dataEmptyFeedback;

        return (
            <Component {...props} />
        );
};

export default withConditionalData;