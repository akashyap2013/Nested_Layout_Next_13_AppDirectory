
import Analytics from './analytics/page';
import Settings from './settings/page'
import Sidebar from '../sidebar/page'


export default function Page(){
    return (
        <div className="grid grid-cols-6 gap-2 h-[700px]">
            <div className="col-span-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-span-4 bg-sky-500 ">
                <main className="grid grid-cols-2">
                    <Analytics></Analytics> 
                    <Settings></Settings>
                </main>
            </div>
        </div>
    )
}
