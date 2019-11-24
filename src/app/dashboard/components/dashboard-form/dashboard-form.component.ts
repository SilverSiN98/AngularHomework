import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Element } from "../../models/dashboard.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-elem-form',
    templateUrl: './dashboard-form.component.html'
})
export class DashboardFormComponent {
    @Input() elem: Element;
    @Output() submit: EventEmitter<Element> = new EventEmitter<Element>();

    constructor(private router: Router) {}

    onSubmit() {
        this.submit.emit(this.elem);
    }

    onBack() {
        this.router.navigate([`/dashboard`]);
    }
}