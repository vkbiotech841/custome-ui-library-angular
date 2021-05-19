import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Font01Component } from './font01/font01.component';
import { Font02Component } from './font02/font02.component';



@NgModule({
	declarations:
		[
			Font01Component,
			Font02Component,
		],
	imports:
		[
			CommonModule
		],
	exports:
		[
			Font01Component,
			Font02Component,
		]
})
export class FontsModule { }
