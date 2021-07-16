import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides,ActionSheetController, Platform, AlertController  } from '@ionic/angular';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute } from '@angular/router';
import { DonneesService } from '../donnees.service';
@Component({
  selector: 'app-detail-riad',
  templateUrl: './detail-riad.page.html',
  styleUrls: ['./detail-riad.page.scss'],
})
export class DetailRiadPage implements OnInit {
  public url:string="/riads/";
  public picture;
  public riads;
  public riad=[];

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  sliderOne: any;
  

  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(private service:DataServiceService,
    private route: ActivatedRoute, public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private platform: Platform, private data:DonneesService) { 

     
     //Item object for Nature
     this.sliderOne =
     {
       isBeginningSlide: true,
       isEndSlide: false,
       slidesItems: [
         {
           id: 995
         },
         {
           id: 925
         },
         {
           id: 940
         },
         {
           id: 943
         },
         {
           id: 944
         }
       ]
     };
  }
//Move to Next slide
slideNext(object, slideView) {
  slideView.slideNext(500).then(() => {
    this.checkIfNavDisabled(object, slideView);
  });
}

//Move to previous slide
slidePrev(object, slideView) {
  slideView.slidePrev(500).then(() => {
    this.checkIfNavDisabled(object, slideView);
  });;
}

//Method called when slide is changed by drag or navigation
SlideDidChange(object, slideView) {
  this.checkIfNavDisabled(object, slideView);
}

//Call methods to check if slide is first or last to enable disbale navigation  
checkIfNavDisabled(object, slideView) {
  this.checkisBeginning(object, slideView);
  this.checkisEnd(object, slideView);
}

checkisBeginning(object, slideView) {
  slideView.isBeginning().then((istrue) => {
    object.isBeginningSlide = istrue;
  });
}
checkisEnd(object, slideView) {
  slideView.isEnd().then((istrue) => {
    object.isEndSlide = istrue;
  });}
  ngOnInit() {
    const id= +this.route.snapshot.paramMap.get('id');
      this.riad=this.data.riads
      this.riad=this.riad.find(fruit => fruit.id === id);
      console.log(this.riad);
    }
}
