import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';




@Component({
  moduleId:module.id,
  templateUrl: 'passage.id.html',
})

export class PassageID
{

 
   id;
   
   constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router,
               ){
   }

   
   /* Using snapshot */
   ngOnInit() {
       this.id=this._Activatedroute.snapshot.params['id'];
       
   }
   

   onBack(): void {
      
   }

   /* Using Subscribe */
   /*
   sub;

   ngOnInit() {

      this.sub=this._Activatedroute.params.subscribe(params => { 
          this.id = params['id']; 
          let products=this._productService.getProducts();
          this.product=products.find(p => p.productID==this.id);    
      
      });
   }

   ngOnDestroy() {
     this.sub.unsubscribe();
   }
   */

}