import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  products = [
    {
      name: 'Messenger',
      description: 'Elegant and versatile messenger bag for all occasions.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      name: 'Chamber of Secrets',
      description: 'Relive the magical story with this special edition.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      name: 'The Ashes',
      description: 'An inspiring tale of overcoming challenges by Jesse Thistle.',
      imageUrl: 'https://via.placeholder.com/300',
    },
  ];

  constructor() {}
}
