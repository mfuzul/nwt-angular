import {Component, Input, OnInit} from '@angular/core';
import {debug} from 'util';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.less']
})
export class StarRatingComponent implements OnInit {
  @Input()
  count: number;

  @Input()
  starId: number;
  stars: number[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.count; i++) {
      this.stars.push(i);
    }
  }

  starOnMouse(e, action: string) {
    const starId = e.target.getAttribute('data-star-id');
    const parent = e.target.parentElement;
    let removeClass;
    let addClass;

    switch (action) {
        case 'enter':
          removeClass = 'fa-star-o';
          addClass = 'fa-star';
          break;
        case 'leave':
          removeClass = 'fa-star';
          addClass = 'fa-star-o';
          break;
    }

    for (let i = 0; i <= starId; i++) {
      const star = parent.querySelector(`i[data-star-id="${i}"]`);

      star.classList.remove(removeClass);
      star.classList.add(addClass);
    }
  }

}
