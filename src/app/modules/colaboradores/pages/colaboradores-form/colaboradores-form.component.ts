import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProyectosDto } from '../../../../modules/proyectos/models/proyectos-models';
import { ColaboradoresService } from '../../colaboradores.service';
import { LayoutUtilsService, MessageType } from '../../../../core/_base/crud';
import { Router } from '@angular/router';
import { ProyectosService } from '../../../../modules/proyectos/proyectos.service';
import { Colaboradores } from '../../models/colaboradores.model';
import { DepartamentosService } from '../../../../modules/departamentos/departamentos.service';
import { DepartamentoDto } from '../../../../modules/departamentos/models/departamentos';
import { UsuarioService } from '../../../../modules/usuarios/usuario.service';
import { Cargo } from '../../../../modules/usuarios/models/usuario.models';

@Component({
  selector: 'sys-colaboradores-form',
  templateUrl: './colaboradores-form.component.html',
  styles: []
})
export class ColaboradoresFormComponent implements OnInit {


  title: string = 'Crear Colaboradores';
  Cliente = 'Datos Básicos'
  hasFormErrors = false;
  message = 'Colaboradores guardado  existosamente!'
  form: FormGroup
  backUrl = 'colaboradores';
  proyectos$: ProyectosDto[] = [];
  departamentos$: DepartamentoDto[] = [];
  cargos$: Cargo[] = []


  @Input()
  set colaboradores(value: Colaboradores) {
    value && this.form.patchValue(value);
  }
  @Input() colaborador: Colaboradores;


  constructor(private fb: FormBuilder,
    private services: ColaboradoresService,
    private layoutUtilsService: LayoutUtilsService,
    private router: Router,
    private proyectoServices: ProyectosService,
    private departamentService: DepartamentosService,
    private usuarioService: UsuarioService) { }

  onCreateForm() {
    this.form = this.fb.group({
      id: [0, Validators.required],
      nombre1: ['', Validators.required],
      nombre2: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      cedula: ['', Validators.required],
      sexo: ['', Validators.required],
      fecha_Nacimiento: ['', Validators.required],
      departamento: ['', Validators.required],
      pocisiones: ['', Validators.required],
      //  proyecto: ['', Validators.required],
      estado: ['A']


    });
  }

  ngOnInit() {
    this.onCreateForm();
    this.proyectoServices.getProyectoslist().subscribe(response => {
      this.proyectos$ = response;
    });
    this.departamentService.getDepartamentolist().subscribe(response => {
      this.departamentos$ = response;
    });
    this.usuarioService.getCargo().subscribe(response => {
      this.cargos$ = response;
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
      debugger;
      this.services.updateColaboradores$(this.form.value).subscribe();
    } else {
      this.services.saveColaboradores$(this.form.value).subscribe();
     // this.onReset();
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
