import { Injectable } from '@angular/core';
import { AuthService } from '../components/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private authService: AuthService) { }
}
