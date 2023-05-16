import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
	selector: 'app-dbz-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
	public characterAdd : Character[] = [
		{name : '', power : 0}
	];
	@Output()
	public newCharacter : EventEmitter<Character> = new EventEmitter();
	public emitCharacter() : void {
		console.log(this.characterAdd);
		this.newCharacter.emit(this.characterAdd[0]);
	}
}