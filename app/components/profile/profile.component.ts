import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    user: any[];
    repos: any[];
    username: string;
    constructor(private profileSvc: ProfileService) { }

    ngOnInit() {

    }
    searchUser() {
        this.profileSvc.updateUser(this.username)
        this.profileSvc.getUser().subscribe((res) => {
            console.log(res);
            this.user = res;
        });
        this.profileSvc.getRepos().subscribe((res) => {
            console.log(res);
            this.repos = res;
        });
    }
}