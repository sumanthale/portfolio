import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  progress: any;

  constructor() {}
  ngAfterViewInit(): void {
    window.addEventListener('unload', () => {
      window.scrollTo(0, 0);
    });
    this.progress = document.querySelector('.progress-bar');
    const height = document.body.clientHeight - 787;
    window.addEventListener('scroll', () => {
      const mountain = window.scrollY;
      this.progress.style.width = `${mountain / (height / 100)}%`;
    });

    const observer = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.remove('hiding');
        entry.target.classList.add('animate__fadeInUp');
        observer.unobserve(entry.target);
      },
      {
        root: null,
        threshold: 0,
      }
    );
    document.querySelectorAll('.hiding').forEach((e) => {
      observer.observe(e);
    });
    document.querySelectorAll('.fab').forEach((icon) => {
      icon.addEventListener('mouseover', () => {
        icon.classList.add('animate__rubberBand');
      });
      icon.addEventListener('mouseout', () => {
        icon.classList.remove('animate__rubberBand');
      });
    });
  }
}
