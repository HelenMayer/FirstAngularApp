import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { map, catchError } from 'rxjs/operators';


import { Observable } from 'rxjs/internal/Observable';
import { ICustomer, IOrder } from '../shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/';
    
    constructor(private http: HttpClient) { }

    public getCustomers() : Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json');
    }
    
    public getCustomer(id: number) : Observable<ICustomer> {
      return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json').pipe(map(customers => {
            let customer = customers.filter((cust: ICustomer) => cust.id === id);
            return (customer && customer.length) ? customer[0] : null;
          }))
    }

    public getOrders(id: number) : Observable<IOrder[]> {
      return this.http.get<IOrder[]>(this.baseUrl + 'orders.json').pipe(map(orders => {
            let custOrders = orders.filter((order: IOrder) => order.customerId === id);
            return custOrders;
          }));
    }

}