import React from 'react';

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(
    ({ disabled = false, className, ...props }, ref) => (
        <input
            ref={ref}
            {...props}
            disabled={disabled}
            className={`${className} border border-zinc-500 focus:ring-brand dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 rounded-lg p-2.5`}
        />
    ),
);

export default Input;
