import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { movies } from 'src/app/services/movies.data';
import { Movie } from 'src/app/services/movies.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies: Movie[] =movies;
  PremiumSeats:any;
  standardSeats:any;

  constructor( private bookingService:BookingService ){

  }

ngOnInit(){
 //this.getAllTable();
}

addMatrixAtLocalStorage(id:any){

  this.bookingService.getMatrix(id).subscribe((data:any)=>{
    console.log(data,"data");
    this.PremiumSeats = new Array(data.row)
      .fill(false)
      .map(() =>
        new Array(data.collum).fill(false)
      );

      this.bookingService.addTableMatrix(this.PremiumSeats,'selectedPremiumSeats');


      this.standardSeats = new Array(data.row)
      .fill(false)
      .map(() =>
        new Array(data.collum).fill(false)
      );         
      this.bookingService.addTableMatrix(this.standardSeats,'selectedStandardSeats');
                                        
    
  })

}


}