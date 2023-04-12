import Link from 'next/link';
export default function NavLink({ name, href, className }) {
    return (
        <Link
            href={href}
            className={`${className} text-center dark:text-white text-zinc-900 border border-brand hover:bg-brand hover:text-white transition-all rounded-lg`}
        >
            {name}
        </Link>
    );
}
