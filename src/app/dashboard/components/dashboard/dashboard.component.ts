import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DashboardService } from "../../services/dashboard.service";

@Component({
    selector: 'app-dashboard-form',
    templateUrl: './dashboard.component.html',
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    public messages: string[];

    constructor(private router: Router, private service: DashboardService) {}

    ngOnInit() {
        this.service.get().subscribe(
            (result) => {
                this.messages = result;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    add() {
        this.router.navigate([`/dashboard/new`]);
    }

    edit(str: string) {
        this.router.navigate([`/dashboard/${str}`]);
    }

    delete(str: string) {
        this.service.delete(str).subscribe(
            () => {
                this.messages.splice(this.messages.findIndex(item => item === str), 1);
            },
            (error) => {
                console.log(error);
            }
        );
    }
}