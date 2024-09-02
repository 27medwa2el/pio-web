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
  };
  purposes: string[] = [];
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
      subject: ['', Validators.required],
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
    this.language = localStorage.getItem("language");
    this.purposes = localStorage.getItem("language") == "ar" ? [ 'شكوى',   
      'اقتراح',  
      'طلب',     
      'أخرى'     
    ] : [ 'Complaint',
      'Suggestion', 
      'Request',    
      'Other'    
    ];
    this.cities = localStorage.getItem("language") === "en" ? {
      'Egypt': ['Cairo', 'Alexandria', 'Giza', 'Shubra El Kheima', 'Port Said', 'Suez', 'Luxor', 'Mansoura', 'Tanta', 'Asyut', 'Ismailia', 'Faiyum', 'Zagazig', 'Damietta', 'Damanhur', 'Aswan', 'Minya', 'Beni Suef', 'Qena', 'Sohag'],
      'Saudi Arabia': ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam', 'Khobar', 'Taif', 'Tabuk', 'Buraidah', 'Khamis Mushait', 'Hofuf', 'Al Jubail', 'Najran', 'Abha', 'Yanbu', 'Al Qatif', 'Al Khafji'],
      'United Arab Emirates': ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'],
      'Qatar': ['Doha', 'Al Rayyan', 'Umm Salal', 'Al Khor', 'Al Wakrah'],
      'Kuwait': ['Kuwait City', 'Al Ahmadi', 'Hawalli', 'Farwaniya', 'Jahra'],
      'Oman': ['Muscat', 'Salalah', 'Sohar', 'Nizwa', 'Sur'],
      'Bahrain': ['Manama', 'Riffa', 'Muharraq', 'Hamad Town', 'Isa Town'],
      'Jordan': ['Amman', 'Zarqa', 'Irbid', 'Aqaba', 'Madaba'],
      'Lebanon': ['Beirut', 'Tripoli', 'Sidon', 'Tyre', 'Byblos'],
      'Morocco': ['Casablanca', 'Rabat', 'Fes', 'Marrakesh', 'Tangier'],
      'Algeria': ['Algiers', 'Oran', 'Constantine', 'Annaba', 'Blida'],
      'Tunisia': ['Tunis', 'Sfax', 'Sousse', 'Kairouan', 'Bizerte']
    } : {
      'مصر': ['القاهرة', 'الإسكندرية', 'الجيزة', 'شبرا الخيمة', 'بورسعيد', 'السويس', 'الأقصر', 'المنصورة', 'طنطا', 'أسيوط', 'الإسماعيلية', 'الفيوم', 'الزقازيق', 'دمياط', 'دمنهور', 'أسوان', 'المنيا', 'بني سويف', 'قنا', 'سوهاج'],
      'السعودية': ['الرياض', 'جدة', 'مكة', 'المدينة', 'الدمام', 'الخبر', 'الطائف', 'تبوك', 'بريدة', 'خميس مشيط', 'الهفوف', 'الجبيل', 'نجران', 'أبها', 'ينبع', 'القطيف', 'الخفجي'],
      'الإمارات': ['أبو ظبي', 'دبي', 'الشارقة', 'عجمان', 'الفجيرة', 'رأس الخيمة', 'أم القيوين'],
      'قطر': ['الدوحة', 'الريان', 'أم صلال', 'الخور', 'الوكرة'],
      'الكويت': ['مدينة الكويت', 'الأحمدي', 'حولي', 'الفروانية', 'الجهراء'],
      'عمان': ['مسقط', 'صلالة', 'صحار', 'نزوى', 'صور'],
      'البحرين': ['المنامة', 'الرفاع', 'المحرق', 'مدينة حمد', 'مدينة عيسى'],
      'الأردن': ['عمان', 'الزرقاء', 'إربد', 'العقبة', 'مادبا'],
      'لبنان': ['بيروت', 'طرابلس', 'صيدا', 'صور', 'جبيل'],
      'المغرب': ['الدار البيضاء', 'الرباط', 'فاس', 'مراكش', 'طنجة'],
      'الجزائر': ['الجزائر', 'وهران', 'قسنطينة', 'عنابة', 'البليدة'],
      'تونس': ['تونس', 'صفاقس', 'سوسة', 'القيروان', 'بنزرت']
    };
    
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
