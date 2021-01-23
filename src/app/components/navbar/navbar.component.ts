import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Button } from 'protractor';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  x: MouseEvent;
  y: MouseEvent;

  constructor() {}
  ngAfterViewInit(): void {
    const btn: HTMLElement = document.querySelector('.navigation__button');
    document
      .querySelector('.nav-div')
      .addEventListener('mousemove', (event) => {
        const point: any = event;
        const width = document.body.offsetWidth;
        btn.style.transform = `translate3d(${point.x - (width - 92)}px, ${
          point.y - 92
        }px, 0px)`;
        btn.addEventListener('mouseover', () => {
          btn.style.transform = `translate3d(${point.x - (width - 92)}px, ${
            point.y - 92
          }px, 0px)`;
        });
      });
    document.querySelector('.nav-div').addEventListener('mouseout', (event) => {
      btn.style.transform = `translate3d(0px, 0px, 0px)`;
    });

    const elements = document.querySelectorAll('.navigation__link');
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener('click', () => {
        document.querySelector('input').click();
      });
    }
  }

  ngOnInit(): void {}
}
