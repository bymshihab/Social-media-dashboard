import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreateComponent {
  @ViewChild('myModal') myModal!: ElementRef<HTMLDialogElement>;

  openModal() {
    const modal = this.myModal.nativeElement;
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  }

  closeModal() {
    const modal = this.myModal.nativeElement;
    if (modal instanceof HTMLDialogElement) {
      modal.close();
    }
  }
}
