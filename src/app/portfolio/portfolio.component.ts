import { Component } from '@angular/core';

@Component({
    selector: 'app-portfolio',
    imports: [],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
    images: string[] = [
        '/images/port1.png',
        '/images/port2.png',
        '/images/port3.png',
        '/images/port1.png',
        '/images/port2.png',
        '/images/port3.png',
    ];
    currentIndex: number = 0;

    setCurrentImage(index: number): void {
        this.currentIndex = index;
    }

    prevImage(): void {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.images.length - 1;
        }
    }

    nextImage(): void {
        if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
    }
}
