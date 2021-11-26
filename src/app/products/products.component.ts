import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  links = [
    'https://mscit.mkcl.org/course-details',
    'https://klic.mkcl.org/klic-courses/advanced-tally',
    'https://klic.mkcl.org/klic-courses/tally-gst',
    'http://mastering.mkcl.org/typing/',
    'https://klic.mkcl.org/klic-diploma#',
    'http://english.mkcl.org/',
    'https://klic.mkcl.org/',
    'https://klic.mkcl.org/klic-courses/c-plusplus',
    'https://klic.mkcl.org/klic-courses/c-programming',
  ];
}
