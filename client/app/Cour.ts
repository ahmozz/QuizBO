export class Choie
{
    text:string;
    status:string;
    constructor(var1,vor1)
    {
        this.text=var1;
        this.status=vor1;
    }
}
export class Question{
    text:string;
    choies:Choie[];
    constructor(var1)
    {
        this.text=var1;
        this.choies=[];
    }
}
export class Quize{
    titre: string;
    description: string;
    questions: Question[];
    niveau:string;
    constructor(var1,vor1,vir1)
    {
        this.titre=var1;
        this.description=vor1;
        this.niveau=vir1;
        this.questions=[];
    }
}
export class Partie{
    titre: string;
    description: string;
    constructor(var1,vor1)
    {
        this.titre=var1;
        this.description=vor1;
    }
}
export class Cour{
    _id:string;
    nom:string;
    description:string;
    quizes: Quize[];
    parties:Partie[];

    constructor(var1,vor1)
    {
        this.nom=var1;
        this.description=vor1;
        this.parties=[];
        this.quizes=[];
        
    }


}