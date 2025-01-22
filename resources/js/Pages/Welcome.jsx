import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <AuthenticatedLayout>
                swlpslms
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, nesciunt, ut eligendi magni repellendus, itaque iusto animi qui magnam omnis fugit blanditiis nostrum voluptates dicta corrupti recusandae quo error reprehenderit! Ipsum vero harum provident recusandae aliquid veniam eos earum culpa!
                </div>
            </AuthenticatedLayout>
        </>
    );
}
