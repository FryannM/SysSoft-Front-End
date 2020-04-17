import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Posicion } from '../../models/posicion.model';
import { PosicionService } from '../../posicion.service';
import { Router } from '@angular/router';
import { LayoutUtilsService, MessageType } from '../../../../core/_base/crud';

@Component({
  selector: 'sys-posicion-form',
  templateUrl: './posicion-form.component.html'
})
export class PosicionFormComponent implements OnInit {

  title: string = 'Crear Posición';
  Company = 'Datos Básicos'
  hasFormErrors = false;
  message = 'Teams guardado  existosamente!'
  form: FormGroup
  backUrl = 'posiciones';

  @Input()
  set posiciones(value: Posicion) {
    value && this.form.patchValue(value);
  }
  @Input() posicion: Posicion;


  constructor(private fb: FormBuilder,
    private services: PosicionService,
    private layoutUtilsService: LayoutUtilsService,
    private router: Router) { }

  onCreateForm() {
    this.form = this.fb.group({
      id: [0],
      descripcion: ['', Validators.required],
      sueldo: ['', Validators.min(2)],
      estado: ['A', Validators.required],
      perfil: ['', Validators.required]

    });
  }


  ngOnInit() {
    this.onCreateForm();
  }

  onAlertClose($event) {
    this.hasFormErrors = false;
  }
  onSave() {
    if (this.form.invalid) {
      this.hasFormErrors = false;
      const controls = this.form.controls;
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched());
      this.hasFormErrors = true;
      return;
    }
    if (this.form.get('id').value !== 0) {
      this.services.updatePosiciones$(this.form.value).subscribe();
    } else {
      this.services.savePosiciones$(this.form.value).subscribe();
      this.onReset();
    }
    this.layoutUtilsService.showActionNotification(this.message, MessageType.Create, 5000, true, true);
  }
  onBack() {
    this.router.navigate([this.backUrl]);
  }
  onReset() {
    this.form.reset();
  }

}
