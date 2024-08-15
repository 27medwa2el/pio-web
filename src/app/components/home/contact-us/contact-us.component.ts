import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/data/contract.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  cities: { [key: string]: string[] } = {
    'Egypt': ['Cairo', 'Alexandria', 'Giza', '...'],
    'Saudi Arabia': ['Riyadh', 'Jeddah', 'Mecca', '...']
  };
  cityOptions: string[] = [];
  message: string;
  messageClass: string;
  recaptchaToken: string;
  siteKey : string;
  language : string;
  constructor(
    private router: Router,
    public analyticsService: AnalyticsService,
    private contactService: ContactService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      message: ['', Validators.required]
    });

    this.contactForm.get('country').valueChanges.subscribe(selectedCountry => {
      this.cityOptions = this.cities[selectedCountry] || [];
      this.contactForm.get('city').reset();
    });
    this.siteKey = environment.recaptchaSiteKey;
    this.loadReCaptchaScript();
    this.language = localStorage.getItem("Language");
  }
  loadReCaptchaScript(): void {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
  onSubmit() {
    if (this.contactForm.valid && this.recaptchaToken) {
      const formData = this.contactForm.value;
      formData.recaptchaToken = this.recaptchaToken;

      this.contactService.sendContactForm(formData).subscribe(
        response => {
          this.message = 'Message sent successfully';
          this.messageClass = 'alert-success';
          this.contactForm.reset();
        },
        error => {
          this.message = 'Error sending message';
          this.messageClass = 'alert-danger';
        }
      );
    } else {
      this.language=="en"?this.message = 'Please fill out the entire form correctly and solve the captcha.' :this.message = 'من فضلك أدخل جميع البيانات وقم بحل كلمة التحقق';
      this.messageClass = 'alert-warning';
    }
  }

  onCaptchaResolved(captchaResponse: string) {
    this.recaptchaToken = captchaResponse;
  }
}
