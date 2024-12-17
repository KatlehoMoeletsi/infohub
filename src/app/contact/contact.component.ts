import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent   {

  feedbackMessage: string = ''; // Holds the message feedback
  feedbackClass: string = '';   // CSS class for styling success or error
  showPopup: boolean = false; 
  feedbackTitle: string = ''; 
books = [
  { title: 'Book 1', image: 'assets/icon/book1.png' },
  { title: 'Book 2', image: 'assets/icon/book2.png' },
  { title: 'Book 3', image: 'assets/icon/book3.png' },
  { title: 'Book 4', image: 'assets/icon/book4.png' },
  { title: 'Book 5', image: 'assets/icon/book5.jpg' },
  { title: 'Book 6', image: 'assets/icon/book6.png' },
  { title: 'Book 7', image: 'assets/icon/book2.png' },
  { title: 'Book 1', image: 'assets/icon/book1.png' },
  
  
  
];

currentIndex = 0; 
translateX = 0;  
itemWidth = 220;
inTransition = false; 

moveCarousel(direction: number) {
 
  const maxIndex = 1;

  this.currentIndex += direction;

  
  if (this.currentIndex < 0) {
    this.currentIndex = maxIndex;
  } else if (this.currentIndex > maxIndex) {
    this.currentIndex = 0;
  }

  this.translateX = this.currentIndex * this.itemWidth;
}
 
endMessage(form: any): void {
  if (form.valid) {
    const { name, email, subject, message } = form.value;
    this.feedbackTitle = 'Message Sent Successfully! 🎉';
    this.feedbackMessage = `Thank you, ${name}! We have received your message.<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Subject:</strong> ${subject}<br>
      <strong>Message:</strong> ${message}`;
    
    this.showPopup = true; 
    form.reset();
  } else {
    this.feedbackTitle = 'Error 🚫';
    this.feedbackMessage = 'Please fill in all required fields.';
    this.showPopup = true;
  }
}


closePopup(): void {
  this.showPopup = false; 
}

}
