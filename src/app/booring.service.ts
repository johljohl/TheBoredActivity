import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // This is the default implementation
import { BoringApiResponse } from './BoringApiResponse'; // This is the BoringApiResponse object

@Injectable({
  providedIn: 'root',
})
export class BooringService {
  constructor(private _httpClient: HttpClient) {} // This is the constructor that will be called  when the service is instantiated

  getActivity() {
    // This method returns the activity object that will be used to retrieve the activity

    return this._httpClient
      .get<BoringApiResponse>(`https://www.boredapi.com/api/activity/
    `);
  }
}
