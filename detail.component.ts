
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail',
  template: `
  <ActionBar title="Detalle"></ActionBar>
  <StackLayout>
    <Label [text]="'Detalle ID: ' + id"></Label>
  </StackLayout>
  `
})
export class DetailComponent implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
}
