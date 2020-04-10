import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'sys-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit {

  @Input() title: string;
  @Input() showBackButton: boolean = true;
  @Input() showResetButton: boolean = true;
  @Input() showSaveButton: boolean = true;
  @Input() showCreateButton: boolean = true;

  @Output() back = new Subject();
  @Output() reset = new Subject();
  @Output() save = new Subject();
  @Output() create = new Subject();
  
  constructor() { }

  ngOnInit() {
  }

  onBack() {
    this.back.next(true);
  }

  onReset() {
    this.reset.next(true);
  }

  onSave() {
    this.save.next();
  }

  onCreate() {
    this.create.next();
  }
}
