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
  proyectos$ : ProyectosDto[] = []

  @Input()
  set clientes(value: Cliente) {
    value && this.form.patchValue(value);
  }
  @Input() cliente: Cliente;


  constructor(private fb: FormBuilder,
    private services: ClientesService,
    private layoutUtilsService: LayoutUtilsService,
    private router: Router,
    private proyectoServices : ProyectosService) { }

  onCreateForm() {
    this.form = this.fb.group({
      Codigo: [0, Validators.required],
      Nombre1: ['', Validators.required],
      Nombre2: ['', Validators.required],
      Apellido1: ['', Validators.required],
      Apellido2: ['', Validators.required],
      CedulaRnc: ['', Validators.required],
      Email: ['', Validators.required],
      Telefono: ['', Validators.required],
      Proyecto: ['', Validators.required],

    });
  }

  ngOnInit() {
    this.onCreateForm();
    this.proyectoServices.getProyectoslist().subscribe( response => {
      this.proyectos$ = response;
   });
  }

  onAlertClose($event) {
    this.hasFormErrors = false;
  }
  onSave() {
     console.log("Formulario",this.form.value) 
     //00103062071
    if (this.form.invalid) {
      this.hasFormErrors = false;
      const controls = this.form.controls;
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched());
      this.hasFormErrors = true;
      return;
    }
    if (this.form.get('Codigo').value !== 0) {
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
