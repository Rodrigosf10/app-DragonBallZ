import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		MainPageComponent,
		ListComponent,
		CharactersComponent
	],
	exports: [
		MainPageComponent
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class DbzModule { }