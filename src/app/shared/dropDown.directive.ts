import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector : "[app-dropDown]"
})

export class dropDown{
@HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

}