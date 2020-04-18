import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Departamentos } from '../../models/departamentos';
import { DepartamentosService } from '../../departamentos.service';
import { Router } from '@angular/router';
import { LayoutUtilsService, MessageType } from '../../../../core/_base/crud';

@Component({
  selector: 'sys-departamentos-form',
  templateUrl: './departamentos-form.component.html',
})
export class DepartamentosFormComponent implements OnInit {

  title: string = 'Crear Departamentos';
  Company = 'Datos Básicos'
  hasFormErrors = false;
  message = 'Departamentos guardado  existosamente!'
  form: FormGroup
  backUrl = 'departamentos';

  @Input()
  set departamentos(value: Departamentos) {
    value && this.form.patchValue(value);
  }
  @Input() departamento: Departamentos;

  constructor(private fb: FormBuilder,
    private services: DepartamentosService,
    private layoutUtilsService: LayoutUtilsService,
    private router: Router) { }

  onCreateForm() {
    this.form = this.fb.group({
      id: [0],
      descripcion: ['', Validators.required],
      nombre: ['', Validators.required],
      estado: ['A', Validators.required],


    });
  }

  ngOnInit() {
    this.onCreateForm();
  }

  onAlertClose($event) {
    this.hasFormErrors = false;
  }
  onSave() {

    console.log(this.form.value);
    if (this.form.invalid) {
      this.hasFormErrors = false;
      const controls = this.form.controls;
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched());
      this.hasFormErrors = true;
      return;
    }
    if (this.form.get('id').value !== 0) {
      this.services.updateDepartamentos$(this.form.value).subscribe();
    } else {
      this.services.saveDepartamentos$(this.form.value).subscribe();
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
