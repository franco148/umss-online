import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { GATEWAY_SERVER_URL } from '../constants/app.constant';
import { UserStory } from '../data/model/user-story.model';
import { UserStoryDto } from '../data/dto/user-story-dto';

@Injectable({
  providedIn: 'root'
})
export class UserStoryService {

  serverUrl = `${GATEWAY_SERVER_URL}/proj-mgt/backlogs`;
  userStoryAddedChanged = new Subject<UserStory>();

  constructor(private http: HttpClient) { }

  save(userStory: UserStoryDto) {
    return this.http.post<UserStory>(this.serverUrl, userStory);
  }
}
