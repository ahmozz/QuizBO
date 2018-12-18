import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {QuizService} from './services/quiz.service';

import { Cour } from './Cour';
import { Partie } from './Cour';
import { Quize } from './Cour';
import { Question } from './Cour';
import { Choie } from './Cour';
import { close } from 'fs';
import { Array } from 'core-js/library/web/timers';





@Component({
  moduleId:module.id,
  templateUrl: 'passage.idC.html',
})

export class PassageIDC
{

 
   id;

   cours: Cour[];
   nom: string;
   envoie: Cour;
   up_choie_text:string;
   up_choie_status:string;
   titre_a_modifier : string;
   envoie_to_add : Cour;
   _cour : Cour;
   description: string;
   upnom: string;
   updescription1: string;
   tmp : Partie;
   tmp1 : Quize;
   _cour1 : Cour; 
   tmpq:Question;
   toto:Quize;
   Qui:Quize;
   Que:Question[];
   QueTitre: string;
   up_partie_description:string;
   up_partie_titre:string;
   up_quize_niveau:string;
   up_quize_titre:string;
   up_quize_description:string;
   up_question_text:string;
   text:string;
   titi:Choie;
   tata:Question;
   part:Partie;
   listre:string[];
   comptre:number;

   
   constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router,private quizeService:QuizService
               ){
                this.comptre=0;
              this.Qui=new Quize("toto","tata","1");
              this.part=new Partie("part1","desc part1");
              this.listre=[];
              this.id=this._Activatedroute.snapshot.params['id'];
               // console.log("id :"+this.id);
                
              this.envoie=new Cour("ttto","tiii");
              this.quizeService.getCour(this.id)
                    .subscribe(tasks => {
                        this.envoie = tasks;
                    });
                    

   }


  addCour(){
    var newCour = {
        nom: this.nom,
        description: this.description
    }
    this.quizeService.addCour(newCour)
        .subscribe(task => {
            this.cours.push(task);
            this.nom = '';
            this.description = '';
        });
    }

        
    deleteCour(id){
        var cours = this.cours;

        this.quizeService.deleteCour(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < cours.length;i++){
                    if(cours[i]._id == id){
                        cours.splice(i, 1);

                    }
                }
            }
        });
    }
    
    updateCour(){

        if(this.updescription1 && this.upnom)
        {
            this._cour=new Cour(this.upnom,this.updescription1);
        }
        else if(!this.updescription1)
        {
            this._cour=new Cour(this.upnom,this.envoie.description);
        }
        else if(!this.upnom)
        {
            this._cour=new Cour(this.envoie.nom,this.updescription1);   
        }
        
        this._cour._id=this.envoie._id;
        if(this.envoie.parties)
        {
            this._cour.parties=this.envoie.parties;
       
        }
        if(this.envoie.quizes)
        {
            this._cour.quizes=this.envoie.quizes;
       
        }

 
        this.quizeService.updateCour(this._cour).subscribe(data => {
            this.quizeService.getQuize()
            .subscribe(tasks => {
                this.cours = tasks;
                 
            
            });

        });
    }
    f(cour){

        this.envoie=cour;
        this.envoie_to_add=cour;

    }
    g(cour,ti){
        this.envoie_to_add=cour;
        this.titre_a_modifier=ti;
    }
    dima(cour,ti,text){
        this.envoie_to_add=cour;
        this.titre_a_modifier=ti;
        this.text=text;
        console.log("yaaaa ");
        console.log(this.text);
    }
    addContenue()
    {
 
    this._cour=new Cour(this.envoie_to_add.nom,this.envoie_to_add.description);
    this._cour._id=this.envoie_to_add._id;
    this.tmp=new Partie(this.up_partie_titre,this.up_partie_description);
    if(this.envoie_to_add.parties)
    {
        this._cour.parties=this.envoie_to_add.parties;
        this._cour.parties.push(this.tmp);
    
    }else
    {
        this._cour.parties[0]=this.tmp;
    }


    if(this.envoie_to_add.quizes)
    {
        this._cour.quizes=this.envoie_to_add.quizes;
    }

     
     
 
     this.quizeService.addContenue(this._cour).subscribe(data => {
        this.quizeService.getQuize()
        .subscribe(tasks => {
            this.cours = tasks;
            this.up_partie_description='';
            this.up_partie_titre='';
        
        });
     });
    }

    addQuize()
    {
 
    this._cour=new Cour(this.envoie_to_add.nom,this.envoie_to_add.description);
    this._cour._id=this.envoie_to_add._id;
    this.tmp1=new Quize(this.up_quize_titre,this.up_quize_description,this.up_quize_niveau);
    if(this.envoie_to_add.quizes)
    {
        this._cour.quizes=this.envoie_to_add.quizes;
        this._cour.quizes.push(this.tmp1);
    
    }else
    {
        this._cour.quizes[0]=this.tmp1;
    }
     
    if(this.envoie_to_add.parties)
    {
        this._cour.parties=this.envoie_to_add.parties;
   
    }

     this.quizeService.addContenue(this._cour).subscribe(data => {
        this.quizeService.getQuize()
        .subscribe(tasks => {
            this.cours = tasks;
            this.up_quize_description='';
            this.up_quize_titre='';
        
        });
     });
    }

    addQuestion()
    {
 
    this._cour=new Cour(this.envoie_to_add.nom,this.envoie_to_add.description);
    this._cour._id=this.envoie_to_add._id;
    this.tmpq=new Question(this.up_question_text);
    
 var i=0;
 var j=0;
    for (let q of this.envoie_to_add.quizes ) {

        if(this.envoie_to_add.quizes[i].titre.localeCompare(this.titre_a_modifier) === 0)
        {
            j=i;
        }
        i++;
    }
    this.toto=new Quize(this.envoie_to_add.quizes[j].titre,this.envoie_to_add.quizes[j].description,this.envoie_to_add.quizes[j].niveau);
    if(this.envoie_to_add.quizes)
    {
        this._cour.quizes=this.envoie_to_add.quizes;
   
    }
  

    if(this.envoie_to_add.quizes[j].questions)
    {
        this._cour.quizes[j].questions=this.envoie_to_add.quizes[j].questions;
        this.toto=this.envoie_to_add.quizes[j];
    }

   
    this.toto.questions.push(this.tmpq);
       
        this._cour.quizes[j] = this.toto;
    
     
    if(this.envoie_to_add.parties)
    {
        this._cour.parties=this.envoie_to_add.parties;
   
    }
console.log("Voici Cour object");
console.log(this._cour);
     this.quizeService.addContenue(this._cour).subscribe(data => {
        this.quizeService.getQuize()
        .subscribe(tasks => {
            this.cours = tasks;
            this.up_quize_description='';
            this.up_quize_titre='';
        });
     });
  
    }
    addChoie()
    {
        if(!this.up_choie_status)
        {
            this.up_choie_status="false";
        }

    this.titi=new Choie(this.up_choie_text,this.up_choie_status);

    this._cour=new Cour(this.envoie_to_add.nom,this.envoie_to_add.description);
    this._cour._id=this.envoie_to_add._id;

    if(this.envoie_to_add.quizes)
    {
        this._cour.quizes=this.envoie_to_add.quizes;
   
    }
    if(this.envoie_to_add.parties)
    {
        this._cour.parties=this.envoie_to_add.parties;
   
    }
    var i=0;
    var j=0;
       for (let q of this.envoie_to_add.quizes ) {
   
           if(this.envoie_to_add.quizes[i].titre.localeCompare(this.titre_a_modifier) === 0)
           {
               j=i;
           }
           i++;
       }

       var ii=0;
       var jj=0;
   
          for (let ques of this.envoie_to_add.quizes[j].questions) 
          {
              if(this.envoie_to_add.quizes[j].questions[ii].text.localeCompare(this.text) === 0)
              {
                  jj=ii;
              }
              ii++;
          }
          this.tata=new Question(this.text);

          
          if(this._cour.quizes[j].questions[jj].choies)
          {
            this.tata.choies=this._cour.quizes[j].questions[jj].choies;
          }
          
          this.tata.choies.push(this.titi);
          this._cour.quizes[j].questions[jj]=this.tata;



     this.quizeService.addContenue(this._cour).subscribe(data => {
        this.quizeService.getQuize()
        .subscribe(tasks => {
            this.cours = tasks;
            this.up_quize_description='';
            this.up_quize_titre='';
        
        });
     });

    }

    question(quepar){
     
      console.log(this.Qui);
      this.Qui=quepar;
      console.log("******************************************");
      console.log(this.Qui);

      
    }
    partie(part1){
        this.part=part1;
        console.log("******************************************");
        console.log(this.part);
    }
    score(Qui){

        console.log("******************************************");
        console.log(this.listre);
    }

   ngOnInit() {
     /*  this.id=this._Activatedroute.snapshot.params['id'];
       */
   }
   

   onBack(): void {
      
   }

}