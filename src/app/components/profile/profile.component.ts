import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from 'src/app/models/Profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService:ProfileService) { }

  profile: Profile | undefined;

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(response => {
        this.profile = response;
    });
  }

}
