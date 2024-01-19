import {CallBackFunction} from "./call-back-function";

export class ClientCallBack {

    public static syncCallBack(): void {
        CallBackFunction.callBackFunctionSync((data: string): void => {
            // todo some treatment
            console.error("client sync callBack", data);
        });
    }

    public static asyncCallBack(): void {
        CallBackFunction.callBackFunctionAsync((data: string): void => {
            // todo some treatment
            console.error("client async callBack", data);
        });
    }

    public static asyncCallBackSubscribe(): void {
        CallBackFunction.callBackFunctionAsyncSubscribe((data: string): void => {
            // todo some treatment
            console.error("client async subscribe callBack", data);
        });
    }

}