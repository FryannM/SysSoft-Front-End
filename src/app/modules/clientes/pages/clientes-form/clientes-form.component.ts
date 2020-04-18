import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../../models/clientes.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientesService } from '../../clientes.service';
import { LayoutUtilsService, MessageType } from '../../../../core/_base/crud';
import { Router } from '@angular/router';
import { ProyectosDto } from '../../../../modules/proyectos/models/proyectos-models';
import { ProyectosService } from '../../../../modules/proyectos/proyectos.service';

@Component({
  selector: 'sys-clientes-form',
  templateUrl: './clientes-form.component.html',
})
export class ClientesFormComponent implements OnInit {

  title: string = 'Crear Clientes';
  Cliente = 'Datos Básicos'
  hasFormErrors = false;
  message = 'Clientes guardado  existosamente!'
  form: FormGroup
  backUrl = 'clientes';
  proyectos$: ProyectosDto[] = []


  @Input()
  set clientes(value: Cliente) {
    value && this.form.patchValue(value);
  }
  @Input() cliente: Cliente;


  constructor(private fb: FormBuilder,
    private services: ClientesService,
    private layoutUtilsService: LayoutUtilsService,
    private router: Router,
    private proyectoServices: ProyectosService) { }

  onCreateForm() {
    this.form = this.fb.group({
      id: [0, Validators.required],
      nombre1: ['', Validators.required],
      nombre2: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      cedulaRnc: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      proyecto: ['', Validators.required],
      proyectoCodigo: ['', Validators.required],


    });
  }

  ngOnInit() {
    this.onCreateForm();
    this.proyectoServices.getProyectoslist().subscribe(response => {
      this.proyectos$ = response;
    });
  }

  onAlertClose($event) {
    this.hasFormErrors = false;
  }
  onSave() {
    console.log("Formulario", this.form.value)
    if (this.form.invalid) {
      this.hasFormErrors = false;
      const controls = this.form.controls;
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched());
      this.hasFormErrors = true;
      return;
    }
    if (this.form.get('id').value !== 0) {
      this.services.updateClientes$(this.form.value).subscribe();
    } else {
      this.services.saveClientes$(this.form.value).subscribe();
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
