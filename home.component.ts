
import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'home',
  template: `
  <ActionBar title="Listado"></ActionBar>

  <StackLayout>

    <TextField [(ngModel)]="search" hint="Buscar..." ></TextField>

    <ListView [items]="items" (itemTap)="goDetail($event)">
      <ng-template let-item="item">
        <FlexboxLayout flexDirection="row" justifyContent="space-between">
          <Label [text]="item.name"></Label>
          <Button text="Acción" (tap)="openAction(item)"></Button>
        </FlexboxLayout>
      </ng-template>
    </ListView>

    <Button text="Pull to refresh" (tap)="refresh()"></Button>

  </StackLayout>
  `
})
export class HomeComponent {

  search = "";
  items = [
    { id: 1, name: "Item 1", category: "A" },
    { id: 2, name: "Item 2", category: "B" }
  ];

  constructor(private router: RouterExtensions) {}

  goDetail(event: any) {
    this.router.navigate(['/detail', this.items[event.index].id]);
  }

  refresh() {
    this.items.push({ id: Date.now(), name: "Nuevo Item", category: "C" });
  }

  openAction(item: any) {
    item.category = "Modificado";
  }
}
