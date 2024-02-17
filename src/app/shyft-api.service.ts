import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShyftApiService {
    private readonly _httpClient: HttpClient = inject(HttpClient);
    private readonly _header = {'x-api-key': '6DL4olzOYQc0wgAz'};
    private readonly _mint = '5ZfZAwP2m93waazg8DkrrVmsupeiPEvaEHowiUP7UAbJ';

    getAccount(publicKey: string | undefined | null) {
        if (!publicKey) {
            return of(null);
        }    

        const url = new URL('https://api.shyft.to/sol/v1/wallet/all_tokens');
        url.searchParams.set('network', 'mainnet-beta');
        url.searchParams.set('wallet', publicKey);
        
        return this._httpClient.get<{
            result: [{balance: number; info: {image: string}}];
        }>(url.toString(), {headers: this._header}).
        pipe(map((response) => response.result)); 
    }

    getAccountSolBalance(publicKey: string | undefined | null) {
        if (!publicKey) {
            return of(null);
        }    

        const url = new URL('https://api.shyft.to/sol/v1/wallet/balance');
        url.searchParams.set('network', 'mainnet-beta');
        url.searchParams.set('wallet', publicKey);
        
        return this._httpClient.get<{
            result: {balance: number;};
        }>(url.toString(), {headers: this._header}).
        pipe(map((response) => response.result)); 
    }
}