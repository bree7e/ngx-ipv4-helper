import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

import { InputEvent } from './ngx-ipv4-helper.interface';

/**
 * IPv4 input helper. Example "172.18.0.1".
 * Should сontains 4 octets separated by dots.
 * The maximum value in each octet is 255
 */
@Directive({
  selector: '[ngxIpv4Helper]'
})
export class NgxIpv4HelperDirective {
  /** old value, set on keydown */
  private _oldValue = '';
  /** old value, set on input */
  private _newValue = '';
  /** user pressed key */
  private _key = '';
  /** max octet value */
  private readonly maxOctetValue = 255;
  /** octet count */
  private readonly octetCount = 4;
  /** dot count in */
  private readonly dotCount = 3;
  /** max octet symbol count */
  private readonly maxOctetSymbolCount = 3;

  constructor(private _formControl: NgControl) {}

  /**
   * Input evet handler
   * @param event - Input event.
   */
  @HostListener('input', ['$event'])
  onInput(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    this._newValue = input.value;
    if (this._key === ',') {
      this._newValue = input.value.replace(/,/g, '.');
      input.value = this._newValue;
    }
    if (
      ['.', ','].includes(this._key) &&
      (this._newValue.match(/\./g) || []).length > this.dotCount
    ) {
      const caretPosition = --input.selectionStart;
      this._patchValue(this._oldValue);
      input.setSelectionRange(caretPosition, caretPosition);
      return;
    }
    const octets = this._newValue.split('.');
    const lastOctet = octets[octets.length - 1];
    if (octets.length < this.octetCount) {
      if (Number(lastOctet) > this.maxOctetValue) {
        this._patchValue(this._oldValue + '.' + this._key);
        return;
      }
      if (lastOctet.length === this.dotCount && !['Delete', 'Backspace'].includes(this._key)) {
        this._patchValue(`${input.value}.`);
        return;
      }
    }

    if (
      octets.some(value => {
        if (value === '') {
          return false;
        }
        return Number(value) > this.maxOctetValue;
      })
    ) {
      const caretPosition = --input.selectionStart;
      this._patchValue(this._oldValue);
      input.setSelectionRange(caretPosition, caretPosition);
    }

    if (octets.some(oct => oct.length > this.maxOctetSymbolCount)) {
      this._patchValue(this._oldValue);
    }
  }

  /**
   * Patch reactive form input for synchronize with display
   * @param value - setting control value
   */
  private _patchValue(value: string): void {
    if (this._formControl && this._formControl.control) {
      this._formControl.control.patchValue(value);
    } else {
      throw new Error('Use reactive form [veppIpv4]');
    }
  }

  /**
   * Keydown handler. Restrict keys. Set oldValue
   * @param event - keyboard event
   */
  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    this._oldValue = input.value;
    this._key = event.key;
    if (this._allowedKeys(event)) {
      return;
    }
    event.preventDefault();
  }

  /**
   * Check event for comma, dot and Ctrl+A,C,V,X,Z
   * @param event - keyboard event
   */
  private _allowedKeys(event: KeyboardEvent): boolean {
    return (
      (event.code === 'KeyA' && (event.ctrlKey || event.metaKey)) || // allow: Ctrl+A or cmd+A (Mac)
      (event.code === 'KeyC' && (event.ctrlKey || event.metaKey)) || // allow: Ctrl+C or cmd+C (Mac)
      (event.code === 'KeyV' && (event.ctrlKey || event.metaKey)) || // allow: Ctrl+V or cmd+V (Mac)
      (event.code === 'KeyX' && (event.ctrlKey || event.metaKey)) || // allow: Ctrl+X or cmd+X (Mac)
      (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) || // allow: Ctrl+Z or cmd+Z (Mac)
      (event.key >= '0' && event.key <= '9') ||
      [
        'Delete',
        'Backspace',
        'Tab',
        'Escape',
        'Enter',
        'End',
        'Home',
        'ArrowLeft',
        'ArrowRight',
        'ArrowDown',
        'ArrowUp',
        '.',
        ',',
      ].includes(event.key)
    );
  }
}
