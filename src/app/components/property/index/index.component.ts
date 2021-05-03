import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Property } from '../../../models/property.model';
import { PropertysService } from '../../../services/propertys.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class PropertyIndexComponent implements OnInit {
  propertys!: Property[];

  constructor(
    private propertyService: PropertysService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.propertyService.index().subscribe(propertys => this.propertys = propertys);
  }

  navigateToNewProperty(): void {
    this.router.navigate(['propertys/create'])
  }
}
