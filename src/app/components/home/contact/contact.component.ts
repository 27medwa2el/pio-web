import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('branchAnimation', [
      state('void', style({
        opacity: 0,
        height: '0px',
        overflow: 'hidden',
        display: 'none'
      })),
      state('*', style({
        opacity: 1,
        height: '*',
        overflow: 'visible',
        display: 'flex'
      })),
      transition('void => *', [
        style({ opacity: 0, height: '0px' }),
        animate('0.5s ease-out')
      ]),
      transition('* => void', [
        animate('0.5s ease-in', style({
          opacity: 0,
          height: '0px'
        }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  showBranches = false;
  language: string;
  branches = [];

  constructor(private translate: TranslateService,
              public analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this.language = localStorage.getItem("language");
    if (this.language === "en") {
      this.branches = [
        {
          name: 'Head Office',
          location: '6 El Imam Ali Helioplies',
          phones: ['19973'],
          mapLink: 'https://maps.app.goo.gl/2PrXS6nrX7htx3bx8'
        },
        {
          name: 'Asyut',
          location: '74 - Mahmoud Rashwan Street - in front of the Azhar Institute - Assiut - Assiut',
          phones: ['0882059916', '0882059903'],
          mapLink: 'https://maps.app.goo.gl/uBdAgC9Xeby7UU9A7'
        },
        {
          name: 'Sheikh Zayed',
          location: 'Galleria Mall - 26th of July Compound (Beside Zayed 2 Entrance) - Unit 307 East Bldg., 3rd Floor, Giza Governorate',
          phones: ['02-26710057', '02-26710053'],
          mapLink: 'https://maps.app.goo.gl/Lhzvwnr1w6EYdfBo9'
        },
        {
          name: 'Mansoura',
          location: 'tanzim ali ebn abu taleeb (In Front Of El Dakahleya Governorate Bldg.),3rd Floor',
          phones: ['050-2307905', '050-2307902', '050-2307901'],
          mapLink: 'https://maps.app.goo.gl/nkCEpsABgmydH82r5'
        },
        {
          name: 'Dokki',
          location: '6 wezart el-zeraa st , city capital 1st floor , dokki , giza.',
          phones: ['202-33360022', '202-33358060', '202-33354060'],
          mapLink: 'https://maps.app.goo.gl/uHdJnDYFozEEtFjs6'
        },
        {
          name: 'Domiat',
          location: '23 building 23/4 Central District - New Damietta',
          phones: ['057-2407616', '057-2407011'],
          mapLink: 'https://maps.app.goo.gl/rc7YMfHKoKRd5PGi8'
        },
        {
          name: 'Stanly',
          location: '10 Mostafa Lotfy El Manfalouty St., Ground Floor, Alexandria Governorate',
          phones: ['5225426', '5225425', '5225424'],
          mapLink: 'https://maps.app.goo.gl/ztkXvKhxnHN6efdw9'
        },
        {
          name: 'Heliopoles',
          location: '103 El Thawra St., Ard El Golf - (Top QNB BANK) - First Floor - Cairo',
          phones: ['202-24190126', '202-24190211', '202-24199135'],
          mapLink: 'https://maps.app.goo.gl/xk2usbJ3WroRRkfFA'
        },
        {
          name: 'Menoufia',
          location: 'Sharaf Square, Diwan Tower, 2nd floor, Shebin El-Kom, Menoufia',
          phones: ['0482227911', '0482227912', '0482227914', '0482227916'],
          mapLink: 'https://maps.google.com/maps?ll=30.56025,31.01091&z=16&t=m&hl=ar&gl=US&mapclient=embed&q=30%C2%B033%2736.9%22N%2031%C2%B000%2739.3%22E%2030.560250%2C%2031.010917@30.56025,31.0109167'
        },
        {
          name: 'New Cairo',
          location: '5th floor, Cairo Business Plaza A424, City Services Center, Sector 6, North Teseen Street, Fifth Settlement - New Cairo',
          phones: ['028139363', '028139365', '028139367', '028139370'],
          mapLink: 'https://maps.google.com/maps?ll=30.028417,31.48775&z=15&t=m&hl=en&gl=US&mapclient=embed'
        }
      ];
    } else {
      this.branches = [
        {
          name: 'المقر الرئيسي',
          location: '6 شارع الإمام علي، مصر الجديدة',
          phones: ['19973'],
          mapLink: 'https://www.google.com/maps?q=6+شارع+الإمام+علي+مصر+الجديدة'
        },
        {
          name: 'أسيوط',
          location: '74 شارع محمود رشوان - أمام معهد الأزهر - أسيوط',
          phones: ['0882059916', '0882059903'],
          mapLink: 'https://maps.app.goo.gl/uBdAgC9Xeby7UU9A7'
        },
        {
          name: 'الشيخ زايد',
          location: 'جاليريا مول - مجمع 26 يوليو (بجوار مدخل زايد 2) - وحدة 307 المبنى الشرقي، الطابق الثالث، محافظة الجيزة',
          phones: ['02-26710057', '02-26710053'],
          mapLink: 'https://maps.app.goo.gl/Lhzvwnr1w6EYdfBo9'
        },
        {
          name: 'المنصورة',
          location: 'تنظيم علي ابن أبي طالب (أمام مبنى محافظة الدقهلية)، الطابق الثالث',
          phones: ['050-2307905', '050-2307902', '050-2307901'],
          mapLink: 'https://maps.app.goo.gl/nkCEpsABgmydH82r5'
        },
        {
          name: 'الدقي',
          location: '6 شارع وزارة الزراعة، كابيتال سيتي، الطابق الأول، الدقي، الجيزة',
          phones: ['202-33360022', '202-33358060', '202-33354060'],
          mapLink: 'https://maps.app.goo.gl/uHdJnDYFozEEtFjs6'
        },
        {
          name: 'دمياط',
          location: '23 مبنى 23/4 المنطقة المركزية - دمياط الجديدة',
          phones: ['057-2407616', '057-2407011'],
          mapLink: 'https://maps.app.goo.gl/rc7YMfHKoKRd5PGi8'
        },
        {
          name: 'ستانلي',
          location: '10 شارع مصطفى لطفي المنفلوطي، الطابق الأرضي، محافظة الإسكندرية',
          phones: ['5225426', '5225425', '5225424'],
          mapLink: 'https://maps.app.goo.gl/ztkXvKhxnHN6efdw9'
        },
        {
          name: 'هليوبوليس',
          location: '103 شارع الثورة، أرض الجولف - (أعلى بنك QNB) - الطابق الأول - القاهرة',
          phones: ['202-24190126', '202-24190211', '202-24199135'],
          mapLink: 'https://maps.app.goo.gl/xk2usbJ3WroRRkfFA'
        },
        {
          name: 'المنوفية',
          location: 'ميدان شرف، برج الديوان، الطابق الثاني، شبين الكوم، المنوفية',
          phones: ['0482227911', '0482227912', '0482227914', '0482227916'],
          mapLink: 'https://maps.google.com/maps?ll=30.56025,31.01091&z=16&t=m&hl=ar&gl=US&mapclient=embed&q=30%C2%B033%2736.9%22N%2031%C2%B000%2739.3%22E%2030.560250%2C%2031.010917@30.56025,31.0109167'
        },
        {
          name: 'القاهرة الجديدة',
          location: 'الطابق الخامس، بلازا القاهرة للأعمال A424، مركز خدمات المدينة، القطاع 6، شارع التسعين الشمالي، التجمع الخامس - القاهرة الجديدة',
          phones: ['028139363', '028139365', '028139367', '028139370'],
          mapLink: 'https://maps.google.com/maps?ll=30.028417,31.48775&z=15&t=m&hl=en&gl=US&mapclient=embed'
        }
      ];
    }
  }

  toggleBranches() {
    this.showBranches = !this.showBranches;
  }

  openMap(mapLink: string) {
    window.open(mapLink, '_blank');
  }
}
