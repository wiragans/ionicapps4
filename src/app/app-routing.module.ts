import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'listproduk', loadChildren: './balance/balance.module#BalancePageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'keranjang', loadChildren: './keranjang/keranjang.module#KeranjangPageModule' },
  { path: 'tambahproduk', loadChildren: './tambahproduk/tambahproduk.module#TambahprodukPageModule' },
  { path: 'artikel', loadChildren: './artikel/artikel.module#ArtikelPageModule' },
  { path: 'detilartikel', loadChildren: './detilartikel/detilartikel.module#DetilartikelPageModule' },
  { path: 'komentar', loadChildren: './komentar/komentar.module#KomentarPageModule' },
  { path: 'detailkomentar', loadChildren: './detailkomentar/detailkomentar.module#DetailkomentarPageModule' },
  { path: 'tambahkomentar', loadChildren: './tambahkomentar/tambahkomentar.module#TambahkomentarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
