import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Element } from "../../models/dashboard.model";
import { DashboardService } from "../../services/dashboard.service";

@Component({
    selector: 'app-elem-edit',
    templateUrl: './dashboard-edit.component.html'
})
export class DashboardEditComponent implements OnInit {
    private elem: Element;
    private oldName: string;

    constructor(private router: Router, private route: ActivatedRoute, private service: DashboardService) {}

    ngOnInit() {
        this.elem = this.route.snapshot.data['elem'];
        this.oldName = this.elem.Name;
    }

    save() {
        this.service.put(this.oldName, this.elem.Name).subscribe(
            () => {
                this.router.navigate([`/dashboard`]);
            },
            (error) => {
                console.log(error);
            }
        );  
    }
}