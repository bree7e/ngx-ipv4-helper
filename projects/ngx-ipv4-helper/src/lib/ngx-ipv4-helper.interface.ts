/**
 * Input event
 * @see https://caniuse.com/#feat=input-event
 * @see https://developer.mozilla.org/en-US/docs/Web/API/InputEvent
 */
export class InputEvent extends UIEvent {
  /** inserted characters */
  readonly data: string | null;
  /** full list @see https://rawgit.com/w3c/input-events/v1/index.html#interface-InputEvent-Attributes */
  readonly inputType:
    | 'insertText'
    | 'deleteContentBackward'
    | 'deleteContentForward'
    | 'insertFromPaste'
    | 'insertFromDrop';
  /** indicating if the event is fired after compositionstart and before compositionend */
  readonly isComposing: boolean;
  /** information about richtext or plaintext data being added to or removed from editable content */
  readonly dataTransfer?: DataTransfer | null;
}
