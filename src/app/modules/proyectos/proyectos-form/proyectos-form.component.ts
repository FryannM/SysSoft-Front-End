import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Proyectos } from '../models/proyectos-models';
import { ProyectosService } from '../proyectos.service';
import { Router } from '@angular/router';
import { LayoutUtilsService, MessageType } from '../../../../app/core/_base/crud';

@Component({
  selector: 'Sys-proyectos-form',
  templateUrl: './proyectos-form.component.html',
  styles: []
})
export class ProyectosFormComponent implements OnInit {
  
  title: string = 'Crear Proyectos';
  hasFormErrors = false;
  message = 'Proyecto guardado  existosamente!'
  form: FormGroup
  backUrl ='proyectos';

  @Input()
  set proyectos(value: Proyectos) {
    value && this.form.patchValue(value);
  }
  @Input() proyecto: Proyectos;

  constructor(private fb: FormBuilder,
    private services: ProyectosService,
     private layoutUtilsService: LayoutUtilsService,
     private router : Router) { }

     onCreateForm(){
      this.form = this.fb.group({
        id: [0],
        descripcion: ['', Validators.required],
        fechaInicio: ['', Validators.required],
        fechaFin: ['', Validators.required],
        estado:['A',Validators.required]
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
      this.services.updateProyectos$(this.form.value).subscribe();
    } else {
      this.services.saveProyectos$(this.form.value).subscribe();
    }
    this.layoutUtilsService.showActionNotification(this.message, MessageType.Create, 5000, true, true);
  }
  onBack() {
    this.router.navigate([this.backUrl]);
  }
  onReset() {
  }
}