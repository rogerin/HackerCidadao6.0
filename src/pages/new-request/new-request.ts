import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { Camera, CameraOptions } from '@ionic-native/camera';



@IonicPage({
  name: 'newRequest'
})
@Component({
  selector: 'page-new-request',
  templateUrl: 'new-request.html',
  providers: [
    Camera, 
    ActionSheet,
  ]
})
export class NewRequestPage {

  calendar: any;
  pictureOne: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheet: ActionSheet,
    public camera: Camera) 
    {
      this.calendar = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRequestPage');
  }


  presentActionSheet(index) {
    let buttonLabels = ['Galeria ', 'Câmera', 'Remover foto'];    
    const options: ActionSheetOptions = {
      title: 'Tente enviar fotos boas!!',
      subtitle: 'Selecione uma das opções.',
      buttonLabels: buttonLabels,
      addCancelButtonWithLabel: 'Enviar depois',
      destructiveButtonLast: true
    };
    
    this.actionSheet.show(options).then((buttonIndex: number) => {
      if(buttonIndex == 1) {
        console.log('PictureSourceType.PHOTOLIBRARY')
        this.onTakePicture(this.camera.PictureSourceType.PHOTOLIBRARY, index);
      } else if(buttonIndex == 2) {
        console.log('PictureSourceType.CAMERA')
        this.onTakePicture(this.camera.PictureSourceType.CAMERA, index);
      } else if (buttonIndex == 3) {
        switch (index) {
          case 1:
          this.pictureOne = '';
            break;
          
                
          default:
            alert('Algum erro remove imagem selecionada');
        }
      }
    });
  }
  onTakePicture(type, index) {
    const options: CameraOptions = {  
      quality: 50,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: type,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      allowEdit: true
    };

    this.camera.getPicture(options)
      .then( imageData => {

        let base64 = 'data:image/jpeg;base64,' + imageData;
          console.log(base64)
          switch (index) {
            case 1:
            this.pictureOne = base64;
              break;
            default:
              alert('Algum erro ao selecionar a imagem');
          }
        }
      )
      .catch( err => console.error ) 
  
  }


}
