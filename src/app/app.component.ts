import { Component, inject } from '@angular/core';
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
  template: ` <header class="py-8 relative">
    <h1 class="text-5xl text-center mb-4">MI WALLET</h1>
    <div class="flex justify-center">
      <hd-wallet-multi-button> </hd-wallet-multi-button>
    </div>

    @if (account()) {
      <div class="absolute top-4 left-4 flex justify-center items-center gap-2">
        <img [src] = "account()?.info?.image" class = "w-8 h-8" />
        <p class="text x-l"> {{account()?.balance}}</p>
      </div>
    }
  </header>`,
})
export class AppComponent {
  private readonly shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(
    () => this.shyftApiService.getAccount(this._publicKey()?.toBase58()),
    { requireSync: true },
  );
}
