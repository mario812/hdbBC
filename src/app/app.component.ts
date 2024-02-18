import { Component, NgModule, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { ShyftApiService } from './shyft-api.service';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { toSignal } from '@angular/core/rxjs-interop';
import { computedAsync } from 'ngxtension/computed-async';

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent],
  selector: 'miappnx-root',
  template: ` 
 
 <style>
  .container {
  width: 80%;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 24px;
}

.header button {
  margin: 0 auto;
}

.balance-table, .history-table {
  margin-top: 20px;
}

table {
  width: 100%;
}

th, td {
  padding: 10px;
}
.balance-table h2 {
  text-align: center;
}
.history-table h2 {
  text-align: center;
}
 </style>

<div class="container">
  <div class="header">
    <h1>Reto 2da. Semana</h1>
    <hd-wallet-multi-button> </hd-wallet-multi-button>
  </div>

 @if (account()) {
  <div class="balance-table">
    <h2>Página de Balance</h2>
    <table class="table table-striped">
      <!-- <thead>
        <tr>
          <th>Moneda</th>
          <th>Balance</th>
        </tr>
      </thead> -->
      <tbody>
      <img class= "w-24 h-24" src="./assets/Solana_logo.png" />
        {{ accountsol()?.balance }}
      @for (item of account(); track $index) {
        
            <img class="w-24 h-24" src="{{ item.info.image }}">
             <p>{{ item.balance }}</p>
    }
      </tbody>
    </table>
  </div>
 }



  <div class="history-table">
    <h2>Página de Transacciones</h2>
    @if (!transacciones()) {
   <p> no se conectó </p>}
    @else {
    <table class="table table-striped">
     
      <tbody>

      @for (item of transacciones(); track $index) {
        <br>
         <p>{{item.status}}</p> <p>{{item.type}}</p><p>{{item.timestamp}}</p>
        <br>
        
}
      </tbody>
    </table>
}
  </div>

</div>


  
  <!-- <header class="py-8 relative">
    <h1 class="text-5xl text-center mb-4">MI WALLET</h1>
    <div class="flex justify-center">
      <hd-wallet-multi-button> </hd-wallet-multi-button>
      <br />
    </div>

    @if (account()) {
      <div class="display: flex flex-direction: column align-items: center margin: 5px">
      <img class= "w-24 h-24" src="./assets/Solana_logo.png" />
        {{ accountsol()?.balance }}
      </div>

      @for (item of account(); track $index) {
        <div class=>
         
          <div
            class="display: flex flex-direction: column align-items: center margin: 5px"
          >
            <img class="w-24 h-24" src="{{ item.info.image }}" />
            <p>{{ item.balance }}</p>
          </div>
        </div>
      }
    }
    
    @for (item of transacciones(); track $index) {
  
         
          <div
            class="display: flex flex-direction: column align-items: center margin: 5px"
          >
            <p>{{item.timestamp}}</p>
          </div>

    } -->
  `
})
export class AppComponent {
  private readonly shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(
    () => this.shyftApiService.getAccount(this._publicKey()?.toBase58()),
    { requireSync: true },
  );

  
  readonly accountsol = computedAsync(
    () =>
      this.shyftApiService.getAccountSolBalance(this._publicKey()?.toBase58()),
    { requireSync: true },
  );

  readonly transacciones = computedAsync(
    () => this.shyftApiService.getTransactions(this._publicKey()?.toBase58()),
    { requireSync: true },
  );
 
  }
