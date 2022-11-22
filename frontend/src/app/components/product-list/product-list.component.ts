import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '../../services';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  environment = environment;
  // products: any;
  @Input() products: Array<any>;
  host;

  constructor(private projectService: ProjectService) {
    // this.getProjects();
    this.host = window.location.host
    console.log(window.location.host)
  }

  ngOnInit(): void {
  }
  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.products.firstChange != simpleChanges.products.currentValue) {
      var host = window.location.protocol + "//" + window.location.host;
      this.products?.forEach((ele => {
        ele["url"] = host + "/project/" + ele["slug"]
      }))
    }
  }

}
