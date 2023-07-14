import { Component } from '@angular/core';
import { Address } from '../../models/address';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private http: HttpClient) {}

  public address!: Address;
  public zipCode: string = '';

  getData(): Observable<any> {
    let url = `https://viacep.com.br/ws/${this.zipCode}/json/`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  public buscarEndereco() {
    this.getData().subscribe((data) => {
      this.address = {
        street: data['logradouro'],
        district: data['bairro'],
        city: data['localidade'],
        state: data['uf'],
        zipCode: data['cep'],
      };
    });
  }
}
