import Link from 'next/link';
import { Suspense } from 'react';
import DelayComponent from './delay';
import Loading from './loading';

export default function Page() {
    return (
        <aside className="bg-yellow-300 text-center flex justify-center items-center h-full">
             <Suspense fallback={<Loading />}>
                <div>
                    <h1 className="text-2xl font-bold">Sidebar Page Render</h1>
                    <DelayComponent></DelayComponent>
                    <Link href={'/main'} className="text-xl font-bold underline">Main with Sidebar</Link>
                </div>
             </Suspense>
        </aside>
    )
}