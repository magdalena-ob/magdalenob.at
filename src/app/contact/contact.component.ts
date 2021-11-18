import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FadeInAnimation } from '../animations';
import { ScrollService } from '../scroll.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [FadeInAnimation]
})
export class ContactComponent implements OnInit {
  playAnimation = false;
  currentContainer: string | undefined;


  @Input() currentSection: any;

  constructor(public scrollService: ScrollService, private fb: FormBuilder) { }

  //Animation on scroll
  @HostListener('window: scroll')
  animateOnScroll() {
    this.currentContainer = this.scrollService.currentSection.value;

    if (this.currentContainer == 'contact') {
      this.playAnimation = true;
    } 
  }

  
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }

  //email = new FormControl('', [Validators.required, Validators.email]);

  //getErrorMessage() {
  //  if (this.contactForm.controls['email'].hasError('required')) {
  //    return 'You must enter an Email';
  //  }
  //  return this.contactForm.controls['email'].hasError('email') ? 'Not a valid email' : '';
  //}


  ngOnInit(): void {
  }


}
