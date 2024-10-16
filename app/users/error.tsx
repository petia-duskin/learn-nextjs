'use client';
import React from 'react';

interface Props {
    error: Error;

    reset(): void;
}

const ErrorPage = ({error, reset}: Props) => {
    console.log("Error", error)
    return (
        <div>
            Some error inside user
            <button className="btn" onClick={() => reset()}>Retry</button>
        </div>
    );
};

export default ErrorPage;