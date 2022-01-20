import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery!: MediaQueryList;
  
  private mobileQueryListener!: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private snackBar: MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change',this.mobileQueryListener);
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change',this.mobileQueryListener);
  }

  SignOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    this.router.navigate(['/login']);
    this.snackBar.open("Signed Out succesfully",'',{duration :4000})
  }
}
