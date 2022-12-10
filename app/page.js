import Link from "next/link";

export default function RootPage(){
    return (
        <div className="grid grid-cols-1 gap-2 h-[700px]">

            <div className="bg-sky-500 flex justify-center items-center">
                <main className="text-center">
                    <h1 className="text-3xl text-slate-200">HomePage Component</h1>
                    <Link href={'/main'} className='text-3xl font-bold underline'>MainComponent</Link>
                </main>
            </div>

        </div>
    )
}


/** 
 * 
 *  localhost:3000 - app
 *  localhost:3000/footer - footer
 * 
 */