import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizService{
    constructor(private http:Http){
        console.log('Quize Service Initialized...');
    }
    getQuize(){
        return this.http.get('/liste/quizes')
            .map(res => res.json());
    }
    addCour(newTask){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/liste/quizes', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }
    deleteCour(id){
        return this.http.delete('/liste/cour/'+id)
            .map(res => res.json());
    }
    updateCour(cour){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/liste/cour/'+cour._id, JSON.stringify(cour), {headers: headers})
            .map(res => res.json());
    }
    getCour(id)
    {
        return this.http.get('/liste/cour/'+id)
            .map(res => res.json());
    }
    addContenue(cour)
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/liste/cour/'+cour._id, JSON.stringify(cour), {headers: headers})
            .map(res => res.json());
    }
}
