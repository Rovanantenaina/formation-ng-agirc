import {callBackFunctionAsync, callBackFunctionSync} from "./call-back-function";

export class ClientCallBack {
    
    public static syncCallBack(): void {
        callBackFunctionSync((data: string): void => {
            // todo some treatment
            console.error("client sync callBack", data);
        });
    }
    
    public static asyncCallBack(): void {
        callBackFunctionAsync((data: string): void => {
            // todo some treatment
            console.error("client async callBack", data);
        });
    }
    
}