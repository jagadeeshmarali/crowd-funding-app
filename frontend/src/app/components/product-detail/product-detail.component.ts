import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService, ProjectService } from '../../services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  projectDetail: any;

  constructor(private modalService: NgbModal, private projectService: ProjectService, public route: ActivatedRoute, public authService: AuthenticationService) {
    console.log(this.route.snapshot.params["slug"]);
    this.projectService.getProjectBySlug(this.route.snapshot.params["slug"]).toPromise().then((data) => {
      console.log(data);
      this.projectDetail = data;
    })

  }

  imageSrc = 'assets/images/product/1.jpg';

  sizeClass = "";

  ngOnInit(): void {
  }

  onClick(imagename: any) {
    this.imageSrc = "assets/images/product/" + imagename;
  }

  open(content: any) {
    this.modalService.open(content);
  }

  toggleSizeClass(size: any) {
    this.sizeClass = size;
  }

}
