import { Component, Input, OnInit } from '@angular/core';
import { SparklineChartOptions } from '../../../../../core/_base/layout';
import { TotalReacord } from '../../../../../core/auth/_models/user.model';

@Component({
	selector: 'kt-widget26',
	templateUrl: './widget26.component.html',
	styleUrls: ['./widget26.component.scss']
})
export class Widget26Component implements OnInit {

	@Input() value: number;
	@Input() desc: string;
	@Input() options: SparklineChartOptions;

	constructor() {
	}

	ngOnInit() {
	}

}
