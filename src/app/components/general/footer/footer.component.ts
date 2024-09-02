import { Component, OnInit } from '@angular/core';
import { trigger, query, stagger, animate, style, transition } from '@angular/animations';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { environment } from 'src/environments/environment';
import { ContactService } from 'src/app/services/data/contract.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger("animateFooter", [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateY(100%)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {
  siteKey: string = environment.recaptchaSiteKey;
  recaptchaToken: string;
  message: string;
  messageClass: string;
  contactFooterForm: FormGroup;
  language: string;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.loadReCaptchaScript();
    this.contactFooterForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      country: [' '],
      city: [' '],
      phone: [' '],
      subject: ['رسالة سريعة من الموقع']
    });
    this.language = localStorage.getItem("Language");
    console.log(this.contactFooterForm.invalid);
    console.log(this.contactFooterForm.get('name').errors);
    console.log(this.contactFooterForm.get('email').errors);
    console.log(this.contactFooterForm.get('message').errors);
  }

  loadReCaptchaScript(): void {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  onFooterFormSubmit(): void {
    
    if (this.contactFooterForm.valid && this.recaptchaToken) {
      this.recaptchaToken='';
      const formData = this.contactFooterForm.value;
      formData.phone = ' ';
      formData.country = ' ';
      formData.phone = ' ';
      formData.subject =  'رسالة سريعة من الموقع';
      console.log(formData);
      this.contactService.sendContactForm(formData).subscribe(
        response => {
          this.language === "en" ? this.message = 'Message sent successfully' : this.message = 'تم إرسال الرسالة بنجاح';
          this.messageClass = 'alert-success';
          this.contactFooterForm.reset();
        },
        error => {
          this.language === "en" ? this.message = 'Error sending message' : this.message = 'حدث خطأ أثناء إرسال الرسالة';
          this.messageClass = 'alert-danger';
        }
      );
    } else {
      console.log("not working");
      this.language === "en" ? this.message = 'Please fill out the entire form correctly and solve the captcha.' : this.message = 'من فضلك أدخل جميع البيانات وقم بحل كلمة التحقق';
      this.messageClass = 'alert-warning';
    }
  }

  onFooterCaptchaResolved(captchaResponse: string): void {
    this.recaptchaToken = captchaResponse;
  }
}
