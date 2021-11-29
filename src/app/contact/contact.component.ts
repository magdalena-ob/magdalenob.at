import { HttpClient } from '@angular/common/http';
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

  constructor(public scrollService: ScrollService, private fb: FormBuilder, private http: HttpClient) { }

  endpoint = "https://magdalena-obermayr.developerakademie.com/magdalenob/sendMail.php";
  //submitReport: string | undefined;
  submitContactForm = false;
  messageSuccess = false;
  messageError = false;
  reportColor: string | undefined;
  nameWriter: any;

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
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.nameWriter  = this.contactForm.controls['name'].value;
      console.log('send mail');
      this.sendMail();
    }

  }

  sendMail() {
    this.http.post(this.endpoint, this.contactForm.value)
      .subscribe(
        (success: any) => {
          this.successMessage(success);
        },
        (error: any) => {
          this.errorMessage(error);
        }
      )
  }

  //Success Message
  successMessage(success: any) {
    console.log('erfolgreich versendet', success);
    //this.submitReport = 'Mail sent successfully! Thank you for getting in contact with me.';
    this.submitContactForm = true; 
    this.messageSuccess = true;
    this.reportColor = '#2dfcd8'; 
    this.contactForm.reset();

    //setTimeout(() => {
    //  this.submitContactForm = false;
    //},10000);
  }

  //Error Message
  errorMessage(error: any) {
    console.log('oho, etwas ist schief geflaufen', error);
    //this.submitReport = 'Sorry, something went wrong while sending your message! You can contact me directly by emailing obermma@gmail.com.';
    this.submitContactForm = true; 
    this.messageError = true;
    this.reportColor = '#fa2759';
    this.contactForm.reset();
 

    //setTimeout(() => {
    //  this.submitContactForm = false;
    //},10000);
  }

  closeReport() {
    this.submitContactForm = false;
    this.messageError = false;
  }

  ngOnInit(): void {
  }


}
