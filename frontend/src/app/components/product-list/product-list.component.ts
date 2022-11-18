import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  products = [
    {
      title: "Project 1",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
      created_by: "Lee",
      funding_goal: "$1500",
      min_bid: "$30",
      launch_date: "2022-12-01",
      campaign_duration: "34 days",
    },
    {
      title: "Project 1",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
      created_by: "Lee",
      funding_goal: "$1500",
      min_bid: "$30",
      launch_date: "2022-12-01",
      campaign_duration: "34 days",
    },
    {
      title: "Project 1",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
      created_by: "Lee",
      funding_goal: "$1500",
      min_bid: "$30",
      launch_date: "2022-12-01",
      campaign_duration: "34 days",
    },
    {
      title: "Project 1",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
      created_by: "Lee",
      funding_goal: "$1500",
      min_bid: "$30",
      launch_date: "2022-12-01",
      campaign_duration: "34 days",
    },
    {
      title: "Project 1",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
      created_by: "Lee",
      funding_goal: "$1500",
      min_bid: "$30",
      launch_date: "2022-12-01",
      campaign_duration: "34 days",
    },
    {
      title: "Project 1",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
      created_by: "Lee",
      funding_goal: "$1500",
      min_bid: "$30",
      launch_date: "2022-12-01",
      campaign_duration: "34 days",
    },
  ];

}
