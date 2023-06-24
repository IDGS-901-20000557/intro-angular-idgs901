import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  alumnoTitle!:string;

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }
alumnosIric:IAlumnosIric[]=[
  {
    matricula:20000557,
    nombre:'Claudio',
    edad:21,
    correo: "claudioracoon@hotmail.com",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Mick-Jagger-1965b.jpg/220px-Mick-Jagger-1965b.jpg",
    calif: 6.2
},
{
  matricula:20000558,
  nombre:'Keith',
  edad: 30,
  correo: "keith@hotmail.com",
  foto: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2010/10/18/1287422390230/Keith-Richards-007.jpg?width=465&quality=85&dpr=1&s=none",
  calif: 7.5
},
{
  matricula:20000559,
  nombre:'Brian',
  edad: 27,
  correo: "brian@hotmail.com",
  foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/08153831/Brian-Jones-Teleshow.jpg",
  calif: 10
}
]

onCalificaClick(message:string){
 this.alumnoTitle=`alumnos ${message}`;
}
}
