const delay = delayMs => {
    return new Promise(resolve => setTimeout(resolve, delayMs))
}

export default async function DelayComponent(){
    await delay(3000);
    return (
        <h4>Display Delay Component</h4>
    )
}