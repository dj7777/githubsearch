import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class GithubService{
    private username:string;
    private client_id= '4d9a9544da50f3627e57';
    private client_secret= '78a266d5ea87b139268c03554af336e00464abcd';

    constructor(private _http: Http){
        console.log('Github Service Ready');
        this.username= 'bradtraversy';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
                .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
                .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }

}