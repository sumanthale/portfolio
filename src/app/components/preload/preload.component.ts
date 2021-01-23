import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.scss'],
})
export class PreloadComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const time: any = new Date();
    window.addEventListener('load', () => {
      const preload: HTMLElement = document.querySelector('.preload');
      preload.style.opacity = '0';
      preload.style.pointerEvents = 'none';
    });
  }

  ngOnInit(): void {}
}
