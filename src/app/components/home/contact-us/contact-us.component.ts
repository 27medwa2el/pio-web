import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/data/contract.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  cities: { [key: string]: string[] } = {
    'Egypt': ['Cairo', 'Alexandria', 'Giza', 'Shubra El Kheima', 'Port Said', 'Suez', 'Mansoura', 'Tanta', 'Asyut', 'Ismailia', 'Faiyum', 'Zagazig', 'Damietta', 'Aswan', 'Minya', 'Damanhur', 'Beni Suef', 'Hurghada', 'Qena', 'Sohag', 'Shibin El Kom', 'Banha', 'Arish', 'Mallawi', '10th of Ramadan City', 'Bilqas', 'Banha', 'Marsa Matruh', '6th of October City', 'Luxor'],
    'Saudi Arabia': ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam', 'Khobar', 'Tabuk', 'Buraidah', 'Khamis Mushait', 'Hofuf', 'Al Hasa', 'Hail', 'Najran', 'Abha', 'Jizan', 'Yanbu', 'Al Jubail', 'Qatif', 'Al Kharj', 'Taif', 'Al Baha', 'Sakakah', 'Arar']
  };
  cityOptions: string[] = [];
  message: string;
  messageClass: string;

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService,
    private contactService: ContactService,
    private fb: FormBuilder
  ) { }

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
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.sendContactForm(this.contactForm.value).subscribe(
        response => {
          this.message = 'Message sent successfully'; // Or use translation service
          this.messageClass = 'alert-success';
        },
        error => {
          this.message = 'Error sending message'; // Or use translation service
          this.messageClass = 'alert-danger';
        }
      );
    } else {
      this.message = 'Please fill out the entire form correctly.'; // Or use translation service
      this.messageClass = 'alert-warning';
    }
  }
}
