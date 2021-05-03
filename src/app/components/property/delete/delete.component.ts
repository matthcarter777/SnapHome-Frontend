import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Property } from '../../../models/property.model';
import { PropertysService } from '../../../services/propertys.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class PropertyDeleteComponent implements OnInit {
  property!: Property;

  constructor(
    private propertyService: PropertysService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.propertyService.show(id as string).subscribe(property => {
      this.property = property;
    });
  }

  show() {
    this.propertyService.delete(this.property.id as string).subscribe(() =>{
      this.router.navigate(['/propertys'])
    })
  }

  cancel(): void {
    this.router.navigate(['/propertys']);
  };
}
