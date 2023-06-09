export default function Button({ type = 'submit', className, ...props }) {
    return (
        <button
            type={type}
            className={`${className} dark:text-white text-zinc-900 border border-brand hover:bg-brand hover:text-white transition-all rounded-lg px-4 py-2`}
            {...props}
        />
    );
}
