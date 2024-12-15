import { Component } from '@angular/core';

@Component({
  selector: 'app-book-carousel',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
 export class ShopComponent 
{
  books = [
    { title: 'Book 1', image: 'assets/book1.jpg' },
    { title: 'Book 2', image: 'assets/book2.jpg' },
    { title: 'Book 3', image: 'assets/book3.jpg' },
    { title: 'Book 4', image: 'assets/book4.jpg' },
    { title: 'Book 5', image: 'assets/book5.jpg' },
    { title: 'Book 6', image: 'assets/book6.jpg' }
  ];

  currentIndex = 0; // Track the current index
  translateX = 0;   // Pixel translation value for the carousel
  itemWidth = 220;  // Adjust this based on the width of a book-item (including margin)

  moveCarousel(direction: number) {
    const maxIndex = this.books.length - 3; // Assuming 3 items are visible at a time

    this.currentIndex += direction;

    // Prevent overscrolling
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }
    if (this.currentIndex > maxIndex) {
      this.currentIndex = maxIndex;
    }

    this.translateX = -this.currentIndex * this.itemWidth;
  }
}
