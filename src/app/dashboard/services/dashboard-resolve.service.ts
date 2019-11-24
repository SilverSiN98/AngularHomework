import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Element } from "../models/dashboard.model";
import { DashboardService } from "./dashboard.service";


@Injectable()
export class DashboardResolveService implements Resolve<Element> {

  constructor(private todoService: DashboardService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let elem = new Element();
    elem.Name = route.params['elem'];
    return elem;
  }
}