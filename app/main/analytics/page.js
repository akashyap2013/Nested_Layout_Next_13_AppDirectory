import Link from "next/link"
import { Suspense } from "react"
import DelayComponent from "../../sidebar/delay"
import Loading from "../../sidebar/loading"

export default function Page() {
    return (
        <div className="border text-center bg-slate-100 h-96 m-4">
            <div className="flex justify-center items-center h-full">
                
                <Suspense fallback={<Loading />}>
                    <div>
                        <h1 className="text-xl">Analytics Component</h1>
                        <DelayComponent></DelayComponent>
                        <Link href={'main/analytics'} className="text-xl font-bold underline">Analytics</Link>
                    </div>
                </Suspense>
            </div>
        </div>
    )
}