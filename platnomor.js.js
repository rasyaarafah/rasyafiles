let PlateNumber = ['B 1724 TKB', 'B 9727 AQX', 'B 6775 LKZ'];
 
 let TodaysDate = 11;
 
 PlateNumber.forEach(function(Plate) {
     let Number = Plate.split(' ')[1]; 
     let LastNumber = Number[Number.length - 1]; 
     let jenisPlat = '';
 
     switch (LastNumber) {
         case '0':
         case '2':
         case '4':
         case '6':
         case '8':
             PlateType = 'EVEN';
             break;
         case '1':
         case '3':
         case '5':
         case '7':
         case '9':
             PlateType = 'ODD';
             break;
         default:
             console.log(`${plat} Invalid`);
             return;
     }
 
 
     let DateType = (TodaysDate % 2 === 0) ? 'EVEN' : 'ODD';

     let CanPass = (PlateType === DateType) ? 'CAN' : 'CANNOT';

     console.log(`${Plate} Is Plate ${PlateType} Then ${CanPass} Pass Because The Date Is ${TodaysDate}`);
     console.log(`${Plate} Is plate ${PlateType} Then ${CanPass} Pass Because Todays Date Is ${TodaysDate}`);

    })
