import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Element } from "../../models/dashboard.model";
import { DashboardService } from "../../services/dashboard.service";

@Component({
    selector: 'app-elem-create',
    templateUrl: './dashboard-create.component.html'
})
export class DashboardCreateComponent implements OnInit {
    private elem: Element;

    constructor(private router: Router, private service: DashboardService) {}

    ngOnInit() {
        this.elem = new Element();
    }

    save() {
        this.service.post(this.elem.Name).subscribe(
            () => {
                this.router.navigate([`/dashboard`]);
            },
            (error) => {
                console.log(error);
            }
        );  
    }
}