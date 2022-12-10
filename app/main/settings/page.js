import Link from "next/link"

export default function Page() {
    return (
        <div className="border text-center bg-slate-100 h-96 m-4">
            <div className="flex justify-center items-center h-full">
                <div>
                    <h1 className="text-xl">Settings Component</h1>
                    <Link href={'main/settings'} className="text-xl font-bold underline">Settings</Link>
                </div>
            </div>
        </div>
    )
}