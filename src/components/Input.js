import React from 'react';


const Input = React.forwardRef(
    ({ disabled = false, className, ...props }, ref) => (
        <input
            ref={ref}
            {...props}
            disabled={disabled}
            className={`${className} transition placeholder:transition hover:border-zinc-900 dark:hover:border-zinc-300 hover:placeholder:text-zinc-900 dark:hover:placeholder:text-zinc-300 focus:ring-transparent focus:border-zinc-900 dark:focus:border-zinc-300 dark:bg-black text-zinc-900 dark:text-zinc-300 focus:placeholder:text-zinc-900 dark:focus:placeholder:text-zinc-300 rounded-lg p-2.5`}
        />
    ),
);

export default Input;
