import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  wantPremium: string = "";
  totalSeatCount: string = '0';
  enableBook: boolean = false;
  isBook: boolean = true;
  row: number = 5;
  collum: number = 24;
  // allSeats:any
  PremiumSeats: any;
  StandardSeats: any;
  selectedPremiumSeats: any;
  selectedStandardSeats: any;
  rows: { PremiumSeats: string[], StandardSeats: string[] } = { PremiumSeats: ["A", "B", "C", "D", "E"], StandardSeats: ["F", "G", "H", "I", "J"] };
  selectedSeatCountForLeftPrimium: number = 0;
  selectedSeatCountForMidiumPrimium: number = 0;
  selectedSeatCountForRightPrimium: number = 0;
  selectedSeatCountForLeftStanderd: number = 0;
  selectedSeatCountForMidiumStanderd: number = 0;
  selectedSeatCountForRightStanderd: number = 0;

  left: number = 5
  right: number = 19
  constructor(private bookingService: BookingService,

  ) {

  }

  ngOnInit() {
    this.getAllSeats();
    // if(this.bookingService.getTableMatrix("selectedPremiumSeats",this.selectedPremiumSeats) == undefined ){
    //   this.selectedPremiumSeats = new Array(this.row)
    //   .fill(false)
    //   .map(() =>
    //     new Array(this.collum).fill(false)
    //   );
    // }else{
    this.PremiumSeats = this.bookingService.getTableMatrix("selectedPremiumSeats")

    // }
    // if(this.bookingService.getTableMatrix("selectedStandardSeats",this.selectedStandardSeats) == undefined ){
    //   this.selectedStandardSeats = new Array(this.row)
    //   .fill(false)
    //   .map(() =>
    //     new Array(this.collum).fill(false)
    //   );
    // }else{
    this.StandardSeats = this.bookingService.getTableMatrix("selectedStandardSeats")
    // }
    this.selectedPremiumSeats = this.bookingService.getTableMatrix("selectedPremiumSeats")
    this.selectedStandardSeats = this.bookingService.getTableMatrix("selectedStandardSeats")

    console.log(this.selectedPremiumSeats, "selectedPremiumSeats");
    console.log(this.selectedStandardSeats, "selectedStandardSeats");
    console.log(this.PremiumSeats, "PremiumSeats");
    console.log(this.StandardSeats, "StandardSeats");
  }




  getAllSeats() {

    // console.log(this.selectedStandardSeats,"selectedStandardSeats...updated");
    // // this.bookingService.getMatrix().subscribe((data: any) => {
    // this.selectedPremiumSeats = new Array(this.row)
    //   .fill(false)
    //   .map(() =>
    //     new Array(this.collum).fill(false)
    //   );
    // // console.log(this.selectedPremiumSeats, "this.allSeats..................");

    // this.selectedStandardSeats = new Array(this.row)
    //   .fill(false)
    //   .map(() =>
    //     new Array(this.collum).fill(false)
    //   );
    // console.log(this.selectedStandardSeats, "this.allSeats..................");
    // }) 
    // this.selectedPremiumSeats = this.PremiumSeats;
    // this.selectedStandardSeats = this.StandardSeats;
    // console.log(this.selectedPremiumSeats,"selectedPremiumSeats");
    // console.log(this.selectedStandardSeats,"selectedStandardSeats");
    // console.log(this.PremiumSeats,"PremiumSeats");
    // console.log(this.StandardSeats,"StandardSeats");


  }


  seatSelectedPremium(i: number, j: number,property:any) {
    console.log(i, j, "premium");
    // if(this.PremiumSeats[i][j] == true){
    //   this.selectedPremiumSeats[i][j] == true
    // }
    


    if (this.wantPremium === "t") {

      if (j < this.left) {

         if (this.wantPremium = "t") {
        if (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium >= parseInt(this.totalSeatCount)) {
          this.selectedSeatCountForLeftPrimium = 0;
          this.selectedSeatCountForMidiumPrimium = 0;
          this.selectedSeatCountForRightPrimium = 0;
          this.selectedPremiumSeats = this.bookingService.getTableMatrix("selectedPremiumSeats")
          this.enableBook = false;
        }
        if (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium < parseInt(this.totalSeatCount)) {
          for (let k = j; (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium < parseInt(this.totalSeatCount)) && (k < this.left); k++) {
            console.log(this.selectedPremiumSeats[i][k], "sssssss11111ssssss");
            console.log(k, "kkkkkkkkkkkkkkkkkkk if(j<this.left)");

            if (this.selectedPremiumSeats[i][k] === false) {
              this.selectedPremiumSeats[i][k] = true;
              this.selectedSeatCountForLeftPrimium++;

            } 
            else {
              return
            }
          }
        }

         }else{
          return
         }

        //   if(this.wantPremium ="t"){
        //     if (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd >= parseInt(this.totalSeatCount)) {
        //      this.selectedSeatCountForLeftStanderd = 0;
        //       this.selectedSeatCountForMidiumStanderd = 0;
        //       this.selectedSeatCountForRightStanderd = 0;
       // this.selectedStandardSeats = this.bookingService.getTableMatrix("selectedStandardSeats")

        //       this.enableBook = false;
        //   }
        //   if(this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd < parseInt(this.totalSeatCount)){


        //   for (let k = j; (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd < parseInt(this.totalSeatCount)) && (k < this.left); k++) {
        //     console.log(this.selectedStandardSeats[i][k], "sssssss11111ssssss");

        //     if (this.selectedStandardSeats[i][k] === false) {
        //       this.selectedStandardSeats[i][k] = true;
        //       this.selectedSeatCountForLeftStanderd++;

        //     } else {
        //       return
        //     }
        //   }
        // }
        // }
      }

    }else{
      return
    }

    if (this.wantPremium = "t") {

      if (j >= this.left && j < this.right) {

        if (this.wantPremium = "t") {
        if (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium >= parseInt(this.totalSeatCount)) {
          this.selectedSeatCountForLeftPrimium = 0;
          this.selectedSeatCountForMidiumPrimium = 0;
          this.selectedSeatCountForRightPrimium = 0;
          // this.selectedSeatCountForLeftStanderd = 0;
          // this.selectedSeatCountForMidiumStanderd = 0;
          // this.selectedSeatCountForRightStanderd = 0;
          // if(this.bookingService.getTableMatrix("selectedPremiumSeats") == undefined ){
          //   this.selectedPremiumSeats = new Array(this.row)
          //   .fill(false)
          //   .map(() =>
          //     new Array(this.collum).fill(false)
          //   );
          // }else{
          this.selectedPremiumSeats = this.bookingService.getTableMatrix("selectedPremiumSeats")
          // }
          this.enableBook = false;
        }
        if (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium < parseInt(this.totalSeatCount)) {
          for (let k = j; (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium < parseInt(this.totalSeatCount)) && (k < this.right); k++) {
            console.log(this.selectedPremiumSeats[i][k], "sssssss11111ssssss");
            console.log(k, "kkkkkkkkkkkkkkkkkkk if(j>=this.left && j<this.right)");

            if (this.selectedPremiumSeats[i][k] === false) {
              this.selectedPremiumSeats[i][k] = true;
              this.selectedSeatCountForMidiumPrimium++;

            } else {
              return
            }
          }
        }

          }else{
            return
          }

        //   if(this.wantPremium ="t"){
        //     if (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd >= parseInt(this.totalSeatCount)) {
        //      this.selectedSeatCountForLeftStanderd = 0;
        //       this.selectedSeatCountForMidiumStanderd = 0;
        //       this.selectedSeatCountForRightStanderd = 0;
        //       this.enableBook = false;
        //   }
        //   if(this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd < parseInt(this.totalSeatCount)){


        //   for (let k = j; (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd < parseInt(this.totalSeatCount)) && (k < this.right); k++) {
        //     console.log(this.selectedStandardSeats[i][k], "sssssss11111ssssss");

        //     if (this.selectedStandardSeats[i][k] === false) {
        //       this.selectedStandardSeats[i][k] = true;
        //       this.selectedSeatCountForLeftStanderd++;

        //     } else {
        //       return
        //     }
        //   }
        // }
        // }





      }

    }else{
      return
    }

    if (this.wantPremium = "t") {

      if (j >= this.right && j < this.collum) {

          if (this.wantPremium = "t") {
        if (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium >= parseInt(this.totalSeatCount)) {
          this.selectedSeatCountForLeftPrimium = 0;
          this.selectedSeatCountForMidiumPrimium = 0;
          this.selectedSeatCountForRightPrimium = 0;
          this.selectedPremiumSeats = this.bookingService.getTableMatrix("selectedPremiumSeats")
          this.enableBook = false;
        }
        if (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium < parseInt(this.totalSeatCount)) {
          for (let k = j; (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium < parseInt(this.totalSeatCount)) && (k < this.collum); k++) {
            console.log(this.selectedPremiumSeats[i][k], "sssssss11111ssssss");
            console.log(k, "kkkkkkkkkkkkkkkkkkk if(j>=this.right && j<this.collum)");

            if (this.selectedPremiumSeats[i][k] === false) {
              this.selectedPremiumSeats[i][k] = true;
              this.selectedSeatCountForRightPrimium++;

            } else {
              return
            }
          }
        }

          }else{
            return
          }

        //   if(this.wantPremium ="t"){
        //     if (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd >= parseInt(this.totalSeatCount)) {
        //      this.selectedSeatCountForLeftStanderd = 0;
        //       this.selectedSeatCountForMidiumStanderd = 0;
        //       this.selectedSeatCountForRightStanderd = 0;
        //       this.enableBook = false;
        //   }
        //   if(this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd < parseInt(this.totalSeatCount)){


        //   for (let k = j; (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd < parseInt(this.totalSeatCount)) && (k < this.collum); k++) {
        //     console.log(this.selectedStandardSeats[i][k], "sssssss11111ssssss");

        //     if (this.selectedStandardSeats[i][k] === false) {
        //       this.selectedStandardSeats[i][k] = true;
        //       this.selectedSeatCountForLeftStanderd++;

        //     } else {
        //       return
        //     }
        //   }
        // }
        // }
      }
    }else{
      return
    }


    // if (this.wantPremium = "t") {
      if (parseInt(this.totalSeatCount) > 0) {
        if (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium === parseInt(this.totalSeatCount)) {
          this.enableBook = true;
        }
      }
    // }
    //console.log(this.totalSeatCount, "ppppppppppppppppp");


 
}

  seatSelectedStandard(i: number, j: number,property:any) {
    console.log(i, j, "standard");

    console.log(this.StandardSeats, "StandardSeats");
    // console.log(this.selectedStandardSeats, "selectedStandardSeats");

  


    if (this.wantPremium = "f") {

      if (j < this.left) {

        // if (this.wantPremium = "f") {
        //   if (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium >= parseInt(this.totalSeatCount)) {
        //     this.selectedSeatCountForLeftPrimium = 0;
        //     this.selectedSeatCountForMidiumPrimium = 0;
        //     this.selectedSeatCountForRightPrimium = 0;
        //     // this.selectedSeatCountForLeftStanderd = 0;
        //     // this.selectedSeatCountForMidiumStanderd = 0;
        //     // this.selectedSeatCountForRightStanderd = 0;
        //     this.enableBook = false;
        //   }
        //   if (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium < parseInt(this.totalSeatCount)) {
        //     for (let k = j; (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium < parseInt(this.totalSeatCount)) && (k < this.left); k++) {
        //       console.log(this.selectedPremiumSeats[i][k], "sssssss11111ssssss");

        //       if (this.selectedPremiumSeats[i][k] === false) {
        //         this.selectedPremiumSeats[i][k] = true;
        //         this.selectedSeatCountForLeftPrimium++;

        //       } else {
        //         return
        //       }
        //     }
        //   }

        // }

        if(this.wantPremium ="f"){
        if (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd >= parseInt(this.totalSeatCount)) {
          this.selectedSeatCountForLeftStanderd = 0;
          this.selectedSeatCountForMidiumStanderd = 0;
          this.selectedSeatCountForRightStanderd = 0;
          this.selectedStandardSeats = this.bookingService.getTableMatrix("selectedStandardSeats")
          this.enableBook = false;
        }
        if (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd < parseInt(this.totalSeatCount)) {
          for (let k = j; (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd < parseInt(this.totalSeatCount)) && (k < this.left); k++) {
            console.log(this.selectedStandardSeats[i][k], "sssssss11111ssssss");

            if (this.selectedStandardSeats[i][k] === false) {
              this.selectedStandardSeats[i][k] = true;
              this.selectedSeatCountForLeftStanderd++;

            } else {
              return
            }
          }
        }
        }else{
          return
        }
      }
    }else{ return }

    if (this.wantPremium = "f") {


      if (j >= this.left && j < this.right) {

        // if (this.wantPremium = "f") {
        //   if (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium >= parseInt(this.totalSeatCount)) {
        //     this.selectedSeatCountForLeftPrimium = 0;
        //     this.selectedSeatCountForMidiumPrimium = 0;
        //     this.selectedSeatCountForRightPrimium = 0;
        //     // this.selectedSeatCountForLeftStanderd = 0;
        //     // this.selectedSeatCountForMidiumStanderd = 0;
        //     // this.selectedSeatCountForRightStanderd = 0;
        //     this.enableBook = false;
        //   }
        //   if (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium < parseInt(this.totalSeatCount)) {
        //     for (let k = j; (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium < parseInt(this.totalSeatCount)) && (k < this.right); k++) {
        //       console.log(this.selectedPremiumSeats[i][k], "sssssss11111ssssss");

        //       if (this.selectedPremiumSeats[i][k] === false) {
        //         this.selectedPremiumSeats[i][k] = true;
        //         this.selectedSeatCountForLeftPrimium++;

        //       } else {
        //         return
        //       }
        //     }
        //   }

        // }

         if(this.wantPremium ="f"){
        if (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd >= parseInt(this.totalSeatCount)) {
          this.selectedSeatCountForLeftStanderd = 0;
          this.selectedSeatCountForMidiumStanderd = 0;
          this.selectedSeatCountForRightStanderd = 0;
          this.selectedStandardSeats = this.bookingService.getTableMatrix("selectedStandardSeats")

          this.enableBook = false;
        }
        if (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd < parseInt(this.totalSeatCount)) {
          for (let k = j; (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd < parseInt(this.totalSeatCount)) && (k < this.right); k++) {
            console.log(this.selectedStandardSeats[i][k], "sssssss11111ssssss");

            if (this.selectedStandardSeats[i][k] === false) {
              this.selectedStandardSeats[i][k] = true;
              this.selectedSeatCountForMidiumStanderd++;

            } else {
              return
            }
          }
        }
         }else{
          return
         }





      }
    }else{ return  }

    if (this.wantPremium = "f") {


      if (j >= this.right && j < this.collum) {

        // if (this.wantPremium = "f") {
        //   if (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium >= parseInt(this.totalSeatCount)) {
        //     this.selectedSeatCountForLeftPrimium = 0;
        //     this.selectedSeatCountForMidiumPrimium = 0;
        //     this.selectedSeatCountForRightPrimium = 0;
        //     // this.selectedSeatCountForLeftStanderd = 0;
        //     // this.selectedSeatCountForMidiumStanderd = 0;
        //     // this.selectedSeatCountForRightStanderd = 0;
        //     this.enableBook = false;
        //   }
        //   if (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium < parseInt(this.totalSeatCount)) {
        //     for (let k = j; (this.selectedSeatCountForLeftPrimium + this.selectedSeatCountForMidiumPrimium + this.selectedSeatCountForRightPrimium < parseInt(this.totalSeatCount)) && (k < this.collum); k++) {
        //       console.log(this.selectedPremiumSeats[i][k], "sssssss11111ssssss");

        //       if (this.selectedPremiumSeats[i][k] === false) {
        //         this.selectedPremiumSeats[i][k] = true;
        //         this.selectedSeatCountForLeftPrimium++;

        //       } else {
        //         return
        //       }
        //     }
        //   }

        // }

           if(this.wantPremium ="f"){
        if (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd >= parseInt(this.totalSeatCount)) {
          this.selectedSeatCountForLeftStanderd = 0;
          this.selectedSeatCountForMidiumStanderd = 0;
          this.selectedSeatCountForRightStanderd = 0;
          this.selectedStandardSeats = this.bookingService.getTableMatrix("selectedStandardSeats")
          this.enableBook = false;
        }
        if (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd < parseInt(this.totalSeatCount)) {
          for (let k = j; (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd < parseInt(this.totalSeatCount)) && (k < this.collum); k++) {
            console.log(this.selectedStandardSeats[i][k], "sssssss11111ssssss");
            console.log(k, "kkkkkkkkkkkkkkkkkkkif(j>=this.right && j<this.collum)");

            if (this.selectedStandardSeats[i][k] === false) {
              this.selectedStandardSeats[i][k] = true;
              this.selectedSeatCountForRightStanderd++;

            } else {
              return
            }
          }
        }
         }else{
          return
         }
      }

    }else{ return  }

    // if (this.wantPremium = "f") {
      if (parseInt(this.totalSeatCount) > 0) {
        if (this.selectedSeatCountForLeftStanderd + this.selectedSeatCountForMidiumStanderd + this.selectedSeatCountForRightStanderd === parseInt(this.totalSeatCount)) {
          this.enableBook = true;
        }
      }
    // }

    //     selectedSeatCountForLeftStanderd: number = 0;
    // selectedSeatCountForMidiumStanderd: number = 0;
    // selectedSeatCountForRightStanderd: number = 0;

    // console.log(this.selectedStandardSeats,"selectedStandardSeats");
    // if(this.StandardSeats[i][j] == true){
    //   this.selectedStandardSeats[i][j] == true
    // }
    // console.log(this.selectedStandardSeats,"selectedStandardSeats...updated");
    // console.log(this.StandardSeats, "StandardSeats....updated");
    // console.log(this.selectedStandardSeats, "selectedStandardSeats...updated");


    // console.log(this.totalSeatCount, "sssssssssss");

 
}



  onBook() {
    console.log(this.selectedPremiumSeats, "selectedPremiumSeats");
    console.log(this.selectedStandardSeats, "selectedStandardSeats");
    console.log(this.PremiumSeats, "PremiumSeats");
    console.log(this.StandardSeats, "StandardSeats");

    alert("you have booked total" + this.totalSeatCount + "seats")
    // this.isBook = false;
    this.enableBook = false;
    this.wantPremium = "";
    this.totalSeatCount = '0';
    this.selectedSeatCountForLeftPrimium = 0;
    this.selectedSeatCountForMidiumPrimium = 0;
    this.selectedSeatCountForRightPrimium = 0;
    this.selectedSeatCountForLeftStanderd = 0;
    this.selectedSeatCountForMidiumStanderd = 0;
    this.selectedSeatCountForRightStanderd = 0;
    location.reload();

    console.log(this.selectedPremiumSeats, "selectedPremiumSeats111111111");
    console.log(this.selectedStandardSeats, "selectedStandardSeats222222222222");

    // localStorage.getItem('selectedPremiumSeats', JSON.stringify(this.selectedPremiumSeats))
    // localStorage.getItem('selectedStandardSeats', JSON.stringify(this.selectedStandardSeats))

    if (this.bookingService.getTableMatrix("selectedPremiumSeats") !== null && this.bookingService.getTableMatrix("selectedPremiumSeats") !== null) {
      // localStorage.clear();
      this.bookingService.addTableMatrix(this.selectedPremiumSeats, 'selectedPremiumSeats');
      this.bookingService.addTableMatrix(this.selectedStandardSeats, 'selectedStandardSeats');

    }

  }


  reset() {


  }
}
