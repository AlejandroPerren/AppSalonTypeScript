import SummaryApi from "../common/SummaryApi";
import { Services } from "../models/services";
import { ConflictError } from "../errors/http_errors";

async function fetchData(input: RequestInfo, init?: RequestInit){
    const response = await fetch(input, init);
    if(response.ok){
        return response;
    }else{
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        if(response.status === 409){
            throw new ConflictError(errorMessage);
        }else{
            throw Error("La Peticion Fallo.  Estado:" + response.status + "mensaje" + errorMessage)
        }
    }
}


export async function getServices():  Promise<Services[]>{
    const response = await fetchData(SummaryApi.GetServices.url, {method : SummaryApi.GetServices.method});
    return response.json()
}


export interface ServiceInterface{
    id?: string | undefined;
    name: string,
    price: number,
}


export async function createService(services: ServiceInterface): Promise<Services> {

    const response = await fetchData(SummaryApi.CreateService.url, 
        {method: SummaryApi.CreateService.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(services)
    });
    return response.json();
}

export async function updateService(serviceId: string, service: ServiceInterface): Promise<Services>{
    const response = await fetchData(SummaryApi.UpdateService.url + serviceId, 
        {
            method: SummaryApi.UpdateService.method,
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(service)
        })
        return response.json();

}

