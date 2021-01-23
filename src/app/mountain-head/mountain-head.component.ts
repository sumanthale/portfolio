import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-mountain-head',
  templateUrl: './mountain-head.component.html',
  styleUrls: ['./mountain-head.component.scss'],
})
export class MountainHeadComponent implements OnInit, AfterViewInit {
  right: any;
  left: any;
  mountainBottom: any;
  bannerVideo: any;
  constructor() {}
  ngAfterViewInit(): void {
    this.right = document.querySelector('.mountain-right');
    this.left = document.querySelector('.mountain-left');
    this.mountainBottom = document.querySelector('.mountain-bottom');
    this.bannerVideo = document.querySelector('.banner-video');
    document.body.scrollTop = 0;
    window.addEventListener('scroll', () => {
      const mountain = window.scrollY;
      if (mountain < 500) {
        this.right.style.transform = `translate3d(${mountain / 15}%, 0px, 0px)`;
        this.left.style.transform = `translate3d(-${mountain / 15}%, 0px, 0px)`;
        this.bannerVideo.style.transform = `translate3d(0px, ${
          mountain / 33
        }vh, 0px)`;
        this.mountainBottom.style.transform = `translate3d(0px, ${
          mountain / 40
        }vh, 0px) scale(${mountain / 1000 + 1})`;
      }
    });
    const name = document.querySelector('.page-banner-content h2');

    this.typed();
  }
  typed(): void {
    const typed = new Typed('.typed', {
      strings: ['ALE SUMANTH.', ' A DEVELOPER!'],
      smartBackspace: true,
      cursorChar: '|',
      startDelay: 700,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
  }

  ngOnInit(): void {}
}
