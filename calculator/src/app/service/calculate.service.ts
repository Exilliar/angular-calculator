import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IApiResponse{
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  message: string;

  constructor(private http: HttpClient) { }

  send(): Observable<String>
  {
    console.log("send");
    this.message = "";
    // this.http.post('http://localhost:8000/recieveData',null,null)
    //   .subscribe(
    //     data => this.message = (data as IApiResponse).message,
    //     error => this.message = error
    //   );
    // console.log("messgage: " + this.message);
    return this.http.get<String>('http://localhost:8000/recieveData');
  }
}
