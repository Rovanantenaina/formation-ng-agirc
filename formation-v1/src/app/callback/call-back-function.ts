export function callBackFunctionSync(param: (calbackParam: string) => void): void {
    const megaCalcul: string = Math.random().toFixed(2);
    console.error("Sync before callback", megaCalcul);
    // .... others instructions

    // then call back function in parameter
    param(megaCalcul);

    console.error("Sync  after callback", megaCalcul);
}


export function callBackFunctionAsync(param: (calbackParam: string) => void): void {
    let megaCalcul: string = Math.random().toFixed(2);
    console.error("Async before callback", megaCalcul);
    // .... others instructions

    // Async treatment
    setTimeout((): void => {
        // update megaCalcul
        megaCalcul = Math.random().toFixed(4);
        
        // then call back function in parameter
        param(megaCalcul);
    }, 5000);
    
    console.error("Async after callback", megaCalcul);
}