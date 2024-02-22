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
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container">
      <div class="header">
        <h1>Reto 2da. Semana</h1>
        <hd-wallet-multi-button> </hd-wallet-multi-button>
      </div>

      @if (account()) {
        <div class="balance-table">
          <h2>Página de Balance</h2>
          <table class="table table-striped">
        
            <tbody>
              <img class="w-24 h-24" src="./assets/Solana_logo.png" />
              {{
                accountsol()?.balance
              }}
              @for (item of account(); track $index) {
                <img class="w-24 h-24" src="{{ item.info.image }}" />
                <p>{{ item.balance }}</p>
              }
            </tbody>
          </table>
        </div>
      }

      <div class="history-table">
        <h2>Página de Transacciones</h2>
        @if (!transacciones()) {
          <p>no se conectó</p>
        } @else {
          <table class="table table-striped">
            <tbody>
              @for (item of transacciones(); track $index) {
                <br />
                <p>{{ item.status }}</p>
                <p>{{ item.type }}</p>
                <p>{{ item.timestamp }}</p>
                <br />
              }
            </tbody>
          </table>
        }
      </div>
    </div>
  `,
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
