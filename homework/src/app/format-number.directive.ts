import { Directive } from '@angular/core';

@Directive({
  selector: '[appFormatNumber]'
})
export class FormatNumberDirective {
  // constructor(private el: ElementRef) {}

  // @HostListener('input', ['$event.target.value'])
  // onInput(value: string) {
  //   const phoneNumber = value.replace(/[^0-9]/g, '');

  //   const formattedPhoneNumber = this.formatPhoneNumber(phoneNumber);

  //   this.el.nativeElement.value = formattedPhoneNumber;
  // }

  // formatPhoneNumber(phoneNumber: string): string {
  //   const formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  //   return formattedPhoneNumber;
  // }
}
