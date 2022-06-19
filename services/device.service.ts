import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DeviceService {
  isDesktop$ = new BehaviorSubject<boolean>(false);
  isTablet$ = new BehaviorSubject<boolean>(false);
  isMobile$ = new BehaviorSubject<boolean>(false);

  constructor() {
    window.addEventListener('resize', (e) => {
      this.windowResized();
    });

    this.windowResized();
  }

  private windowResized() {
    this.isDesktop$.next(false);
    this.isTablet$.next(false);
    this.isMobile$.next(false);

    let screenWidth = window.innerWidth;

    if(screenWidth > 760) {
      this.isDesktop$.next(true);
    }
    else if(screenWidth > 568) {
      this.isTablet$.next(true);
    }
    else {
      this.isMobile$.next(true);
    }
  }
}
