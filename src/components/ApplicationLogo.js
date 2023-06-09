import Logo from '../../public/imtihan.svg';
import Image from 'next/image';

export default function ApplicationLogo({ ...props }) {
    return <Image src={Logo} placeholder="empty" {...props} alt="imtihan logo" />;
}
