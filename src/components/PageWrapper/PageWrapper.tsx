import {ReactNode, Suspense} from "react";

interface PageWrapperProps {
    children: ReactNode;
}

const PageWrapper = ({children}: PageWrapperProps) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="page-wrapper">
                {children}
            </div>
        </Suspense>
    );
};

export default PageWrapper;