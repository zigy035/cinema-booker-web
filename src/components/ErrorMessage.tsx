import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className="alert alert-danger m-4" role="alert">
            <h4 className="alert-heading">Error Loading Data</h4>
            <p>{message}</p>
            <button
                className="btn btn-danger"
                onClick={() => window.location.reload()}
            >
                Try Again
            </button>
        </div>
    );
};

export default ErrorMessage;