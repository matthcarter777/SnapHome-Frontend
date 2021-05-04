import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property.model';
import { PropertysService } from 'src/app/services/propertys.service';

@Component({
  selector: 'app-all-propertys',
  templateUrl: './all-propertys.component.html',
  styleUrls: ['./all-propertys.component.css']
})
export class AllPropertysComponent implements OnInit {
  loading = false;
  properties!: Property[];
  
  constructor(
    private propertyService: PropertysService
  ) { }

  ngOnInit(): void {
    this.propertyService.index().subscribe(propertys => this.properties = propertys);
  }

}
